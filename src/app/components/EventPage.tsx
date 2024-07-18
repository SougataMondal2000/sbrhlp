import { FC } from "react";

interface Event {
  title: string;
  tagline: string;
  imageUrl?: string;
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
          {event.imageUrl && (
            <div className="flex items-center mb-8">
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-48 h-48 object-cover rounded-lg shadow-lg mr-4"
              />
              <p className="italic">{event.tagline}</p>
            </div>
          )}
          {!event.imageUrl && <p className="italic mb-2">{event.tagline}</p>}
        </div>
      ))}
    </div>
  );
};

export default EventPage;
