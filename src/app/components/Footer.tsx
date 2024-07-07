import { footerSocialLinks } from "../constants/constants";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
const Footer = () => {
  const iconMap = {
    "facebook": <FaFacebook />,
    "twitter": <FaTwitter />,
    "youtube": <FaYoutube />,
    "instagram": <FaInstagram />,
    "linkedin": <FaLinkedin />,
    "whatsapp": <FaWhatsapp />
  };
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
            {footerSocialLinks.map((social:any,index) => (
              <a
                key={index}
                href={`#${social}`}
                className="bg-white p-1 rounded"
              >
                {iconMap[social.platform]}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-[#FF6B35] text-xl font-semibold mb-4">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm">
            {[
      "Terms and Conditions",
              "About",
              "Privacy Policy",
              "Disclaimer ",
              "FAQ",
            ].map((link) => (
              <li key={link}>
                <a href={`#${link}`}>{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
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
        </div>

        {/* Reach Us Section */}
        <div>
          <h2 className="text-[#FF6B35] text-xl font-semibold mb-4">
            Reach Us
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <img src="/phone-icon.png" alt="Phone" className="w-4 h-4 mr-2" />
              033-4601 3886
            </li>
            <li className="flex items-center">
              <img src="/email-icon.png" alt="Email" className="w-4 h-4 mr-2" />
              support@sabrihelpage.org
            </li>
            <li className="flex items-center">
              <img
                src="/whatsapp-icon.png"
                alt="WhatsApp"
                className="w-4 h-4 mr-2"
              />
              +919674536860
            </li>
            <li className="flex items-start">
              <img
                src="/location-icon.png"
                alt="Location"
                className="w-4 h-4 mr-2 mt-1"
              />
              7B, Mysore Road, Rashbehari Avenue, Kolkata 700026
            </li>
          </ul>
        </div>
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
