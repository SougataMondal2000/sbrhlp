"use client";
import React, { useState } from "react";
import Partners from "../sections/Partners";
import Donate from "../sections/Donate";
import Joinus from "../sections/Joinus";
import axios from "axios";
import { baseURL } from "../baseurl";
import RegistrationModal from "../components/RegistrationModal";

const Page: React.FC = () => {
  const [modalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-[#F8F5F4]">
      <div className="w-full lg:h-[650px] md:h-[500px] h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1658801956904-43841e89d831?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Emblem"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 pt-8">
        <h1 className="lg:text-4xl md:text-2xl text-xl font-serif mb-8">
          Sabri Helpage's The SocioFare: A Catalyst for Social Impact
        </h1>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="">
            <p className="mb-4 ">
              <strong>Sabri Helpage,</strong> through its innovative initiative,
              The SocioFare, is poised to revolutionize the non-profit sector.
              The NGO Summit-The SocioFare is a groundbreaking platform designed
              to empower Non-Profit Organizations (NPOs) and facilitate
              impactful collaborations with corporates.
            </p>

            <p className="mb-4 ">
              Key objectives of NGO Summit-The SocioFare include:
            </p>

            <ul className="list-disc pl-5 mb-4 ">
              <li>
                <strong>Empowering NPOs:</strong> Providing NPOs with essential
                tools, knowledge, and networks to enhance their operational
                efficiency and social impact.
              </li>
              <li>
                <strong>Fostering Partnerships:</strong> Creating a dynamic
                ecosystem where NPOs and corporates can connect, collaborate,
                and drive sustainable change.
              </li>
              <li>
                <strong>Building Trust and Transparency:</strong> Conducting
                thorough audits of participating NPOs to ensure accountability
                and ethical practices.
              </li>
            </ul>
          </div>
        </div>

        <p className=" mb-4">
          By bringing together NPOs, corporates, and industry experts, The
          SocioFare aims to create a thriving ecosystem of social innovation and
          positive change.
        </p>

        <p className="text-lg">
          <strong>Secure your spot now! </strong>
          Don't miss this opportunity to be part of something extraordinary.
          Register for the first step and embark on a transformative journey.
        </p>
      </div>
      <div className="flex justify-center mt-4 lg:mb-20 mb-10">
        <button
          className="bg-orange-500 text-white px-6 py-4 rounded hover:bg-orange-600"
          onClick={() => setIsModalOpen(true)}
        >
          Register Now
        </button>
      </div>
      {modalOpen && (
        <RegistrationModal
          isOpen={modalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <Joinus />
      <Partners />
      <Donate />
    </main>
  );
};

export default Page;
