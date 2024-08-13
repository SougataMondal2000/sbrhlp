import React, { useState, ChangeEvent, FormEvent } from "react";
import { baseURL } from "../baseurl";
import axios from "axios";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  typeOfRegistration: string;
}

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    typeOfRegistration: "",
  });

  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
        amount: 500 * 100,
        name: "Sabri Helpage",
        description: "Thanks for donating!",
        handler: async (response: { razorpay_payment_id: string }) => {
          setPaymentSuccess(true);
          console.log(response.razorpay_payment_id);

          try {
            const response = await axios.post(
              `${baseURL}/summit-register`,
              formData,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );

            console.log("Server response:", response.data);

            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              typeOfRegistration: "",
            });
            onClose();
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Register for the Summit</h2>
        <div>
          <div className="mb-4">
            <label htmlFor="firstName" className="block mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="typeOfRegistration" className="block mb-2">
              Type of Registration
            </label>
            {!["Trust", "Society", "Sec 8 company"].includes(
              formData.typeOfRegistration
            ) ? (
              <div className="flex gap-.5 items-center ">
                <input
                  type="text"
                  id="typeOfRegistration"
                  name="typeOfRegistration"
                  value={formData.typeOfRegistration}
                  onChange={handleChange}
                  className="w-[70%] px-3 py-2 border rounded"
                  placeholder="Please specify"
                  required
                />
                <select
                  id="typeOfRegistration"
                  name="typeOfRegistration"
                  value={formData.typeOfRegistration}
                  onChange={handleChange}
                  className="w-[30%] px-3 py-2 border rounded"
                  required
                >
                  <option value="">Select...</option>
                  <option value="Trust">Trust</option>
                  <option value="Society">Society</option>
                  <option value="Sec 8 company">Sec 8 company</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            ) : (
              <select
                id="typeOfRegistration"
                name="typeOfRegistration"
                value={formData.typeOfRegistration}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              >
                <option value="">Select...</option>
                <option value="Trust">Trust</option>
                <option value="Society">Society</option>
                <option value="Sec 8 company">Sec 8 company</option>
                <option value="Other">Other</option>
              </select>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="amount" className="block mb-2">
              Amount
            </label>
            <input
              value="Rs.500"
              className="w-full px-3 py-2 border rounded bg-gray-100 text-gray-400"
              disabled
              readOnly
            />
          </div>
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="mr-2 px-4 py-2 bg-gray-200 rounded"
            >
              Cancel
            </button>
            <button
              onClick={displayRazorpay}
              className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
