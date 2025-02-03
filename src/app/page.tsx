"use client";
import Link from "next/link";
import { navLinks } from "./constants";
import { SolarSystem } from "./components";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Home() {

  return (
    <>
      <main className="bg-black text-white font-primary">
        <nav className="p-12 absolute top-0 left-0 right-0 z-[9999]">
          <ul className="flex items-center">
            <span className="">
              <li className="desktop:text-[20px] tablet:text-[16px]">Career Portfolio</li>
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
              <RxHamburgerMenu className="desktop:hidden tablet:hidden mobile:text-2xl small:text-1xl "  />
            </div>
          </ul>
        </nav>

        <SolarSystem />
      </main>
    </>
  );
}
