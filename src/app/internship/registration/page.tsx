"use client";
import Button from "@/app/components/Button";
import Donate from "@/app/sections/Donate";
import axios from "axios";
import { useState } from "react";

const Page: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    coverLetter: "",
    cv: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (name === "cv" && files) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null) {
          if (key === "cv") {
            formDataToSend.append("cv", value as File);
            formDataToSend.append("cvFilename", (value as File).name);
          } else {
            formDataToSend.append(key, value as string);
          }
        }
      });

      await axios.post("http://localhost:5000/internships", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        coverLetter: "",
        cv: null,
      });
    } catch (error) {
      console.error("Error sending internship details:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div>
      <div className="w-full lg:h-[650px] md:h-[500px] h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1658801956904-43841e89d831?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Emblem"
          className="object-cover w-full h-full"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="lg:w-[60%] mx-auto p-12 space-y-4"
      >
        <div>
          <label htmlFor="name" className="block mb-1 text-sm font-medium">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Full Name"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Please Enter Your Email Address"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block mb-1 text-sm font-medium">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Phone Number with Country Code"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div>
          <label htmlFor="address" className="block mb-1 text-sm font-medium">
            Address *
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="Address Line 1"
            className="w-full px-3 py-2 border border-gray-300 rounded mb-2"
          />
          <input
            type="text"
            placeholder="Address Line 2 (Optional)"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="city" className="block mb-1 text-sm font-medium">
              City *
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              placeholder="City"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="state" className="block mb-1 text-sm font-medium">
              State / Province / Region *
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              placeholder="State / Province / Region"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="postalCode"
              className="block mb-1 text-sm font-medium"
            >
              Postal Code *
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              required
              placeholder="Postal Code"
              className="w-full px-3 py-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="country" className="block mb-1 text-sm font-medium">
              Country
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded">
              <option value="India">India</option>
            </select>
          </div>
        </div>
        <div>
          <label
            htmlFor="coverLetter"
            className="block mb-1 text-sm font-medium"
          >
            Cover Letter *
          </label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            required
            placeholder="Write your cover letter here..."
            className="w-full px-3 py-2 border border-gray-300 rounded"
            rows={5}
          />
        </div>
        <div>
          <label htmlFor="cv" className="block mb-1 text-sm font-medium">
            CV *
          </label>
          <input
            type="file"
            id="cv"
            name="cv"
            onChange={handleChange}
            required
            accept=".pdf,.doc,.docx"
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <button
            type="submit"
            className="px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
