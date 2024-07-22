import React from "react";
import Image from "/mnt/data/image.png"; // Adjust the path as needed
import { IconType } from "react-icons";
import Link from "next/link";

interface CardProps {
  image: string;
  icon: IconType;
  title: string;
  description: string;
  href: string;
}

const CustomCauseCard: React.FC<CardProps> = ({
  image,
  icon: Icon,
  title,
  description,
  href,
}) => {
  return (
    <div className="lg:w-[600px] lg:h-[430px] md:w-[350px] md:h-[470px] w-full h-[500px] rounded overflow-hidden shadow-sm relative ">
      <img className="w-full h-full object-cover" src={image} alt={title} />
      <div className="px-6 py-4 bg-white absolute top-28 left-0 right-0 bg-opacity-0">
        <div className="cursor-pointer rounded-full bg-white w-fit h-fit p-[20px] mb-10">
          <Icon className="w-8 h-8" />
        </div>
        <Link href={href}>
          <h2 className="text-[35px] font-semibold cursor-pointer text-white mb-10">
            {title}
          </h2>
        </Link>
        <p className="text-base text-white">{description}</p>
      </div>
    </div>
  );
};

export default CustomCauseCard;
