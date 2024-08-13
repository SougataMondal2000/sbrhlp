"use client";
import React, { useState } from "react";
import Partners from "../sections/Partners";
import Donate from "../sections/Donate";
import Joinus from "../sections/Joinus";
import RegistrationModal from "../components/RegistrationModal";
import Register from "../sections/Register";

const Page: React.FC = () => {
  const [modalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-[#F8F5F4]">
      {/* <div className="w-full lg:h-[650px] md:h-[500px] h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1658801956904-43841e89d831?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Emblem"
          className="object-cover w-full h-full"
        />
      </div> */}

      <div className="max-w-5xl mx-auto px-4 pt-8">
        <h1 className="lg:text-4xl md:text-2xl text-xl font-serif mb-6 font-bold">
          Sabri Helpage&apos;s Global CSR & ESG Summit: A Catalyst for Change
        </h1>
        <h2 className="font-bold lg:text-xl md:text-lg text-base mb-4">
          Understanding CSR and ESG
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="">
            <p className="mb-4 ">
              Before we delve into the potential benefits of the summit,
              it&apos;s essential to understand the core concepts of CSR and
              ESG.
            </p>
            <ul className="list-disc pl-5 mb-4 ">
              <li>
                <strong>Corporate Social Responsibility (CSR):</strong> This is
                a self-regulating business model that helps a company be
                socially accountable to itself, its stakeholders, and the
                public.
              </li>
              <li>
                <strong>Environmental, Social, and Governance (ESG):</strong>{" "}
                This framework measures a company&apos;s performance in vital
                areas such as corporate governance, social responsibility, and
                environmental impact.
              </li>
            </ul>
          </div>
        </div>
        <h2 className="font-bold lg:text-xl md:text-lg text-base mb-4">
          Potential Benefits of the Global CSR & ESG Summit
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="">
            <p className="mb-4 ">
              Assuming the summit is designed to promote CSR and ESG practices,
              it could offer several benefits:
            </p>
            <ul className="list-disc pl-5 mb-4 ">
              <li>
                <strong>Knowledge Sharing:</strong> Bringing together industry
                experts, NGOs, and policymakers can facilitate the exchange of
                best practices and innovative solutions.
              </li>
              <li>
                <strong>Networking Opportunities:</strong> Such platforms can
                foster collaborations and partnerships among different
                stakeholders, leading to impactful projects.
              </li>
              <li>
                <strong>Policy Advocacy:</strong> It can influence policy
                decisions by highlighting the importance of CSR and ESG,
                encouraging governments to create a supportive environment.
              </li>
              <li>
                <strong>Brand Reputation Enhancement:</strong> Companies
                participating in such summits can showcase their commitment to
                sustainability and social responsibility, enhancing their brand
                image.
              </li>
              <li>
                <strong>Investor Confidence:</strong> Investors increasingly
                prioritize ESG factors. Participating in such summits can signal
                a company&apos;s long-term sustainability and attract
                responsible investors.
              </li>
            </ul>
          </div>
        </div>
        <h2 className="font-bold lg:text-xl md:text-lg text-base mb-4">
          Potential Impact on Society
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="">
            <p className="mb-4 ">
              A successful CSR & ESG summit can have a far-reaching impact on
              society:
            </p>
            <ul className="list-disc pl-5 mb-4 ">
              <li>
                <strong>Environmental Sustainability:</strong> It can drive
                initiatives to reduce carbon emissions, conserve resources, and
                promote clean energy.
              </li>
              <li>
                <strong>Social Development:</strong> The summit can focus on
                issues like poverty alleviation, education, healthcare, and
                community development.
              </li>
              <li>
                <strong>Good Governance:</strong> It can promote transparency,
                accountability, and ethical business practices.
              </li>
            </ul>
          </div>
        </div>
        <p className="text-lg">
          <strong>Secure your spot now! </strong>
          Don&apos;t miss this opportunity to be part of something
          extraordinary. Register for the first step and embark on a
          transformative journey.
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
      <Register />
    </main>
  );
};

export default Page;
