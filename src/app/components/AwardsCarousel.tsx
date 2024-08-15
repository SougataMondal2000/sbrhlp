"use client";
import React, { useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

interface Award {
  image: string;
  title: string;
  date: string;
}

interface AwardsCarouselProps {
  awards: Award[];
  itemsPerPage?: number;
}

const AwardsCarousel: React.FC<AwardsCarouselProps> = ({
  awards,
  itemsPerPage = 3,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [viewAll, setViewAll] = useState(false);
  const totalPages = Math.ceil(awards.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const handleViewAll = () => {
    setViewAll(true);
  };

  const handleBackToCarousel = () => {
    setViewAll(false);
  };

  const renderAward = (award: Award, index: number) => (
    <div
      key={index}
      className={`${viewAll ? "w-full md:w-1/3 p-2" : "w-full md:w-72"}`}
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={award.image}
          alt={award.title}
          className="w-full h-96 object-cover p-4"
        />
      </div>
      <div className="mt-8 text-center">
        <div className="w-3 h-3 border-2 border-orange-500 rounded-full mx-auto mb-2"></div>
        <p className="font-bold">{award.date}</p>
        <p className="text-gray-600">{award.title}</p>
      </div>
    </div>
  );

  const renderCarouselView = () => {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;
    return awards.slice(start, end).map(renderAward);
  };

  const renderAllView = () => {
    return awards.map(renderAward);
  };

  return (
    <div className="relative md:mt-10 mt-4">
      <div
        className={`flex ${
          viewAll ? "flex-wrap" : "space-x-6"
        } md:justify-center overflow-x-auto pb-8`}
      >
        {viewAll ? renderAllView() : renderCarouselView()}
      </div>
      {!viewAll && (
        <>
          <button
            onClick={prevPage}
            className="absolute left-0 bottom-10 transform -translate-y-1/2 rounded-full p-2"
          >
            <MdNavigateBefore className="w-6 h-6 text-orange-500" />
          </button>
          <button
            onClick={nextPage}
            className="absolute right-0 bottom-10 transform -translate-y-1/2 rounded-full p-2"
          >
            <MdNavigateNext className="w-6 h-6 text-orange-500" />
          </button>
        </>
      )}
      <div className="text-center mt-4">
        {viewAll ? (
          <button
            onClick={handleBackToCarousel}
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none"
          >
            Back to Carousel
          </button>
        ) : (
          <button
            onClick={handleViewAll}
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 focus:outline-none"
          >
            View All Awards
          </button>
        )}
      </div>
    </div>
  );
};

export default AwardsCarousel;
