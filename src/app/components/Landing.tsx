import React, { useEffect, useRef, useState } from "react";
import { CiPause1, CiPlay1 } from "react-icons/ci";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Button from "./Custom/Button";
const Landing = () => {
  const [headerText, { isType }] = useTypewriter({
    words: [
      "Hi, My name is E-Jhay Esplana!",
      "a Software Engineering student",
      "Specializing in Full-Stack Web Development, Mobile Development, and Desktop Development",
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 10,
  });

  const typingRef = useRef<HTMLAudioElement | null>(null);

  const [music, setMusic] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/audio/weightless.mp3");
      audioRef.current.loop = true;
      audioRef.current.volume = 1;
    }

    if (music) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [music]);

  function toggleMusic(e: any) {
    e.preventDefault();
    setMusic((prev) => !prev);
  }
  useEffect(() => {
    if (!typingRef.current) {
      typingRef.current = new Audio("/audio/typingSound.mp3");
      typingRef.current.volume = 0.5;
      typingRef.current.addEventListener("timeupdate", function () {
        const buffer = 0.44;
        if (this.currentTime > this.duration - buffer) {
          this.currentTime = 0;
          this.play();
        }
      });
    }

    if (music && isType) {
      typingRef.current.play().catch(() => {});
    } else {
      typingRef.current.pause();
      typingRef.current.currentTime = 0;
    }

    return () => {
      if (typingRef.current) {
        typingRef.current.pause();
        typingRef.current.currentTime = 0;
      }
    };
  }, [headerText, isType, music]);

  return (
    <>
      <section className="flex justify-center absolute pointer-events-none text-center desktop:top-1/3 desktop:left-1/2 z-[9999] left-20 right-20 mobile:bottom-30  bottom-20  desktop:text-[30px] tablet:text-[20px] mobile:text-[20px]">
        <span className="">
          {headerText}
          <Cursor cursorStyle="_" />
        </span>
      </section>
      <Button
        text={music ? <CiPlay1 /> : <CiPause1 />}
        onClick={toggleMusic}
        className="absolute bottom-10 right-10 z-[9999] text-2xl"
      />
    </>
  );
};

export default Landing;
