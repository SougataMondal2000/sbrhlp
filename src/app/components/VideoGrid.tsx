import React from "react";

interface Video {
  image: string;
  title: string;
  date: string;
  isVideo?: boolean;
}

interface VideoGridProps {
  videos: Video[];
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos }) => {
  return (
    <div className="flex flex-wrap justify-between">
      {videos.map((video, index) => (
        <div key={index} className="w-full md:w-2/4 p-1">
          <div className="bg-white shadow-lg overflow-hidden">
            <iframe
              width="100%"
              height="300"
              src={video.image}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-4 text-center">
            <p className="font-bold">{video.date}</p>
            <p className="text-gray-600">{video.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
