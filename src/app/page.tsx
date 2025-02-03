"use client";
import Link from "next/link";
import { navLinks } from "./constants";
import { useMediaQuery } from "react-responsive";
import { SolarSystem } from "./components";

export default function Home() {

  return (
    <>
      <main className="bg-black text-white font-primary">
        <nav className="p-12 absolute top-0 left-0 right-0 z-[9999]">
          <ul className="flex items-center">
            <span className="">
              <li className="text-[20px]">Career Portfolio</li>
            </span>
            <div className="ml-auto flex items-center gap-8">
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  className="hover:underline text-[20px] border-2 p-2 border-t-0 border-b-0"
                >
                  <Link href={link.href}>{link.text}</Link>
                </li>
              ))}
            </div>
          </ul>
        </nav>

        <SolarSystem />
      </main>
    </>
  );
}
