import React from "react";
import Partners from "../sections/Partners";
import Donate from "../sections/Donate";
import Joinus from "../sections/Joinus";
import { awards } from "../constants/constants";

const Page: React.FC = () => {
  return (
    <main className="bg-[#F8F5F4]">
      <div className="w-full lg:h-[650px] md:h-[500px] h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1658801956904-43841e89d831?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Emblem"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="md:text-5xl text-3xl font-serif text-center mb-12">
          Awards & Recognitions
        </h1>
        <h2 className="font-semibold md:mb-4 md-2">
          Let&apos;s Expand on Sabri Helpage&apos;s Impactful Work While formal
          awards and recognition are undoubtedly valuable, Sabri Helpage&apos;s
          greatest reward lies in the tangible impact it creates in the lives of
          its beneficiaries.
        </h2>
        <p>
          The satisfaction, hope, and independence instilled in the elderly,
          street girls, and women we serve are the true testaments to our
          mission. Every smile, every success story, and every life transformed
          is an award in itself.
        </p>
        <div className="max-w-xl md:mx-auto m-2 p-2 border-2 border-yellow-500 rounded-lg shadow-lg mt-8">
          <div className="text-center">
            <img
              src="/Modi_Ji_letter-1-724x1024.webp"
              alt="Emblem"
              className="w-full h-full m-auto"
            />
          </div>
        </div>
        <div className="relative md:mt-10 mt-4">
          <div className="flex space-x-6 md:justify-center overflow-x-auto pb-8">
            {awards.map((award: any, index) => (
              <div key={index} className="flex-none w-72">
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
            ))}
          </div>
          {/* <button className="absolute left-0 bottom-10 transform -translate-y-1/2 rounded-full p-2">
            <svg
              className="w-6 h-6 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="absolute right-0  bottom-10 transform -translate-y-1/2  rounded-full p-2">
            <svg
              className="w-6 h-6 text-orange-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button> */}
        </div>
      </div>

      <Joinus />
      <Partners />
      <Donate />
    </main>
  );
};

export default Page;
