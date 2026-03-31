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
  FaPaperPlane,
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
    throw new Error("offline");
  }

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(arg),
  });

  if (!res.ok) {
    throw new Error("failed");
  }

  return res.json();
};

const ContactMe: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<IEmail>();
  const { trigger, isMutating } = useSWRMutation("/api/email", sendEmail);

  const onSubmit = async (data: IEmail) => {
    await toast.promise(trigger(data), {
      pending: "Sending message...",
      success: "Message sent successfully!",
      error: "Failed to send message.",
    });

    reset();
  };

  return (
    <Section className="bg-black min-h-screen h-full text-white font-jetBrains">
      <ToastContainer
        position="bottom-right"
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
      <Nav />

      <Section className="px-6 pb-6 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold text-blue-400 flex items-center justify-center gap-3 mb-4">
            <FaEnvelopeOpenText className="text-5xl animate-pulse" />
            Contact Console
          </h1>
          <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Reach out through any channel or send a direct message.
          </p>
        </div>

        <div className="grid grid-cols-1 desktop:grid-cols-12 gap-8">
          <div className="desktop:col-span-4 space-y-6">
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-blue-500/40 transition max-w-2xl mx-auto md:mx-0">
              <h2 className="text-xl text-blue-300 font-semibold">
                Developer Profile
              </h2>

              <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                Full-stack developer focused on building scalable web systems,
                automation tools, and interactive UI experiences.
              </p>

              <div className="mt-5 text-xs text-gray-500 space-y-1">
                <p>Status: Available for work</p>
                <p>Response: 24–48 hours</p>
                <p>Location: Remote / Philippines</p>
              </div>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-blue-500/40 transition max-w-2xl mx-auto md:mx-0">
              <h3 className="text-blue-300 font-semibold mb-4">
                Quick Connect
              </h3>

              <div className="flex flex-col gap-4 text-sm">
                <a
                  href="tel:+639947877593"
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition"
                >
                  <FaPhone className="text-blue-400" />
                  Call - 09947877593
                </a>

                <a
                  href="mailto:esplanaejhaym@gmail.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-red-400 transition"
                >
                  <FaEnvelope className="text-red-400" />
                  Email - esplanaejhaym@gmail.com
                </a>

                <a
                  href="https://www.linkedin.com/in/e-jhay-esplana-3884ab287/"
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-500 transition"
                >
                  <FaLinkedin className="text-blue-500" />
                  LinkedIn - E-Jhay Esplana
                </a>

                <a
                  href="https://www.facebook.com/espleynaaa"
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition"
                >
                  <FaFacebook className="text-blue-400" />
                  Facebook - E-Jhay Esplana
                </a>

                <a
                  href="https://www.instagram.com/espleynaaa/"
                  className="flex items-center gap-3 text-gray-300 hover:text-pink-400 transition"
                >
                  <FaInstagram className="text-pink-400" />
                  Instagram - espleynaaa
                </a>
              </div>
            </div>
          </div>

          <div className="desktop:col-span-8">
            <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-5 hover:border-blue-500/40 transition">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl text-blue-300 font-semibold">
                  Message Terminal
                </h2>

                <div className="text-xs text-gray-500">
                  encrypted connection
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 tablet:grid-cols-2 gap-4">
                  <input
                    {...register("name", { required: true })}
                    placeholder="Name"
                    className="bg-neutral-800 border border-neutral-700 rounded-lg p-2.5 text-sm focus:border-blue-400 focus:outline-none transition"
                  />

                  <input
                    {...register("email", { required: true })}
                    placeholder="Email"
                    type="email"
                    className="bg-neutral-800 border border-neutral-700 rounded-lg p-2.5 text-sm focus:border-blue-400 focus:outline-none transition"
                  />
                </div>

                <textarea
                  {...register("message", { required: true })}
                  placeholder="Type your message..."
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-lg p-3 text-sm h-56 resize-none focus:border-blue-400 focus:outline-none transition"
                />

                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-500">
                    Tip: keep it clear and concise
                  </p>

                  <button
                    disabled={isMutating}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 px-6 py-3 rounded-lg transition"
                  >
                    <FaPaperPlane />
                    {isMutating ? "Sending..." : "Transmit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Section>
    </Section>
  );
};

export default ContactMe;
