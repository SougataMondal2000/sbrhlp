import React from "react";

interface TestimonialProps {
  name: string;
  title: string;
  imageSrc: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  title,
  imageSrc,
  rating,
}) => {
  return (
    <div className="max-w-md bg-white rounded-lg overflow-hidden shadow-lg relative m-4">
      {/* Pink left border */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-pink-500"></div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img
            className="w-16 h-16 rounded-full object-cover border-4 border-pink-500"
            src={imageSrc}
            alt={name}
          />
          <div className="ml-4">
            <h2 className="text-xl font-bold">Best Style</h2>
          </div>
        </div>

        <p className="text-gray-700 text-sm mb-4">
          Lorem ipsum beautiful dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore beautiful et dolore magna
          aliqua.
        </p>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-gray-500 text-sm">{title}</p>
          </div>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-lg">
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
