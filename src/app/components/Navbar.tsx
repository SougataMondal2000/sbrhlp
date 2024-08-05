"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Button from "./Button";
import { navLinks } from "../constants/constants";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { usePathname } from "next/navigation";

export interface NavLink {
  title: string;
  redirectTo: string;
  dropdownItems?: {
    title: string;
    redirectTo: string;
  }[];
}

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const pathName = usePathname();
  const dropdownRef = useRef<HTMLLIElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleDropdownToggle = (index: number): void => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const toggleMobileMenu = (): void => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMouseEnter = (index: number): void => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(index);
  };

  const handleMouseLeave = (): void => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100); // Small delay to allow moving to submenu
  };

  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  }, [pathName]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 lg:h-[150px] flex md:justify-around justify-between items-center p-4 shadow-lg text-sm bg-white">
      <section>
        <Link href="/">
          <Image
            width={350}
            height={300}
            src="/sabri_logo-_1_.webp"
            alt="Sabri Helpage Logo"
            className="lg:w-[350px] md:w-[200px] w-[150px]"
          />
        </Link>
      </section>
      <section className="flex justify-between items-center lg:gap-16 md:gap-6">
        <div className={`md:block ${mobileMenuOpen ? "block" : "hidden"}`}>
          <ul
            className={`md:flex md:justify-between md:items-center lg:gap-6 gap-4 
            ${
              mobileMenuOpen
                ? "flex flex-col absolute top-full left-0 w-full bg-white shadow-md z-50 py-4"
                : ""
            }`}
          >
            {navLinks.map((item: NavLink, index: number) => (
              <li
                key={index}
                className="relative py-2 px-4 md:py-0 md:px-0"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                ref={activeDropdown === index ? dropdownRef : null}
              >
                {item.dropdownItems ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className="text-[#A4988C] font-semibold cursor-pointer hover:border-b hover:border-[#FF7536] flex items-center"
                    >
                      {item.title}
                      <MdOutlineArrowDropDown />
                    </button>
                    {activeDropdown === index && (
                      <ul
                        className="md:absolute md:left-0 mt-2 bg-white text-[#A4988C] rounded-md shadow-lg z-50"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.dropdownItems.map(
                          (dropdownItem, dropdownIndex) => (
                            <li key={dropdownIndex}>
                              <Link href={dropdownItem.redirectTo}>
                                <p className="block px-4 py-2 text-sm hover:bg-gray-100 first:rounded-t-md last:rounded-b-md">
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
                    <p className="text-[#A4988C] font-semibold cursor-pointer hover:border-b hover:border-[#FF7536]">
                      {item.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
        <Link href="/donate">
          <Button label="Donate Us!" boxShadow="none" />
        </Link>
        <button className="md:hidden ml-4" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? (
            <IoMdClose size={24} />
          ) : (
            <RxHamburgerMenu size={24} />
          )}
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
