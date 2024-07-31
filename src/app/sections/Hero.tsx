"use client";
import { useState } from "react";
import Button from "../components/Button";
import Link from "next/link";

const Hero = () => {
  const [isEnglishVisible, setIsEnglishVisible] = useState(false);

  const handleToggle = () => {
    setIsEnglishVisible(!isEnglishVisible);
  };

  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat opacity-25"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1544132173-46e0a80d5d4a?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>
      <div className="absolute inset-0 bg-blue-100 opacity-20"></div>
      <div className="relative z-10">
        <div className="relative mb-[70px]">
          <section className="relative lg:h-[900px] md:h-[400px] h-[700px] w-full">
            <img
              src="https://images.unsplash.com/photo-1544132173-46e0a80d5d4a?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Sabri Helpage video"
              className="w-full h-full object-cover op"
            />
            <div className="absolute inset-0  bg-opacity-85 text-black lg:p-8 lg:w-[1000px] lg:h-[300px] md:p-8 md:w-[650px] md:h-[250px] w-[80%] h-fit py-2 my-auto mx-auto">
              <h1 className="font-serif md:text-3xl text-2xl lg:text-8xl font-bold md:mb-4 mb-2 text-center text-white shadow-text">
                SABRI HELPAGE
              </h1>
              <p className="lg:text-xl md:text-lg text-base text-center text-white shadow-text font-semibold">
                Serving society for more than a decade.
              </p>
            </div>
          </section>
          <div
            className="bg-[#FF7536] mx-4 rounded-md py-4 lg:shadow-2xl md:shadow-xl shadow-lg absolute bottom-[-50px] left-0 right-0"
            onClick={handleToggle}
            onMouseEnter={handleToggle}
            onMouseLeave={handleToggle}
          >
            <p className="text-center text-white lg:text-4xl md:text-2xl text-xl">
              {isEnglishVisible ? "May all be happy" : "सर्वे भवन्तु सुखिन"}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center lg:h-[550px] md:mt-24 md:mb-10">
          <div className="lg:w-[60%] md:w-[90%] w-[80%] mx-auto leading-6">
            <h3 className="font-serif lg:text-6xl lg:mb-12 md:text-3xl text-2xl mb-2">
              Small acts, when multiplied by millions of people, can
              <span className="font-bold"> Transform the world !</span>
            </h3>
            <h2 className="text-gray-600 lg:mb-14 mb-8 leading-8 md:text-base text-sm">
              Sabri Helpage is a dream pursued by our Founder Aarti BR Singh, a
              psychoanalyst and an entrepreneur. It is founded on the principles
              of equality, altruism, and voluntary work spirit to promote human
              and global development.
            </h2>
            <div className="flex justify-center md:mb-20 mb-10">
              <Link href={"/about-us"}>
                <Button label={"Read More"} boxShadow={""} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
