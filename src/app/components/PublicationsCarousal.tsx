import React, { useState } from "react";

interface Publication {
  image: string;
  title: string;
  date: string;
  isVideo?: boolean;
}

interface PublicationsCarouselProps {
  publications: Publication[];
}

const PublicationsCarousel: React.FC<PublicationsCarouselProps> = ({
  publications,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % publications.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + publications.length) % publications.length
    );
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <h2 className="md:text-5xl text-3xl font-serif mb-2 max-w-5xl mx-auto px-4 text-center">
        Legal Status
      </h2>
      <div className="relative md:mt-10 mt-4">
        <div className="flex space-x-6 md:justify-center overflow-x-auto pb-8">
          {publications.map((publication, index) => (
            <div key={index} className="flex-none w-80">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {publication.isVideo ? (
                  <iframe
                    width="100%"
                    height="315"
                    src={publication.image}
                    title={publication.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="p-4"
                  ></iframe>
                ) : (
                  <img
                    src={publication.image}
                    alt={publication.title}
                    className="w-full h-96 object-cover p-4"
                  />
                )}
              </div>
              <div className="mt-8 text-center">
                <div className="w-3 h-3 border-2 border-orange-500 rounded-full mx-auto mb-2"></div>
                <p className="font-bold">{publication.date}</p>
                <p className="text-gray-600">{publication.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none"
      >
        Next
      </button>
    </div>
  );
};

export default PublicationsCarousel;
