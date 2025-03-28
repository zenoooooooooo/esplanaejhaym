"use client";
import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import { Section, Nav } from "../components";

const ContactMe = () => {
  return (
    <Section className="bg-black min-h-screen text-white font-jetBrains">
      <Nav />
      <Section className="flex flex-col items-center px-8 py-20 text-center">
        <h1 className="text-6xl font-bold text-blue-400 flex items-center gap-4 mb-12">
          <FaEnvelopeOpenText className="text-6xl text-blue-400 animate-pulse" />
          Contact Me
        </h1>

        <div className="grid md:grid-cols-2 gap-12 w-full max-w-5xl">
          {/* Contact Info */}
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 p-10 rounded-3xl shadow-xl transition-all duration-150 hover:shadow-[0px_0px_30px_6px_rgba(59,130,246,0.7)]">
            <h3 className="text-3xl font-semibold text-blue-300 mb-6">
              Get in Touch
            </h3>
            <div className="flex flex-col gap-6 text-2xl">
              <a
                href="tel:+639074832175"
                className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-all duration-150"
              >
                <FaPhone className="text-3xl text-blue-400 animate-pulse" />
                +639947877593
              </a>
              <a
                href="mailto:esplanaejhaym@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-all duration-150"
              >
                <FaEnvelope className="text-3xl text-red-400 animate-pulse" />
                esplanaejhaym@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/e-jhay-esplana-3884ab287"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-all duration-150"
              >
                <FaLinkedin className="text-3xl text-blue-600 hover:scale-110 transition-all duration-150" />
                LinkedIn Profile
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100095327541574"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-all duration-150"
              >
                <FaFacebook className="text-3xl text-blue-500 hover:scale-110 transition-all duration-150" />
                Facebook Profile
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 border border-gray-700 p-10 rounded-3xl shadow-xl transition-all duration-150 hover:shadow-[0px_0px_30px_6px_rgba(59,130,246,0.7)]">
            <h3 className="text-3xl font-semibold text-blue-300 mb-6">
              Send a Message
            </h3>
            <form className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-gray-900 text-white border border-gray-600 p-4 text-lg rounded-lg focus:outline-none focus:border-blue-400 transition-all duration-150 hover:shadow-md"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-900 text-white border border-gray-600 p-4 text-lg rounded-lg focus:outline-none focus:border-blue-400 transition-all duration-150 hover:shadow-md"
              />
              <textarea
                placeholder="Your Message"
                className="bg-gray-900 text-white border border-gray-600 p-4 text-lg rounded-lg focus:outline-none focus:border-blue-400 h-40 resize-none transition-all duration-150 hover:shadow-md"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-8 py-4 text-2xl font-semibold rounded-lg shadow-md 
                transition-all duration-150 hover:bg-blue-600 transform hover:scale-105 hover:shadow-[0px_0px_20px_4px_rgba(59,130,246,0.7)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Section>
    </Section>
  );
};

export default ContactMe;
