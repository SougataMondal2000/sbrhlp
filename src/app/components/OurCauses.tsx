"use client";
import Image from "next/image";
import { FC, useState } from "react";

interface CausePageProps {
  title: string;
  description: string;
  imageUrl: string;
  content: string;
  videoUrl?: string;
}

const CausePage: FC<CausePageProps> = ({
  title,
  description,
  imageUrl,
  content,
  videoUrl,
}) => {
  const [isContentExpanded, setIsContentExpanded] = useState(false);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center text-[#FF7536]">
        {title}
      </h1>

      <div className="w-full mb-8">
        <img
          src={imageUrl}
          alt={title}
          className="w-full md:h-96 h-64 object-cover rounded-lg shadow-lg"
        />
      </div>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {videoUrl && (
          <div className="md:w-1/2">
            <iframe
              width="100%"
              height="315"
              src={videoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        )}
        <div className="prose prose-lg max-w-none md:w-1/2">
          <p>{description}</p>
          <div
            className={`relative overflow-hidden transition-all duration-500 ease-in-out ${
              isContentExpanded ? "max-h-full" : "max-h-96"
            }`}
          >
            <div dangerouslySetInnerHTML={{ __html: content }} />
            {!isContentExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
            )}
          </div>
          <button
            onClick={() => setIsContentExpanded(!isContentExpanded)}
            className="mt-4 px-6 py-2 bg-[#FF7536] text-white rounded-full hover:scale-110 duration-300 md:py-4 focus:outline-none focus:ring-2 focus:ring-[#FF7536] focus:ring-offset-2"
          >
            {isContentExpanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CausePage;
