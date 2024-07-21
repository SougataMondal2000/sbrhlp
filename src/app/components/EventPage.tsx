import { FC } from "react";

interface EventImage {
  url: string;
  type: "main" | "secondary";
}

interface Event {
  title: string;
  tagline: string;
  images?: EventImage[];
}

interface EventPageProps {
  year: string;
  events: Event[];
}

const EventPage: FC<EventPageProps> = ({ year, events }) => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#FF7536]">
        {year} Events
      </h1>
      {events.map((event, index) => (
        <div key={index} className="mb-12 flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4">{event.title}</h2>
          {event.images && event.images.length > 0 && (
            <div className="flex flex-col items-center mb-8">
              {event.images
                .filter((img) => img.type === "main")
                .map((img, i) => (
                  <img
                    key={i}
                    src={img.url}
                    alt={event.title}
                    className="w-48 h-48 object-cover rounded-lg shadow-lg mb-4"
                  />
                ))}
              <p className="italic mb-4">{event.tagline}</p>
              <div className="flex flex-wrap justify-center">
                {event.images
                  .filter((img) => img.type === "secondary")
                  .map((img, i) => (
                    <img
                      key={i}
                      src={img.url}
                      alt={event.title}
                      className="w-24 h-24 object-cover rounded-lg shadow-lg m-2"
                    />
                  ))}
              </div>
            </div>
          )}
          {!event.images && <p className="italic mb-2">{event.tagline}</p>}
        </div>
      ))}
    </div>
  );
};

export default EventPage;
