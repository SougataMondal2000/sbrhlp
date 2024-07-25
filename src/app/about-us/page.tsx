import React from "react";
import Partners from "../sections/Partners";
import Donate from "../sections/Donate";
import Joinus from "../sections/Joinus";
import { awards, members } from "../constants/constants";
import Card from "../components/Card";

const page: React.FC = () => {
  return (
    <main className="bg-[#F8F5F4]">
      <div className="w-full lg:h-[650px] md:h-[500px] h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1658801956904-43841e89d831?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Emblem"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="lg:text-6xl md:text-4xl text-3xl font-serif mb-8">
          Sabri Helpage: A Beacon of Hope
        </h1>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="">
            <p className="mb-4 text-sm">
              <strong>Sabri Helpage</strong> is a pioneering Non-Profit
              Organization (NPO) established in 2013 with a steadfast commitment
              to serving the community. Rooted in Kolkata, West Bengal, India,
              our organization operates independently, free from the influence
              of business, religion, or politics.
            </p>

            <p className="mb-4 text-sm">
              We are dedicated to fostering a world without discrimination and
              championing the rights of marginalized groups. Our core focus
              areas include:
            </p>

            <ul className="list-disc pl-5 mb-4 text-sm">
              <li>
                <strong>Elderly Care:</strong> Providing essential support and
                services to senior citizens.
              </li>
              <li>
                <strong>Women and Girls Empowerment:</strong> Empowering street
                girls and women through education, skill development, and
                healthcare.
              </li>
              <li>
                <strong>Mental Health Awareness:</strong> Promoting mental
                well-being and reducing stigma through awareness campaigns and
                support services.
              </li>
            </ul>
          </div>
        </div>

        <p className="text-sm mb-4">
          Through our innovative initiative, <strong>The SocioFare</strong>, we
          aim to create a more significant impact by collaborating with other
          NPOs and corporations.
        </p>

        <p className="text-sm">
          Sabri Helpage is more than just an organization; we are a catalyst for
          positive change. Join us in building a better future for all.
        </p>
      </div>
      <h2 className="md:text-5xl text-3xl font-serif mb-2 max-w-5xl mx-auto px-4 text-center">
        Legal Status
      </h2>
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
      </div>
      <div className="p-8">
        <h2 className="md:text-5xl text-3xl font-serif max-w-5xl mx-auto px-4 text-center mb-8">
          Governing body
        </h2>
        <div className="flex justify-center space-x-8">
          {members.map((member, index) => (
            <Card key={index} member={member} />
          ))}
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-serif mb-2">Contact</h2>
        <address className="not-italic">
          Sabri Helpage
          <br />
          7B, Mysore Road
          <br />
          Rashbehari Avenue
          <br />
          Kolkata - 700026
          <br />
          Contact number: +91 33-46013886
          <br />
          Email:{" "}
          <a href="mailto:info@sabrihelpage.org">info@sabrihelpage.org</a>
        </address>
      </div>

      <Joinus />
      <Partners />
      <Donate />
    </main>
  );
};

export default page;
