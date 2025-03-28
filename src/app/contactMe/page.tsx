"use client";
import React from "react";
import { useForm } from "react-hook-form";
import useSWRMutation from "swr/mutation";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import { Section, Nav } from "../components";

interface IEmail {
  name: string;
  email: string;
  message: string;
}

// Ensure `sendEmail` conforms to SWR mutation fetcher requirements
const sendEmail = async (url: string, { arg }: { arg: IEmail }) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });

  if (!response.ok) {
    throw new Error("Failed to send message");
  }

  return response.json();
};

const ContactMe: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<IEmail>();
  const { trigger, isMutating } = useSWRMutation<IEmail, Error, string>("/api/email", sendEmail);

  const onSubmit = async (data: any) => {
    try {
      await trigger(data);
      alert("Message sent successfully!");
      reset();
    } catch (error) {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <Section className="bg-black min-h-screen text-white font-jetBrains">
      <Nav />
      <Section className="flex flex-col items-center px-6 py-16 text-center">
        <h1 className="text-6xl font-bold text-blue-400 flex items-center gap-4 mb-12">
          <FaEnvelopeOpenText className="text-6xl text-blue-400 animate-pulse" />
          Contact Me
        </h1>

        <div className="grid tablet:grid-cols-2 gap-12 w-full max-w-5xl">
          <div className="bg-gray-900 p-10 rounded-3xl shadow-lg">
            <h3 className="text-3xl font-semibold text-blue-300 mb-6">Get in Touch</h3>
            <div className="flex flex-col gap-6 text-2xl">
              <a href="tel:+639947877593" className="flex items-center gap-4 text-gray-300 hover:text-blue-400">
                <FaPhone className="text-3xl text-blue-400" /> +639947877593
              </a>
              <a href="mailto:esplanaejhaym@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-blue-400">
                <FaEnvelope className="text-3xl text-red-400" /> esplanaejhaym@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/e-jhay-esplana-3884ab287" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-blue-400">
                <FaLinkedin className="text-3xl text-blue-600" /> E-Jhay Esplana
              </a>
              <a href="https://www.facebook.com/profile.php?id=100095327541574" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-blue-400">
                <FaFacebook className="text-3xl text-blue-500" /> E-Jhay Esplana
              </a>
              <a href="https://www.instagram.com/espleynaaa/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-pink-400">
                <FaInstagram className="text-3xl text-pink-500" /> espleynaaa
              </a>
            </div>
          </div>

          <div className="bg-gray-900 p-10 rounded-3xl shadow-lg">
            <h3 className="text-3xl font-semibold text-blue-300 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Your Name"
                className="bg-gray-800 text-white border p-4 rounded-lg focus:outline-none focus:border-blue-400"
              />
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Your Email"
                className="bg-gray-800 text-white border p-4 rounded-lg focus:outline-none focus:border-blue-400"
              />
              <textarea
                {...register("message", { required: true })}
                placeholder="Your Message"
                className="bg-gray-800 text-white border p-4 rounded-lg focus:outline-none focus:border-blue-400 h-40 resize-none"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-8 py-4 text-2xl font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
                disabled={isMutating}
              >
                {isMutating ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </Section>
    </Section>
  );
};

export default ContactMe;
