import Image from "next/image";
import Hero from "./sections/Hero";
import Mission from "./sections/Mission";
import Joinus from "./sections/Joinus";
import Awards from "./sections/Awards";
import Testimonials from "./sections/Testimonials";
import Partnars from "./sections/Partners";
import Donate from "./sections/Donate";
import Causes from "./sections/Causes";

export default function Home() {
  return (
    <main>
      <Hero />
      <Mission />
      <Causes />
      <Joinus />
      <Awards />
      <Testimonials />
      <Partnars />
      <Donate />
    </main>
  );
}
