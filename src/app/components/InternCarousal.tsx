"use client";
import React, { useState, useCallback } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

interface Intern {
  image: string;
  name: string;
}

interface InternCarouselProps {
  publications: Intern[];
  itemsPerPage?: number;
}

const InternCarousel: React.FC<InternCarouselProps> = ({
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

  const handleViewMore = () => setViewAll(true);
  const handleBackToCarousel = () => setViewAll(false);

  const renderIntern = (publication: Intern, index: number) => (
    <div
      key={index}
      className={`${
        viewAll ? "w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4" : "w-full px-4"
      }`}
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full transition-all duration-300 transform hover:scale-105">
        <img
          src={publication.image}
          alt={publication.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <div className="w-3 h-3 border-2 border-[#FF7536] rounded-full mx-auto mb-4"></div>
          <p className="text-gray-800 text-center font-semibold text-lg">
            {publication.name}
          </p>
        </div>
      </div>
    </div>
  );

  const renderCarouselView = () => {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    return publications.slice(start, end).map(renderIntern);
  };

  const renderAllView = () => publications.map(renderIntern);

  return (
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden py-12">
      <div
        className={`flex ${
          viewAll ? "flex-wrap" : "justify-start"
        } items-center`}
      >
        {viewAll ? renderAllView() : renderCarouselView()}
      </div>
      {!viewAll && (
        <>
          <button
            onClick={prevPage}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md focus:outline-none z-30 transition-all duration-300 hover:bg-[#FF7536] hover:text-white"
          >
            <MdNavigateBefore className="text-2xl" />
          </button>
          <button
            onClick={nextPage}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md focus:outline-none z-30 transition-all duration-300 hover:bg-[#FF7536] hover:text-white"
          >
            <MdNavigateNext className="text-2xl" />
          </button>
        </>
      )}
      <div className="text-center mt-12">
        <button
          onClick={viewAll ? handleBackToCarousel : handleViewMore}
          className="bg-[#FF7536] text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FF7536] focus:ring-opacity-50"
        >
          {viewAll ? "Back to Carousel" : "View All"}
        </button>
      </div>
    </div>
  );
};

export default InternCarousel;
