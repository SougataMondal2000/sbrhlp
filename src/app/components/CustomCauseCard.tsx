import React from "react";
import Image from "/mnt/data/image.png"; // Adjust the path as needed
import { IconType } from "react-icons";

interface CardProps {
  image: string;
  icon: IconType;
  title: string;
  description: string;
}

const CustomCauseCard: React.FC<CardProps> = ({
  image,
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="lg:w-[600px] lg:h-[430px] md:w-[350px] md:h-[470px] rounded overflow-hidden shadow-sm relative ">
      <img className="w-full h-full object-cover" src={image} alt={title} />
      <div className="px-6 py-4 bg-white absolute bottom-0 left-0 right-0 bg-opacity-0">
        <div>
          <Icon />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default CustomCauseCard;
