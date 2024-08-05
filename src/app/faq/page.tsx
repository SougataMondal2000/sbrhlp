"use client";
import FrequentlyAskedQuestions from "../components/FrequentlyAskedQuestions";
import Donate from "../sections/Donate";
import Joinus from "../sections/Joinus";
import Partners from "../sections/Partners";
import Register from "../sections/Register";

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
      <FrequentlyAskedQuestions />
      <Joinus />
      <Partners />
      <Register />
    </main>
  );
};

export default Page;
