"use client";
import React, { useState } from "react";
import Partners from "../sections/Partners";
import Donate from "../sections/Donate";
import Joinus from "../sections/Joinus";
import { awards, legislations, members } from "../constants/constants";
import Card from "../components/Card";
import Register from "../sections/Register";
import { IoMailOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

interface PreviewModalProps {
  file: string;
  onClose: () => void;
}

const PreviewModal: React.FC<PreviewModalProps> = ({ file, onClose }) => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const renderFilePreview = () => (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      <div style={{ height: "750px" }}>
        <Viewer fileUrl={file} plugins={[defaultLayoutPluginInstance]} />
      </div>
    </Worker>
  );

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="modal-content bg-white p-4 rounded-md border border-[#9C8E73] w-[80%] h-[80%]">
        <div className="flex justify-end mb-2">
          <button onClick={onClose} className="">
            <RxCross1 />
          </button>
        </div>
        <div className="overflow-auto h-[90%]">{renderFilePreview()}</div>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);

  return (
    <main className="bg-[#F8F5F4]">
      {/* <div className="w-full lg:h-[650px] md:h-[500px] h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1658801956904-43841e89d831?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Emblem"
          className="object-cover w-full h-full"
        />
      </div> */}
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
          {legislations.map((item, index) => (
            <div key={index} className="flex-none w-72">
              <div
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                onClick={() => {
                  setSelectedFile(item.file);
                  setModalOpen(true);
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-96 object-cover p-4"
                />
              </div>
              <div className="mt-8 text-center">
                <div className="w-3 h-3 border-2 border-orange-500 rounded-full mx-auto mb-2"></div>
                <p className="text-gray-600">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-8">
        <h2 className="md:text-5xl text-3xl font-serif max-w-5xl mx-auto px-4 text-center mb-8">
          Governing body
        </h2>
        <div className="flex flex-wrap justify-center md:space-x-8  max-md:space-y-8">
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
          <div className="flex justify-normal items-center gap-1">
            <CiPhone />
            <a href="tel:033-4601-3886">033-4601 3886</a>
          </div>
          <div className="flex justify-normal items-center gap-1">
            <IoMailOutline />
            <a href="mailto:info@sabrihelpage.org"> info@sabrihelpage.org</a>
          </div>
        </address>
      </div>
      {isModalOpen && selectedFile && (
        <PreviewModal file={selectedFile} onClose={() => setModalOpen(false)} />
      )}
      <Joinus />
      <Partners />
      <Register />
    </main>
  );
};

export default About;
