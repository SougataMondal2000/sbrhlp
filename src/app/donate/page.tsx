"use client";
import axios from "axios";
import React, { useState } from "react";
import { baseURL } from "../baseurl";

const DonationForm = () => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [country, setCountry] = useState("India");
  const [donationAmount, setDonationAmount] = useState("0.00");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    donationAmount: "",
    // paymentMethod: "UPI",
  });

  const loadScript = (src: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (): Promise<void> => {
    try {
      const scriptLoaded = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!scriptLoaded) {
        throw new Error("Razorpay SDK failed to load");
      }

      const options = {
        key: "rzp_test_hVjh3EMoMmcYf8",
        currency: "INR",
        amount: Number(donationAmount) * 100,
        name: "Sabri Helpage",
        description: "Thanks for donating!",
        handler: async (response: { razorpay_payment_id: string }) => {
          setPaymentSuccess(true);
          console.log(response.razorpay_payment_id);

          // Send donation details to the backend
          try {
            await axios.post(`${baseURL}/donate`, {
              ...formData,
              donationAmount: donationAmount,
            });
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              address1: "",
              address2: "",
              city: "",
              state: "",
              postalCode: "",
              donationAmount: "",
              // paymentMethod: "UPI",
            }),
              setDonationAmount("0.00");
          } catch (error) {
            console.error("Error sending donation details:", error);
          }
        },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Error displaying Razorpay:", error);
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayment = async () => {
    if (Number(donationAmount) >= 100) {
      await displayRazorpay();
    } else {
      alert("Donation amount must be equal to or more than 10!");
    }
    if (paymentSuccess) {
      console.log("Payment Confirmed!");
    }
  };

  return (
    <main>
      {/* <div className="w-full lg:h-[650px] md:h-[500px] h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1658801956904-43841e89d831?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Emblem"
          className="object-cover w-full h-full"
        />
      </div> */}
      <div className="lg:w-[60%] mx-auto p-12">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Your Name *</label>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Please Enter Your Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number with Country Code"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Address</label>
          <input
            type="text"
            name="address1"
            placeholder="Address Line 1"
            value={formData.address1}
            onChange={handleInputChange}
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="text"
            name="address2"
            placeholder="Address Line 2"
            value={formData.address2}
            onChange={handleInputChange}
            className="w-full p-2 border rounded mb-2"
          />
          <div className="grid grid-cols-2 gap-4 mb-2">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="state"
              placeholder="State / Province / Region"
              value={formData.state}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={formData.postalCode}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="India">India</option>
              {/* Add more country options here */}
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="donation" className="block text-sm font-medium mb-1">
            Donation Amount *
          </label>
          <input
            type="number"
            id="donation"
            name="donationAmount"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            step="0.01"
            min="0"
            className="w-full p-2 border rounded"
            placeholder="Please Enter the Amount"
          />
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
          onClick={handlePayment}
        >
          Submit
        </button>
      </div>
    </main>
  );
};

export default DonationForm;
