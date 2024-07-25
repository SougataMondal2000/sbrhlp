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
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front flex flex-col items-center justify-center bg-white shadow-md rounded-lg">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover rounded-lg"
          />
          <p className="text-lg font-semibold absolute bottom-4">
            {member.name}
          </p>
        </div>
        <div className="flip-card-back flex flex-col items-center justify-center bg-orange-400 shadow-md rounded-lg p-4">
          <p className="text-white text-center text-sm">{member.details}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
