"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "./Button";
import { navLinks } from "../constants/constants";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const pathName = usePathname();

  const handleDropdownToggle = (index: any) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  useEffect(() => {
    setActiveDropdown(null);
  }, [pathName]);

  return (
    <nav className="lg:h-[150px] flex md:justify-around justify-between items-center p-4 shadow-2xl relative">
      <section>
        <Image
          width={350}
          height={300}
          src="/sabri_logo-_1_.webp"
          alt="Sabri Helpage Logo"
          className="lg:w-[350px] md:w-[200px] w-[150px]"
        />
      </section>
      <section className="flex justify-between items-center lg:gap-16 md:gap-6">
        <div className="max-md:hidden">
          <ul className="flex justify-between items-center lg:gap-6 gap-4">
            {navLinks.map((item, index) => (
              <li key={index} className="relative">
                {item.dropdownItems ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className="text-[#A4988C] font-semibold cursor-pointer hover:border-b hover:border-[#FF7536] lg:text-base md:text-sm flex items-center"
                    >
                      {item.title}
                      <MdOutlineArrowDropDown />
                    </button>
                    {activeDropdown === index && (
                      <ul className="absolute left-0 mt-2 bg-gray-700 text-white rounded-md shadow-lg z-50">
                        {item.dropdownItems.map(
                          (dropdownItem, dropdownIndex) => (
                            <li key={dropdownIndex}>
                              <Link href={dropdownItem.redirectTo}>
                                <p className="block px-4 py-2 text-sm hover:bg-gray-600 first:rounded-t-md last:rounded-b-md">
                                  {dropdownItem.title}
                                </p>
                              </Link>
                            </li>
                          )
                        )}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link href={item.redirectTo}>
                    <p className="text-[#A4988C] font-semibold cursor-pointer hover:border-b hover:border-[#FF7536] lg:text-base md:text-sm">
                      {item.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <Link href="/donate">
          <Button label="Donate Us!" boxShadow={"none"} />
        </Link>
        <section className="md:hidden ml-4">
          <RxHamburgerMenu />
        </section>
      </section>
    </nav>
  );
};

export default Navbar;
