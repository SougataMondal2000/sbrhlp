"use client";
import React, { useState, useCallback } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

interface Publication {
  image: string;
  title: string;
  date: string;
}

interface PublicationsCarouselProps {
  publications: Publication[];
  itemsPerPage?: number;
}

const PublicationsCarousel: React.FC<PublicationsCarouselProps> = ({
  publications,
  itemsPerPage = 3,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [viewAll, setViewAll] = useState(false);
  const totalPages = Math.ceil(publications.length / itemsPerPage);

  const nextPage = useCallback(() => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  }, [totalPages]);

  const handleViewAll = () => {
    setViewAll(true);
  };

  const handleBackToCarousel = () => {
    setViewAll(false);
  };

  const renderPublication = (publication: Publication, index: number) => (
    <div key={index} className={`${viewAll ? "w-1/3 p-2" : "w-1/3 px-2"}`}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
        <img
          src={publication.image}
          alt={publication.title}
          className="w-full h-3/4 object-cover"
        />
        <div className="p-4">
          <div className="w-3 h-3 border-2 border-orange-500 rounded-full mx-auto mb-2"></div>
          <p className="font-bold text-center">{publication.date}</p>
          <p className="text-gray-600 text-center">{publication.title}</p>
        </div>
      </div>
    </div>
  );

  const renderCarouselView = () => {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    return publications.slice(start, end).map(renderPublication);
  };

  const renderAllView = () => {
    return publications.map(renderPublication);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden">
      <div
        className={`flex ${
          viewAll ? "flex-wrap" : "justify-between"
        } items-center`}
      >
        {viewAll ? renderAllView() : renderCarouselView()}
      </div>
      {!viewAll && (
        <>
          <button
            onClick={prevPage}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none z-30"
          >
            <MdNavigateBefore />
          </button>
          <button
            onClick={nextPage}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none z-30"
          >
            <MdNavigateNext />
          </button>
        </>
      )}
      <div className="text-center mt-4">
        {viewAll ? (
          <button
            onClick={handleBackToCarousel}
            className="bg-[#FF7536] text-white px-4 py-2 rounded-md  focus:outline-none"
          >
            Back to Carousel
          </button>
        ) : (
          <button
            onClick={handleViewAll}
            className="bg-[#FF7536] text-white px-4 py-2 rounded-md  focus:outline-none"
          >
            View All
          </button>
        )}
      </div>
    </div>
  );
};

export default PublicationsCarousel;
