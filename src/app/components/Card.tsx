import React from "react";

interface Member {
  name: string;
  image: string;
  details: string;
}

interface CardProps {
  member: Member;
}

const Card: React.FC<CardProps> = ({ member }) => {
  return (
    <div className="flip-card w-64 h-64">
      <div className="flip-card-inner">
        <div className="flip-card-front flex flex-col items-center justify-center bg-white shadow-md rounded-lg">
          <img
            src={member.image}
            alt={member.name}
            className="w-48 h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-lg font-semibold">{member.name}</p>
        </div>
        <div className="flip-card-back flex flex-col items-center justify-center bg-orange-400 shadow-md rounded-lg p-4">
          <p className="text-white text-center">{member.details}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
