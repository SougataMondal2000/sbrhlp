"use client";
import React from "react";
import Partners from "../sections/Partners";
import Donate from "../sections/Donate";
import Joinus from "../sections/Joinus";
import PublicationsCarousel from "../components/PublicationsCarousal";

export const publications = [
  {
    image: "/Arthik Lipi-14.5.24-pg-8.jpeg",
    title: "Arthik Lipi",
    date: "14.05.24",
  },
  {
    image: "/Akhbare Mashriq-16.5.24.jpeg",
    title: "Akhbare Mashriq",
    date: "16.05.24",
  },
  {
    image: "/Prabhu Rastra-13.5.24-g_04.jpeg",
    title: "Prabhu Rastra",
    date: "13.05.24",
  },
  {
    image: "/Poorva Express-13.5.24-pg-4.jpeg",
    title: "Poorva Express",
    date: "13.05.24",
  },
  {
    image: "/Dainik viswamitra-14.5.24-pg-4.jpeg",
    title: "Dainik viswamitra",
    date: "14.05.24",
  },
  {
    image: "/Prabhat Khabar-12.5.24-Pg_02.jpeg",
    title: "Prabhat Khabar",
    date: "12.5.24",
  },
  {
    image: "/Headlines Now-12.5.24-pg-2.jpg",
    title: "Headlines Now",
    date: "12.5.24",
  },
  {
    image: "/Ganamadhyam-14.5.24-pg-3.jpeg",
    title: "Ganamadhyam",
    date: "14.5.24",
  },
  {
    image: "/Bartaman (Chotushporni)-18.5.24-Pg_02.jpeg",
    title: "Bartaman (Chotushporni)",
    date: "-18.5.24",
  },
];

const digitalPublications = [
  {
    image: "https://www.youtube.com/embed/4X3DZgpVn2c",
    title: "",
    date: "2023",
    isVideo: true,
  },
  {
    image: "https://www.youtube.com/watch?v=Vj2ACOYEsFY",
    title: "Video 2",
    date: "2022",
  },
  {
    image: "https://youtu.be/hreKdIFB2B0",
    title: "Video 3",
    date: "2021",
  },
  {
    image: "https://youtu.be/XQ0mh9W8sMc",
    title: "Video 3",
    date: "2021",
  },
];

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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl font-bold mb-8 text-center">
            Glimpse of a Sabri Helpage's Impact
          </h1>
          <div className="max-w-[1000px] mx-auto mb-16">
            <h2 className="font-serif text-2xl font-bold mb-8">Publications</h2>
            <PublicationsCarousel publications={publications} />
          </div>
          <div className="max-w-[1000px] mx-auto">
            <h2 className="font-serif text-2xl font-bold mb-8">
              Digital Publications
            </h2>
            <PublicationsCarousel publications={digitalPublications} />
          </div>
        </div>
      </section>
      <Joinus />
      <Partners />
      <Donate />
    </main>
  );
};

export default Page;
