import React, { useState } from "react";
import { navLinks } from "../constants";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import Section from "./Custom/Section";

const Nav = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  function toggleMenu() {
    setIsMenuActive((prev) => !prev);
  }

  return (
    <>
      <Section className="p-12 absolute top-0 left-0 right-0 z-[9999]">
        <ul className="flex items-center">
          <span className="">
            <li className="desktop:text-[20px] tablet:text-[16px]">
              Career Portfolio
            </li>
          </span>
          <div className="ml-auto flex items-center gap-8">
            {navLinks.map((link) => (
              <li
                key={link.href}
                className="group desktop:text-[20px] tablet:text-[16px] mobile:hidden p-2"
              >
                <Link href={link.href}>{link.text}</Link>
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
              </li>
            ))}
          </div>
          <RxHamburgerMenu
            className="desktop:hidden tablet:hidden mobile:text-2xl small:text-1xl"
            onClick={toggleMenu}
          />
        </ul>
        <div
          className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
            isMenuActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul>
            {navLinks.map((link) => (
              <li
                key={link.href}
                className=" desktop:text-[20px] tablet:text-[16px] px-0 my-2 text-right p-2"
              >
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
};

export default Nav;
