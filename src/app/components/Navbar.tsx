import Image from "next/image";
import Button from "./Button";
import { navLinks } from "../constants/constants";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <nav className="lg:h-[150px] flex md:justify-around justify-between items-center p-4 shadow-2xl">
      <section>
        <Image
          width={350}
          height={300}
          src="/sabri_logo-_1_.webp"
          alt="Sabri Helpage Logo"
          className="lg:w-[350px] md:w-[200px] w-[150px]"
        ></Image>
      </section>
      <section className="flex justify-between items-center lg:gap-16 md:gap-6">
        <div className="max-md:hidden">
          <ul className="flex justify-between items-center lg:gap-6 gap-4">
            {navLinks.map((item: any, index) => (
              <li
                key={index}
                className="text-[#A4988C] font-semibold cursor-pointer hover:border-b hover:border-[#FF7536] lg:text-base md:text-sm"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <Button label={"Donate Us"} boxShadow={"none"} />
        <section className="md:hidden ml-4">
          <RxHamburgerMenu />
        </section>
      </section>
    </nav>
  );
};

export default Navbar;
