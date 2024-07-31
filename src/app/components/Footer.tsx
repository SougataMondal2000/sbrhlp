import { footerSocialLinks, quickLinks } from "../constants/constants";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { PiXLogoDuotone } from "react-icons/pi";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 lg:mb-10 mb-4">
        {/* Sabri Helpage Section */}
        <div>
          <h2 className="text-[#FF6B35] text-xl font-semibold mb-4">
            Sabri Helpage
          </h2>
          <p className="text-sm mb-4">
            Sabri Helpage is a formally registered Non-Profit Organisation
            founded in the year 2013, truly independent of business, religion,
            or political groups. Kolkata, West Bengal, INDIA is the global Head
            Office of the organization. Sabri Helpage stands firmly behind the
            prohibition of discrimination.
          </p>
          <div className="flex space-x-2">
            {footerSocialLinks.map((social: any, index) => (
              <a
                key={index}
                href={social.redirectTo}
                className="bg-white p-2 text-[#FF7536]"
                target="_blank"
              >
                {index === 0 ? (
                  <FaFacebook />
                ) : index === 1 ? (
                  <PiXLogoDuotone />
                ) : index === 2 ? (
                  <FaYoutube />
                ) : index === 3 ? (
                  <FaInstagram />
                ) : index === 4 ? (
                  <FaLinkedin />
                ) : (
                  <FaWhatsapp />
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-[#FF6B35] text-xl font-semibold mb-4">
            Quick Links
          </h2>
          <ul className="flex flex-wrap text-sm">
            {quickLinks.map((item: any, index) => (
              <li key={item} className="mr-4 mb-2">
                <a href={item.redirectTo}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img src="/dummyqr.jpg" alt="" className="w-48" />
        </div>

        {/* Subscribe Section */}
        {/* <div>
          <h2 className="text-[#FF6B35] text-xl font-semibold mb-4">
            Subscribe
          </h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="example@mail.com"
                className="w-full p-2 text-black rounded"
              />
            </div>
            <button
              type="submit"
              className="bg-[#FF6B35] text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </form>
        </div> */}

        {/* Reach Us Section */}
        {/* <div>
          <h2 className="text-[#FF6B35] text-xl font-semibold mb-4">
            Reach Us
          </h2>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-2">
              <FaPhone className="w-4 h-4" />
              <a
                href="tel:033-4601-3886"
                className="ml-2 text-white hover:underline"
              >
                033-4601 3886
              </a>
            </li>
            <li className="flex items-center gap-2">
              <IoIosMail className="w-4 h-4" />
              <a
                href="mailto:support@sabrihelpage.org"
                className="ml-2  hover:underline"
              >
                support@sabrihelpage.org
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaWhatsapp className="w-4 h-4" />
              +919674536860
            </li>
            <li className="flex items-start gap-2">
              <FaLocationDot className="w-4 h-4" />
              <a
                href="https://maps.app.goo.gl/7udotxnnF8JPzYkr9"
                className=" ml-2 hover:underline"
                target="_blank"
              >
                7B, Mysore Road, Rashbehari Avenue, Kolkata 700026
              </a>
            </li>
          </ul>
        </div> */}
      </div>
      <div className="text-center border-t border-t-gray-300 lg:px-10 lg:pt-4 p-2">
        <div>
          <p className="md:text-xl text-lg font-semibold">Sabri Helpage</p>

          <p className="text-xs font-medium text-gray-500">
            Copyright © 2024 Sabri Helpage
            <br />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
