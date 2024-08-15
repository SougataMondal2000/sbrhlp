import React from "react";
import Partners from "../sections/Partners";
import Donate from "../sections/Donate";
import Joinus from "../sections/Joinus";
import { awards } from "../constants/constants";
import Register from "../sections/Register";
import AwardsCarousel from "../components/AwardsCarousel";

const Page: React.FC = () => {
  return (
    <main className="bg-[#F8F5F4]">
      {/* <div className="w-full lg:h-[650px] md:h-[500px] h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1658801956904-43841e89d831?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Emblem"
          className="object-cover w-full h-full"
        />
      </div> */}
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
        <AwardsCarousel awards={awards} />
      </div>

      <Joinus />
      <Partners />
      <Register />
    </main>
  );
};

export default Page;
