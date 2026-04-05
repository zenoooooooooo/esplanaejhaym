"use client";
import React from "react";
import Section from "../Custom/Section";
import { images, videos, gifs } from "../../constants";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import Button from "../Custom/Button";
import { BsDoorOpen } from "react-icons/bs";
import Link from "next/link";
import { PiQuestionMark } from "react-icons/pi";
import { Slide, toast, ToastContainer } from "react-toastify";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const AboutMe = () => {
  const isDesktop = useMediaQuery({ minWidth: 1025 });
  function toggleInfo() {
    isDesktop
      ? toast.info("A simple click can reveal more than you think.")
      : toast.info(
          "Did you know that if you view this on a desktop, the page will turn into a dark room?",
        );
  }

  return (
    <Section className="tablet:bg-black mobile:bg-black small:bg-black w-full min-h-screen desktop:h-[100vh] bg-transparent text-white font-jetBrains absolute z-[9999] top-0 overflow-auto">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />

      <div className="relative z-10 w-full mx-auto">
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="min-h-screen desktop:h-[100vh] w-full flex flex-col desktop:flex-row items-center justify-evenly text-center desktop:text-left px-4 py-8 sm:p-6"
        >
          <motion.div variants={isDesktop ? fadeRight : fadeUp} className="m-6">
            <img
              src={images[6].src}
              alt={images[6].name}
              className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] desktop:w-[340px] desktop:h-[340px] shadow-md transition-all duration-300 ease-in-out 
        hover:shadow-[0px_0px_40px_10px_rgba(59,130,246,0.8)] rounded-full object-cover border-4 border-gray-700 "
            />
          </motion.div>

          <motion.div
            variants={isDesktop ? fadeRight : fadeUp}
            className="max-w-4xl px-2"
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-400 mb-4">
              <span className="bg-black rounded">Who am I?</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              <span className="bg-black rounded">
                I’m a 19-year-old IT student and full-stack developer from
                Cainta, Rizal, Philippines. I'm a philomath, deeply in love with
                history, language, mathematics, science, music, art, and poetry.
              </span>
            </p>
          </motion.div>
        </motion.section>

        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="min-h-screen desktop:h-[100vh] w-full flex flex-col desktop:flex-row items-center justify-evenly text-center desktop:text-right px-4 py-8 sm:p-6"
        >
          <motion.div
            variants={isDesktop ? fadeLeft : fadeUp}
            className="max-w-4xl order-2 desktop:order-1"
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-400 mb-4">
              <span className="bg-black rounded">Challenge is fun</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              <span className="bg-black rounded">
                Out of all the things I am studying, I find languages the most
                difficult, and that’s exactly what makes them fun. I enjoy
                studying grammar, patterns, and different writing systems across
                languages like Japanese, German, Russian, French, Korean,
                Polish, Spanish, Turkish, and Greek. While I’m not fluent in
                most of them, I appreciate how each language is uniquely built.
              </span>
            </p>
          </motion.div>

          <motion.img
            variants={isDesktop ? fadeLeft : fadeUp}
            src={images[10].src}
            alt={images[10].name}
            className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] desktop:w-[340px] desktop:h-[340px] shadow-md transition-all duration-300 ease-in-out 
        hover:shadow-[0px_0px_40px_10px_rgba(59,130,246,0.8)] rounded-full object-cover border-4 border-gray-700 order-1 desktop:order-2"
          />
        </motion.section>

        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="min-h-screen desktop:h-[100vh] w-full flex flex-col items-center justify-center text-center px-4 py-8 sm:p-6"
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-col desktop:flex-row items-center gap-4 sm:gap-6 mb-6"
          >
            <video
              controls
              className="w-full max-w-[520px] rounded-xl border-2 border-gray-700"
            >
              <source src={videos[0].src} type="video/mp4" />
            </video>

            <video
              controls
              className="w-full max-w-[520px] rounded-xl border-2 border-gray-700"
            >
              <source src={videos[1].src} type="video/mp4" />
            </video>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-400 mb-4"
          >
            <span className="bg-black rounded">
              Playing feels better than listening
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl"
          >
            <span className="bg-black rounded">
              I’m also a musician. I play several instruments including piano,
              guitar, flute, ukulele, and I’m currently learning the violin. Out
              of all of them, I consider myself a pianist at heart. Piano is the
              instrument I feel most connected to. I'm always been and always
              will be in love with the works of Mozart, Chopin, and Liszt. I
              usually learn pieces as a form of dedication to people I care
              about.
            </span>
          </motion.p>
        </motion.section>

        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="min-h-screen desktop:h-[100vh] w-full flex flex-col desktop:flex-row items-center justify-evenly text-center desktop:text-left px-4 py-8 sm:p-6"
        >
          <motion.img
            variants={isDesktop ? fadeRight : fadeUp}
            src={images[8].src}
            alt={images[8].name}
            className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] desktop:w-[340px] desktop:h-[340px] shadow-md transition-all duration-300 ease-in-out 
        hover:shadow-[0px_0px_40px_10px_rgba(59,130,246,0.8)] rounded-full object-cover border-4 border-gray-700"
          />

          <motion.div
            variants={isDesktop ? fadeRight : fadeUp}
            className="max-w-4xl px-2"
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-400 mb-4">
              <span className="bg-black rounded">
                Takes, takes, takes, checkmate!
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              <span className="bg-black rounded">
                I also enjoy chess. I like the mental challenge, the strategy,
                and the mind games involved in every move. It’s not just a game
                for me, it’s something that helps me think more critically and
                stay patient.
              </span>
            </p>
          </motion.div>
        </motion.section>

        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="min-h-screen desktop:h-[100vh] w-full flex flex-col desktop:flex-row items-center justify-evenly text-center desktop:text-right px-4 py-8 sm:p-6"
        >
          <motion.div
            variants={isDesktop ? fadeLeft : fadeUp}
            className="max-w-4xl order-2 desktop:order-1"
          >
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-400 mb-4">
              <span className="bg-black rounded">Cube connoisseur</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              <span className="bg-black rounded">
                I also collect and solve different types of Rubik’s cubes, from
                2x2 up to 7x7, along with puzzles like the pyraminx, megaminx,
                mirror cube, ivy cube, and barrel. I find them satisfying to
                solve and interesting to learn, especially because each one has
                its own patterns and solving methods.
              </span>
            </p>
          </motion.div>

          <motion.img
            variants={isDesktop ? fadeLeft : fadeUp}
            src={images[9].src}
            alt={images[9].name}
            className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] desktop:w-[340px] desktop:h-[340px] shadow-md transition-all duration-300 ease-in-out 
        hover:shadow-[0px_0px_40px_10px_rgba(59,130,246,0.8)] rounded-full object-cover border-4 border-gray-700  order-1 desktop:order-2"
          />
        </motion.section>

        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="min-h-screen desktop:h-[100vh] w-full flex flex-col items-center justify-center text-center px-4 py-8 sm:p-6"
        >
          <motion.img
            variants={fadeUp}
            src={gifs[0].src}
            alt={gifs[0].name}
            className="w-[620px] rounded-xl border-2 border-gray-700 mb-6 shadow-md transition-all duration-300 ease-in-out 
        hover:shadow-[0px_0px_40px_10px_rgba(59,130,246,0.8)]"
          />

          <motion.h1
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-400 mb-4"
          >
            → ☆ ↓ ↘ + 2 = Happiness
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl"
          >
            <span className="bg-black rounded">
              I play Tekken (from Tekken 6 to Tekken 8) and I regularly host
              tekken nights with my best friends where we play the game
              overnight. I even go to different computer shops and arcades just
              to play with random strangers to test my strength.
            </span>
          </motion.p>
        </motion.section>

        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="min-h-screen desktop:h-[100vh] w-full flex flex-col items-center justify-center text-center px-4 py-8 sm:p-6"
        >
          <motion.h1
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-400 mb-4"
          >
            <span className="bg-black rounded">Poetry is human</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl"
          >
            <span className="bg-black rounded">
              I also spend time writing poetry and reflections. I write about
              observations on the human mind and behavior, science, and personal
              experiences, whether it’s about hardship, growth, or love. Writing
              is one of the ways I process what I feel and understand the world
              around me. Some of my poems are written for someone in mind,
              though I keep most of them private.
            </span>
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="w-full flex justify-center my-8"
          >
            <div className="w-[60%] border-t border-gray-600" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-sm sm:text-base text-gray-400 tracking-wide mb-6"
          >
            <span className="bg-black rounded">
              21st and 22nd poems in my own poetry book
            </span>
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full max-w-5xl text-center"
          >
            <div>
              <h2 className="text-blue-400 text-base sm:text-lg font-semibold mb-2">
                <span className="bg-black rounded">
                  Whisper XXI – Fireworks
                </span>
              </h2>
              <p className="italic text-gray-300 text-sm sm:text-base leading-relaxed">
                <span className="bg-black rounded">
                  In the vastness of a darkest night
                  <br />
                  There was you bursting like a firework right before my eyes
                  <br />
                  Even with no stars in sight, you conquered the sky with fire
                  <br />
                  Such unpredictable spark, luminously colorful, powerful, and
                  fine
                </span>
              </p>
            </div>

            <div>
              <h2 className="text-blue-400 text-base sm:text-lg font-semibold mb-2">
                <span className="bg-black rounded">
                  Whisper XXII – The Writer and the Reader
                </span>
              </h2>
              <p className="italic text-gray-300 text-sm sm:text-base leading-relaxed">
                <span className="bg-black rounded">
                  You are the avidest devourer of literature I know
                  <br />
                  And I am fondest of inscribing them all
                  <br />
                  You may not have noticed but the stars have already aligned
                  <br />
                  That I was born to nurture something precious to thine mind
                </span>
              </p>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="min-h-screen desktop:h-[100vh] w-full flex flex-col items-center justify-center text-center px-4 py-8 sm:p-6"
        >
          <motion.img
            variants={fadeUp}
            src={images[2].src}
            alt={images[2].name}
            className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] desktop:w-[340px] desktop:h-[340px] shadow-md transition-all duration-300 ease-in-out 
        hover:shadow-[0px_0px_40px_10px_rgba(59,130,246,0.8)] rounded-full object-cover border-4 border-gray-700 mb-8"
          />
          <motion.h1
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-400 mb-4"
          >
            <span className="bg-black rounded">YOLOOOOO</span>
          </motion.h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl">
            <span className="bg-black rounded">
              For me, life is too short to limit yourself to just one path out
              of fear of not mastering everything. I’d rather explore, learn,
              and experience as much as I can. Doing the things that make me
              happy matters more than fitting into a label.
            </span>
          </p>
        </motion.section>

        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="min-h-screen desktop:h-[100vh] w-full flex flex-col items-center justify-center text-center px-4 py-8 sm:p-6"
        >
          <motion.img
            variants={fadeUp}
            src={images[4].src}
            alt={images[4].name}
            className="w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] desktop:w-[340px] desktop:h-[340px] shadow-md transition-all duration-300 ease-in-out 
        hover:shadow-[0px_0px_40px_10px_rgba(59,130,246,0.8)] rounded-full object-cover border-4 border-gray-700 mb-8"
          />

          <motion.blockquote
            variants={fadeUp}
            className="italic text-xl md:text-2xl text-gray-300 max-w-4xl"
          >
            <p>
              <span className="bg-black rounded">
                "If you spend your time chasing butterflies, they'll simply fly
                away. But if you spend your time building a beautiful garden,
                the butterflies will come. And if they don't, you still have a
                beautiful garden."
              </span>
            </p>

            <div className="w-full flex justify-center my-6">
              <div className="w-[60%] border-t border-gray-600" />
            </div>

            <p className="text-gray-400">
              <span className="bg-black rounded">A wise man </span>
            </p>
          </motion.blockquote>
        </motion.section>
      </div>
      <Button
        text={<PiQuestionMark />}
        onClick={toggleInfo}
        className="fixed top-10 left-20 z-[9999] text-2xl"
      />
      <Link href="/" className="fixed top-10 left-10 z-[9999] text-2xl">
        <BsDoorOpen />
      </Link>
    </Section>
  );
};

export default AboutMe;
