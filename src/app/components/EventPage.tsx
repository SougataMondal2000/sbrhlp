"use client";
import { FC, useEffect, useState } from "react";
import { baseURL } from "../baseurl";
import axios from "axios";
import { MoonLoader } from "react-spinners";

interface EventImage {
  url: string;
  type: "main" | "secondary";
}

interface Event {
  title: string;
  content: string;
  year: string;
}

interface EventPageProps {
  year: string;
}

const EventPage: FC<EventPageProps> = ({ year }) => {
  const [data, setData] = useState<Event | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get<Event[]>(`${baseURL}/events?year=${year}`);
        setData(res.data[0] || null); // Get the first event from the array
      } catch (error) {
        console.error("Error fetching event:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [year]);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <MoonLoader color={"#FF7536"} />
      </div>
    );
  }

  if (!data) {
    return <p>No event found.</p>;
  }

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#FF7536]">
        {data.title}
      </h1>
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
      {/* Handle images and other parts if needed */}
    </div>
  );
};

export default EventPage;
