"use client";
import React, { useState, useEffect, useCallback } from "react";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

interface Publication {
  image: string;
  title: string;
  date: string;
}

interface PublicationsCarouselProps {
  publications: Publication[];
  autoSlideInterval?: number;
}

const PublicationsCarousel: React.FC<PublicationsCarouselProps> = ({
  publications,
  autoSlideInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % publications.length);
  }, [publications.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + publications.length) % publications.length
    );
  }, [publications.length]);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(intervalId);
  }, [nextSlide, autoSlideInterval]);

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      <div className="relative flex justify-center items-center">
        <div className="absolute left-0 w-1/6 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 w-1/6 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
        <div className="flex items-center justify-center space-x-4">
          {[-1, 0, 1].map((offset) => {
            const index =
              (currentIndex + offset + publications.length) %
              publications.length;
            const publication = publications[index];
            return (
              <div
                key={index}
                className={`transition-all duration-300 ${
                  offset === 0 ? "w-96 h-128 z-20" : "w-64 h-96 opacity-50"
                }`}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                  <img
                    src={publication.image}
                    alt={publication.title}
                    className="w-full h-3/4 object-cover"
                  />
                  <div className="p-4">
                    <div className="w-3 h-3 border-2 border-orange-500 rounded-full mx-auto mb-2"></div>
                    <p className="font-bold text-center">{publication.date}</p>
                    <p className="text-gray-600 text-center">
                      {publication.title}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none z-30"
      >
        <MdNavigateBefore />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none z-30"
      >
        <MdNavigateNext />
      </button>
    </div>
  );
};

export default PublicationsCarousel;
