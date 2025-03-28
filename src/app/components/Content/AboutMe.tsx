"use client";
import React from "react";
import Section from "../Custom/Section";
import { images } from "../../constants";


const AboutMe = () => {


  return (
    <Section className="tablet:bg-black mobile:bg-black  small:bg-black w-full h-[100vh] bg-transparent text-white font-jetBrains absolute z-[9999] top-0 overflow-auto">
      <div className="relative z-10 p-6 md:p-12 max-w-[100vw] mx-auto">
        <section className="h-[100vh] w-full flex flex-col desktop:flex-row text-center desktop:text-left items-center justify-evenly bg-transparent p-6">
          <div className="m-6">
            <img
              src={images[1].src}
              alt={images[1].name}
              className="desktop:w-[400px] tablet:w-[300px] mobile:w-[400px] small:w-[250px] aspect-square rounded-full object-cover border-4 border-gray-700 
    shadow-md transition-all duration-300 ease-in-out 
    hover:shadow-[0px_0px_40px_10px_rgba(59,130,246,0.8)]"
            />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mb-4">
              Hello again, I'm E-Jhay Esplana
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 max-w-4xl mx-auto">
              I'm an 18-year-old IT student from Cainta, Rizal, Philippines,
              with a passion for technology and learning new things every day.
            </p>
          </div>
        </section>

        <section className="h-[100vh] w-full flex flex-col desktop:flex-row text-center desktop:text-right items-center justify-evenly bg-transparent p-6">
          <div className="desktop:hidden block m-6">
            <img
              src={images[2].src}
              alt={images[2].name}
              className="desktop:w-[400px] tablet:w-[300px] mobile:w-[400px] small:w-[250px] aspect-square rounded-full object-cover border-4 border-gray-700 
    shadow-md transition-all duration-300 ease-in-out 
    hover:shadow-[0px_0px_40px_10px_rgba(59,130,246,0.8)]"
            />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mb-4">
              Hobbies & Interests
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 max-w-4xl mx-auto">
              Beyond coding, I have a deep interest in subjects like history,
              mathematics, and languages. I'm particularly passionate about
              learning Japanese and German, and I plan to explore more languages
              like French, Turkish, Russian, and Korean in the future.
            </p>

            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 max-w-4xl mx-auto">
              Though I'm still learning, I enjoy discussing these topics
              endlessly. I'm also a musician—classical piano and guitar are some
              of my favorite instruments to play, and I love jamming with
              friends.
            </p>
          </div>
          <div className="desktop:block hidden m-6">
            <img
              src={images[2].src}
              alt={images[2].name}
              className="desktop:w-[400px] tablet:w-[300px] mobile:w-[400px] small:w-[250px] aspect-square rounded-full object-cover border-4 border-gray-700 
    shadow-md transition-all duration-300 ease-in-out 
    hover:shadow-[0px_0px_40px_10px_rgba(59,130,246,0.8)]"
            />
          </div>
        </section>

        <section className="h-[100vh] w-full flex flex-col desktop:flex-row text-center desktop:text-left items-center justify-evenly bg-transparent p-6">
          <div className="m-6">
            <img
              src={images[3].src}
              alt={images[3].name}
              className="desktop:w-[400px] tablet:w-[300px] mobile:w-[400px] small:w-[250px] aspect-square rounded-full object-cover border-4 border-gray-700 
    shadow-md transition-all duration-300 ease-in-out 
    hover:shadow-[0px_0px_40px_10px_rgba(59,130,246,0.8)]"
            />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mb-4">
              Reflections
            </h1>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 max-w-4xl mx-auto">
              I enjoy the early mornings when I can watch the sunrise—it feels
              like a new day brings fresh possibilities. Similarly, I find
              comfort in watching sunsets, a reminder of a day well spent.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 max-w-4xl mx-auto">
              Life often brings moments of self-doubt, but I remind myself that
              every day is a fresh start. The past is behind me, but I have the
              power to shape my future.
            </p>
          </div>
        </section>

        <div className="flex flex-col justify-center items-center text-center h-[100vh]">
          <div>
            <img
              src={images[4].src}
              alt={images[4].name}
              className="desktop:w-[400px] tablet:w-[300px] mobile:w-[400px] small:w-[250px] aspect-square rounded-full object-cover border-4 border-gray-700 
    shadow-md transition-all duration-300 ease-in-out 
    hover:shadow-[0px_0px_40px_10px_rgba(59,130,246,0.8)]"
            />
          </div>
          <blockquote className="italic mt-8 text-xl md:text-2xl font-semibold text-gray-300">
            <p className="mb-6">
              "If you spend your time chasing butterflies, they&apos;ll simply
              fly away. But if you spend your time building a beautiful garden,
              the butterflies will come. And if they don&apos;t, you still have
              a beautiful garden."
            </p>
            <hr className="mx-auto w-[80%]" />
            <p className="mt-6">A wise man</p>
          </blockquote>
        </div>
        <div className="desktop:hidden absolute bottom-5 text-[12px] right-5 text-gray-300">
          Did you know that if you view this on a desktop, the page will turn
          into a dark room?
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
