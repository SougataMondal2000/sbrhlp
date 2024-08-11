"use client";
import { FC, useState } from "react";

interface CausePageProps {
  title: string;
  description: string;
  imageUrl: string;
  content: string;
  playlistUrl?: string;
}

const CausePage: FC<CausePageProps> = ({
  title,
  description,
  imageUrl,
  content,
  playlistUrl,
}) => {
  const [isContentExpanded, setIsContentExpanded] = useState(false);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="w-full mb-8">
        <img
          src={imageUrl}
          alt={title}
          className="w-full md:h-96 h-64 object-cover rounded-lg shadow-lg"
        />
      </div>

      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-6 text-center text-[#FF7536]">
          {title}
        </h1>
        <div className="prose prose-lg max-w-none md:w-full">
          <p>{description}</p>
          <p dangerouslySetInnerHTML={{ __html: content }}></p>
        </div>
        <div className="w-full flex justify-center">
          {playlistUrl && (
            <div className=" mt-12 lg:w-[50%] md:w-[70%] w-full">
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/videoseries?list=${playlistUrl}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CausePage;
