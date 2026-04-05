"use client";

import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/navigation";
import { navLinks } from "../constants";
import Section from "./Custom/Section";
import Link from "next/link";

const Nav = ({ absolute = false }) => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  function toggleMenu() {
    setVisible((prev) => !prev);
  }

  const changePage = (page: string) => {
    router.push(`/content?page=${page}`);
    setVisible(false);
  };

  return (
    <Section
      className={`p-12 top-0 left-0 right-0 z-[9999] ${
        absolute ? "absolute" : "relative"
      }`}
    >
      <ul className="flex items-center">
        <li className="desktop:text-[20px] tablet:text-[16px]">
          <Link href="/">esplanaejhaym</Link>
        </li>

        <div className="ml-auto flex items-center gap-8">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="group desktop:text-[20px] tablet:text-[16px] mobile:hidden small:hidden p-2 cursor-pointer"
              onClick={() => changePage(link.href)}
            >
              <span>{link.text}</span>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
            </li>
          ))}
        </div>

        <RxHamburgerMenu
          className="desktop:hidden tablet:hidden mobile:text-2xl small:text-2xl cursor-pointer"
          onClick={toggleMenu}
        />
      </ul>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          visible ? "max-h-screen opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-end">
          {navLinks.map((link) => (
            <li
              key={link.href}
              className="desktop:text-[20px] tablet:text-[16px] my-2 p-2 cursor-pointer"
              onClick={() => changePage(link.href)}
            >
              <span className="bg-black rounded-xl p-2">{link.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Nav;
