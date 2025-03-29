"use client";
import React from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
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

const sendEmail = async (url: string, { arg }: { arg: IEmail }) => {
  if (!navigator.onLine) {
    toast.error("You are offline. Please check your internet connection.");
    throw new Error("Offline: No internet connection.");
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });

  if (!response.ok) {
    toast.error("Failed to send message. Please try again.");
    throw new Error("Failed to send message. Please try again.");
  }

  return response.json();
};

const ContactMe: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<IEmail>();
  const { trigger, isMutating } = useSWRMutation<IEmail, Error, string>(
    "/api/email",
    sendEmail
  );

  const onSubmit = async (data: any) => {
    try {
      await trigger(data);
      toast.success("Message sent successfully!");
      reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <Section className="bg-black min-h-screen text-white font-jetBrains">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      <Nav />
      <Section className="flex flex-col items-center px-6 mobile:px-4 small:px-2 py-16 text-center">
        <h1 className="desktop:text-5xl tablet:text-5xl  mobile:text-4xl small:text-2xl font-bold text-blue-400 flex items-center justify-center gap-3">
          <FaEnvelopeOpenText className="text-6xl  text-blue-400 animate-pulse" />
          Contact Me
        </h1>

        <div className="flex flex-col items-center w-full mt-10">
          <div className="mb-8 bg-gradient-to-b desktop:w-[60%] tablet:w-[60%] mobile:w-full small:w-full from-gray-800 to-gray-900 border border-gray-700 p-4 rounded-3xl shadow-lg hover:shadow-[0px_0px_30px_6px_rgba(59,130,246,0.7)] duration-150">
            <h3 className="text-3xl mobile:text-2xl small:text-2xl font-semibold text-blue-300 mb-6">
              Send me a Message
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6 mobile:text-sm"
            >
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
                className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-6 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-500 hover:shadow-lg hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:bg-gray-600 disabled:cursor-not-allowed"
                disabled={isMutating}
              >
                {isMutating ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
          <hr className="w-4/5 border-gray-500 my-4" />

          <div className="mt-8 bg-gradient-to-b desktop:w-[60%] tablet:w-[60%] mobile:w-full small:w-full from-gray-800 to-gray-900 border border-gray-700 p-4 rounded-3xl shadow-lg hover:shadow-[0px_0px_30px_6px_rgba(59,130,246,0.7)] duration-150">
            <h3 className="text-3xl mobile:text-2xl small:text-2xl font-semibold text-blue-300 mb-6">
              Get in Touch
            </h3>
            <div className="flex flex-col items-center gap-6 text-2xl mobile:text-md small:text-sm">
              <hr className="w-full border-gray-500 my-4" />
              <a
                href="tel:+639947877593"
                className="flex items-center gap-4 text-gray-300 hover:text-blue-300 transition-colors"
              >
                <FaPhone className="text-3xl text-blue-400" />
                +639947877593
              </a>
              <hr className="w-full border-gray-500 my-4" />

              <a
                href="mailto:esplanaejhaym@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-red-300 transition-colors"
              >
                <FaEnvelope className="text-3xl  text-red-400" />{" "}
                esplanaejhaym@gmail.com
              </a>
              <hr className="w-full border-gray-500 my-4" />

              <a
                href="https://www.linkedin.com/in/e-jhay-esplana-3884ab287"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-blue-500 transition-colors"
              >
                <FaLinkedin className="text-3xl text-blue-600" /> E-Jhay Esplana
              </a>
              <hr className="w-full border-gray-500 my-4" />

              <a
                href="https://www.facebook.com/profile.php?id=100095327541574"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <FaFacebook className="text-3xl text-blue-500" /> E-Jhay Esplana
              </a>
              <hr className="w-full border-gray-500 my-4" />

              <a
                href="https://www.instagram.com/espleynaaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-pink-400 transition-colors"
              >
                <FaInstagram className="text-3xl text-pink-500" /> espleynaaa
              </a>
              <hr className="w-full border-gray-500 my-4" />
            </div>
          </div>
        </div>
      </Section>
    </Section>
  );
};

export default ContactMe;
