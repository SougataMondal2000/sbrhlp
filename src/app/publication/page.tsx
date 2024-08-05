"use client";
import React from "react";
import Partners from "../sections/Partners";
import Donate from "../sections/Donate";
import Joinus from "../sections/Joinus";
import PublicationsCarousel from "../components/PublicationsCarousal";
import VideoGrid from "../components/VideoGrid";
import Register from "../sections/Register";

const publications = [
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
    date: "18.5.24",
  },
];

const digitalPublications = [
  {
    image: "https://www.youtube.com/embed/4X3DZgpVn2c",
    title: "Video 1",
    date: "2023",
    isVideo: true,
  },
  {
    image: "https://www.youtube.com/embed/Vj2ACOYEsFY",
    title: "Video 2",
    date: "2022",
    isVideo: true,
  },
  {
    image: "https://www.youtube.com/embed/hreKdIFB2B0",
    title: "Video 3",
    date: "2021",
    isVideo: true,
  },
  {
    image: "https://www.youtube.com/embed/XQ0mh9W8sMc",
    title: "Video 4",
    date: "2021",
    isVideo: true,
  },
];

const references = [
  {
    name: "SRB Bangla",
    url: "https://srbnewsbangla.in/%e0%a6%b8%e0%a6%be%e0%a6%ac%e0%a6%b0%e0%a6%bf-%e0%a6%b9%e0%a7%87%e0%a6%b2%e0%a7%8d%e0%a6%aa%e0%a7%87%e0%a6%9c-%e0%a6%86%e0%a6%af%e0%a6%bc%e0%a7%8b%e0%a6%9c%e0%a6%bf%e0%a6%a4-%e0%a6%b8%e0%a7%8b/",
  },
  {
    name: "Financial Samachar",
    url: "https://financialsamachar.com/celebrating-changemakers-shaping-social",
  },
  {
    name: "News Nation 360",
    url: "https://www.newsnation360.com/post/sabri-helpage-honoured-padma-shri-chutni-mahato-and-other-social-change-makers-with-the-socio-fare-a",
  },
  {
    name: "News Only 24",
    url: "https://youtu.be/4X3DZgpVn2c?si=rHadwXAN1Bi1NsZ9",
  },
  {
    name: "Channel One",
    url: "https://youtu.be/Vj2ACOYEsFY?si=XODWqVcU9B50HK9e",
  },
  {
    name: "The Indian Chronicle",
    url: "https://theindianchronicles.com/celebrating-social-change-socio-fare-award-2024/",
  },
  {
    name: "Voice of Kolkata",
    url: "https://voiceofkolkata.com/sociofare-award-2024-by-sabri-helpage-honors-padma-shri-chutni-mahato-and-other-social-change-makers/",
  },
  {
    name: "Banga Darpan News",
    url: "https://bangadarpannews.com/socio-fair-awards-2024-honoring-social-change-makers-organized-by-sabri-helpz/",
  },
  {
    name: "News Today",
    url: "https://youtu.be/hreKdIFB2B0?si=v7pDAcofhiqsPzkm",
  },
  {
    name: "The Kolkata Mail",
    url: "https://thekolkatamail.com/2nd-socio-fare-award-2024-wonderful-celebration-of-social-service/",
  },
  { name: "Bangla Agea", url: "https://www.youtube.com/watch?v=XQ0mh9W8sMc" },
  {
    name: "Express News Bangla",
    url: "https://expressnewsbangla.com/2024/05/11/%E0%A6%B8%E0%A6%BE%E0%A6%AC%E0%A6%B0%E0%A6%BF-%E0%A6%B9%E0%A7%87%E0%A6%B2%E0%A7%8D%E0%A6%AA%E0%A7%87%E0%A6%9C-%E0%A6%86%E0%A6%AF%E0%A6%BC%E0%A7%8B%E0%A6%9C%E0%A6%BF%E0%A6%A4-%E0%A6%B8%E0%A7%8B/",
  },
  {
    name: "Sunrise News",
    url: "http://sunrisnews.blogspot.com/2024/05/blog-post_49.html",
  },
  {
    name: "Aaj Talkss",
    url: "https://aajtalkss.in/2024/05/11/sociofare-awards-for-real-heroes/",
  },
  {
    name: "Sangabad Ei Samay",
    url: "http://sangbadeisamay.blogspot.com/2024/05/blog-post_35.html",
  },
  {
    name: "Page 3 Online",
    url: "https://www.facebook.com/story.php?story_fbid=840843388065062&id=100064182241125&mibextid=qi2Omg&rdid=rGZmNOtxf44Cdihn",
  },
  {
    name: "News 22 Online",
    url: "https://www.news22online.com/2024/05/13/socio-fare-award-2024-by-sabri-helpage-honors-padma-shri-chutni-mahato-and-other-social-change-makers/",
  },
  {
    name: "Sananda (Magazine)",
    url: "https://www.sananda.in/story?link=410873",
  },
  {
    name: "Sananda (facebook)",
    url: "https://www.facebook.com/story.php?story_fbid=836324265190164&id=100064377956038&mibextid=qi2Omg&rdid=bCOa0Xg71fp7Rpht",
  },
  {
    name: "Deegdarshan",
    url: "https://deegdarshan.com/padma-shri-chutni-mahato-and-other-social-activists-felicitated-at-the-socio-fair-awards-ceremony/",
  },
  {
    name: "The Bengal Mirror",
    url: "https://www.thebengalmirror.com/2024/05/the-sociofare-awards-2024-by-sabri-helpage.html",
  },
];

const Page: React.FC = () => {
  return (
    <main className="bg-[#F8F5F4]">
      {/* <div className="w-full lg:h-[650px] md:h-[500px] h-[400px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1658801956904-43841e89d831?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Emblem"
          className="object-cover w-full h-full"
        />
      </div> */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-4xl font-bold mb-8 text-center">
            Glimpse of a Sabri Helpage&apos;s Impact
          </h1>
          <div className="max-w-[1000px] mx-auto mb-16">
            <h2 className="md:text-4xl text-xl font-serif mb-8 text-center">
              Publications
            </h2>
            <PublicationsCarousel publications={publications} />
          </div>
          <div className="max-w-[1000px] mx-auto">
            <h2 className="md:text-4xl text-xl font-serif mb-8 text-center">
              Digital Publications
            </h2>
            <VideoGrid videos={digitalPublications} />
            {/* <div className="mt-8">
              <h3 className="text-2xl font-serif mb-4">References</h3>
              <ul className="list-disc pl-5">
                {references.map((ref, index) => (
                  <li key={index} className="mb-2">
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {ref.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>
      </section>
      <Joinus />
      <Partners />
      <Register />
    </main>
  );
};

export default Page;
