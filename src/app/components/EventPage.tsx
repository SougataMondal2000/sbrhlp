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
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#FF7536]">
        {year} Events
      </h1>
      {events.map((event, index) => (
        <div
          key={index}
          className="mb-12 bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-4 text-center">
              {event.title}
            </h2>
            <p className="italic mb-4 text-center">{event.tagline}</p>
            {event.images && event.images.length > 0 && (
              <div className="flex flex-col items-center">
                {event.images
                  .filter((img) => img.type === "main")
                  .map((img, i) => (
                    <img
                      key={i}
                      src={img.url}
                      alt={event.title}
                      className="w-full h-auto object-cover rounded-lg shadow-lg mb-4 max-w-xs sm:max-w-md"
                    />
                  ))}
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                  {event.images
                    .filter((img) => img.type === "secondary")
                    .map((img, i) => (
                      <div
                        key={i}
                        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 overflow-hidden rounded-lg shadow-lg"
                      >
                        <img
                          src={img.url}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventPage;
