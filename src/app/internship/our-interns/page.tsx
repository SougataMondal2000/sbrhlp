import Card from "@/app/components/Card";
import InternCarousel from "@/app/components/InternCarousal";
import { interns } from "@/app/constants/constants";
import React from "react";

const Page: React.FC = () => {
  return (
    <div className="max-w-[1000px] mx-auto my-16">
      <h2 className="md:text-4xl text-xl font-serif mb-8 text-center">
        Our Interns
      </h2>
      <InternCarousel publications={interns} />
      <div className="w-full flex justify-center">
        <div className="mt-12 lg:w-[50%] md:w-[70%] w-full">
          <iframe
            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fsabrihelpage%2Fvideos%2F590746736550900%2F&show_text=false&width=560&t=0"
            width="560"
            height="314"
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Page;
