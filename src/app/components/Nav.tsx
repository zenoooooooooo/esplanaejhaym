import React, { useEffect, useRef, useState } from "react";
import { navLinks } from "../constants";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import Button from "./Button";
import { CiPause1, CiPlay1 } from "react-icons/ci";

const Nav = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [music, setMusic] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/audio/weightless.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 1;
    }

    if (music) {
      audioRef.current.play().catch(() => {}); // Catch autoplay issues
    } else {
      audioRef.current.pause();
    }
  }, [music]);

  function toggleMusic(e: any) {
    e.preventDefault();
    setMusic((prev) => !prev);
  }

  function toggleMenu() {
    setIsMenuActive((prev) => !prev);
  }

  return (
    <>
      <nav className="p-12 absolute top-0 left-0 right-0 z-[9999]">
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
                className="hover:underline desktop:text-[20px] tablet:text-[16px] mobile:hidden border-2 p-2 border-t-0 border-b-0"
              >
                <Link href={link.href}>{link.text}</Link>
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
                className="hover:underline desktop:text-[20px] tablet:text-[16px] px-0 my-2 text-right p-2"
              >
                <Link href={link.href}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <Button
        text={music ? <CiPlay1 /> : <CiPause1 />}
        onClick={toggleMusic}
        className="absolute bottom-10 right-10 z-[9999] text-2xl"
      />
    </>
  );
};

export default Nav;
