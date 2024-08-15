"use client";
import { useEffect, useState } from "react";
import TestimonialCard from "../components/TestimonialCard";
import axios from "axios";
import { baseURL } from "../baseurl";
import { MoonLoader } from "react-spinners";

interface Review {
  name: string;
  review: string;
  title: string;
  image: string | null;
}

const Testimonials = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get<Review[]>(`${baseURL}/testimonials`);
        setReviews(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <MoonLoader color={"#FF7536"} />
      </div>
    );
  }

  if (reviews.length === 0) {
    return <div>No testimonials available.</div>;
  }

  return (
    <div className="bg-[#F8F5F4] pt-10">
      <h3 className="font-serif lg:text-5xl lg:mb-12 md:text-3xl text-2xl mb-6 md:text-center font-semibold">
        Testimonials
      </h3>
      <div
        className="lg:h-[600px] h-fit flex lg:justify-center lg:items-center "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="flex lg:justify-center lg:items-center overflow-x-auto snap-x snap-mandatory py-4 px-2 md:px-4 w-full scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb-slate-700 scrollbar-track-slate-300 ">
          <div className="flex gap-4 w-max">
            {reviews.map((item, index) => (
              <TestimonialCard
                key={index}
                name={item.name}
                review={item.review}
                title={item.title}
                imageSrc={
                  item.image
                    ? item.image
                    : "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                rating={5}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
