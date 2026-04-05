"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "./Custom/Section";
import { FaRoad } from "react-icons/fa";
import { images, videos } from "../constants";

const Journey = () => {
  return (
    <Section className="absolute z-10 w-full h-screen overflow-y-auto px-6">
      <Section className=" text-white py-40 px-6" tag="section">
        <h1 className="text-2xl text-center sm:text-3xl md:text-4xl font-semibold text-blue-400 flex items-center justify-center gap-3 mb-3">
          <FaRoad className="text-3xl sm:text-4xl md:text-5xl animate-pulse" />
          Journey
        </h1>

        <p className="text-gray-400 mb-16 text-center text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          My journey through competitions, seminars, hackathons, and community
          involvement as a developer and student.
        </p>

        <div className="relative max-w-5xl mx-auto px-4">
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 h-full w-[2px] bg-neutral-800 z-0" />

          <div className="space-y-20 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="md:flex md:justify-end"
            >
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 max-w-2xl">
                <h2 className="text-xl font-semibold text-blue-400">
                  General Assembly 2026
                </h2>
                <p className="text-sm text-neutral-400">March 4, 2026</p>
                <p className="text-sm text-neutral-300 mt-2">
                  I helped organize a school-wide general assembly for Alpha
                  organization, featuring onboarding of new members, officer
                  oath-taking, and interactive mini-games to engage students.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                  <img src={images[21].src} />
                  <img src={images[22].src} />
                  <video src={videos[3].src} controls className="rounded-lg" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="md:flex md:justify-start"
            >
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 max-w-2xl">
                <h2 className="text-xl font-semibold text-blue-400">
                  UMak IT Skills Olympics
                </h2>
                <p className="text-sm text-neutral-400">November 21, 2025</p>
                <p className="text-sm text-neutral-300 mt-2">
                  I had the opportunity to compete in the .NET Programming (C#)
                  category at the 14th IT Skills Olympics held at the University
                  of Makati, where I represented my school alongside a
                  classmate. During the competition, we worked through coding
                  problems similar to LeetCode-style challenges, requiring
                  strong problem-solving skills, efficiency, and a clear
                  understanding of programming fundamentals under time pressure.
                  <br />
                  <br />
                  What made this experience especially meaningful for me was the
                  preparation leading up to the event. Training for the
                  competition pushed me to dive deeper into data structures and
                  algorithms, significantly improving how I approach and solve
                  problems in code. It wasn’t just about competing—it was about
                  growth, discipline, and learning how to think like a more
                  effective developer. This experience strengthened both my
                  technical skills and my ability to collaborate and perform in
                  a high-pressure environment.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                  <img src={images[27].src} />
                  <img src={images[28].src} />
                  <img src={images[29].src} />
                  <img src={images[30].src} />
                  <img src={images[31].src} />
                  <img src={images[32].src} />
                  <img src={images[33].src} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="md:flex md:justify-end"
            >
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 max-w-2xl">
                <h2 className="text-xl font-semibold text-blue-400">
                  TechFest 2025
                </h2>
                <p className="text-sm text-neutral-400">November 17–18, 2025</p>
                <p className="text-sm text-neutral-300 mt-2">
                  I helped organize and host a multi-event tech festival
                  featuring a research congress, Python programming, ICT quiz
                  bee, MLBB tournament, capstone symposium, Android app
                  development (games and productivity apps), IoT systems,
                  digital arts, and Sumobot competitions.
                </p>

                <div className="mt-4">
                  <img src={images[26].src} className="rounded-lg" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="md:flex md:justify-end"
            >
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 max-w-2xl">
                <h2 className="text-xl font-semibold text-blue-400">
                  Cursor AI Meetup
                </h2>
                <p className="text-sm text-neutral-400">October 11, 2025</p>
                <p className="text-sm text-neutral-300 mt-2">
                  I attended Cursor Philippines Meetup Episode 2 at the Cebu
                  Pacific Headquarters in Pasay City alongside my fellow
                  developers from ALPHA: Alliance of Leading Programmers through
                  Heuristic Adaptation. The event focused on Cursor IDE and
                  AI-augmented development, giving participants the opportunity
                  to explore the latest features and learn directly from the
                  Cursor team. As an aspiring Machine Learning engineer, I find
                  the application of AI in any field fascinating, which is why
                  this event really caught my attention.
                  <br />
                  <br />
                  One of the highlights was the hackathon, where we teamed up
                  with other participants to develop an application that solves
                  real-world problems using Cursor IDE and its integrated AI.
                  Collaborating with others allowed us to make new friends,
                  exchange ideas, share experiences and insights, and expand our
                  professional network, which was one of the most rewarding
                  aspects of the day.
                  <br />
                  <br />
                  I also had hands-on experience coding with Cursor AI. We
                  really enjoyed using the IDE and AI because we managed to
                  create an entire full-stack application in under 10 minutes
                  just by prompting our ideas. It was insightful to see how AI
                  can act as an assistant, not a replacement, supporting
                  debugging, providing suggestions, and improving workflow
                  efficiency while still leaving the creative and
                  problem-solving work to humans. I can only imagine how much
                  more efficient it would be if AI and human skill are combined
                  not just in coding but in virtually every field.
                  <br />
                  <br />
                  Attending Cursor Philippines Meetup Episode 2 was an inspiring
                  and eye-opening experience. It reinforced how collaboration,
                  learning, and the thoughtful use of AI can accelerate
                  innovation. I look forward to applying these insights to
                  future projects and exploring more ways AI can enhance human
                  creativity and productivity.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                  <img src={images[12].src} />
                  <img src={images[13].src} />
                  <img src={images[14].src} />
                  <img src={images[15].src} />
                  <img src={images[16].src} />
                  <img src={images[17].src} />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="md:flex md:justify-end"
            >
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 max-w-2xl">
                <h2 className="text-xl font-semibold text-blue-400">
                  General Assembly 2025
                </h2>
                <p className="text-sm text-neutral-400">
                  July 28 & August 20, 2025
                </p>
                <p className="text-sm text-neutral-300 mt-2">
                  Student organization assemblies introducing Alpha, including
                  orientation, onboarding activities, and leadership engagement
                  sessions, where I provided technical support for presentation
                  setup, screen connectivity, and media management.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                  <img src={images[18].src} />
                  <img src={images[19].src} />
                  <img src={images[20].src} />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="md:flex md:justify-start"
            >
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 max-w-2xl">
                <h2 className="text-xl font-semibold text-blue-400">
                  Sonic Blockchain Bootcamp
                </h2>
                <p className="text-sm text-neutral-400">July 12, 2025</p>
                <p className="text-sm text-neutral-300 mt-2">
                  Grateful to have been part of the Sonic Blockchain Boot Camp
                  held on July 12, 2025 at GreatWork Ortigas. We explored core
                  Web3 concepts like ownership, decentralization, privacy,
                  security, and autonomy, and how these ideas come to life
                  through blockchain technology and smart contracts. There were
                  also hands-on sessions where we learned how to set up
                  blockchain-based projects and understand the technical side of
                  building in Web3.
                  <br />
                  <br />
                  What I appreciated most was learning from industry experts and
                  connecting with fellow developers who are just as curious
                  about where this technology is headed.
                  <br />
                  <br />
                  Big thanks to Koleen BP for the insightful instruction, and to
                  Sonic Labs, Bitskwela, Filipino Web Development Peers, and all
                  the partners who made this event possible.
                  <br />
                  <br />
                  Looking forward to applying what I’ve learned and continuing
                  to grow in the Web3 space.
                </p>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  <img src={images[34].src} />
                  <img src={images[35].src} />
                  <video src={videos[2].src} controls className="rounded-lg" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="md:flex md:justify-start"
            >
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 max-w-2xl">
                <h2 className="text-xl font-semibold text-blue-400">
                  NSTP CWTS: Seeds of Change
                </h2>
                <p className="text-sm text-neutral-400">April 28, 2025</p>
                <p className="text-sm text-neutral-300 mt-2">
                  I’m grateful to have been part of the Seeds of Change: Uniting
                  for a Greener Community, Cleaner World initiative under the
                  National Service Training Program (CWTS) at STI College
                  Ortigas–Cainta.
                  <br />
                  <br />
                  I served as one of the student representatives and was part of
                  both the Finance and Technical Committees. During the planning
                  and execution of the event, I also assisted with logistics and
                  documentation, including photography, to help ensure that
                  activities were properly organized and well-recorded.
                  <br />
                  <br />
                  The program, held at Barangay San Juan, Exodus Annex, focused
                  on a community donation drive and feeding program for
                  children, while also promoting environmental awareness through
                  activities such as teaching proper seed planting.
                  <br />
                  <br />
                  This experience strengthened my skills in teamwork,
                  coordination, and adaptability, while also giving me the
                  opportunity to contribute to a meaningful community
                  initiative. It was fulfilling to be part of a project that
                  combined service, learning, and environmental advocacy.
                </p>

                <div className="mt-4">
                  <img src={images[25].src} className="rounded-lg" />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6 }}
              className="md:flex md:justify-start"
            >
              <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 max-w-2xl">
                <h2 className="text-xl font-semibold text-blue-400">
                  ICT Week 2024
                </h2>
                <p className="text-sm text-neutral-400">Nov 27–29, 2024</p>
                <p className="text-sm text-neutral-300 mt-2">
                  A large ICT event that I helped facilitate as an ALPHA
                  officer, featuring esports tournaments, 3D modeling, Android
                  development, chess tournaments, web development, game
                  development challenges, research congress, and quiz bees, with
                  participants from multiple schools. I also contributed by
                  developing participant registration web forms and facilitating
                  competitions such as the chess tournament, inter-school
                  hackathon web design, and mobile app development contest.
                </p>

                <div className="grid grid-cols-2 gap-3 mt-4">
                  <img src={images[23].src} />
                  <img src={images[24].src} />
                  <img src={images[11].src} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </Section>
  );
};

export default Journey;
