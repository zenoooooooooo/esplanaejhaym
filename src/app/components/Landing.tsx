import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Landing = () => {
  const [headerText] = useTypewriter({
    words: [
      "Hi! My name is E-Jhay Esplana!",
      "a Software Engineering student from the Philippines",
      "Specializing in Full-Stack Web Development, Mobile Development, and Desktop Development",
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
  });

  return (
    <>
      <section className="flex justify-center absolute pointer-events-none text-center desktop:top-1/3 desktop:left-1/2 z-[9999] left-20 right-20 mobile:bottom-30  bottom-20  desktop:text-[30px] tablet:text-[20px] mobile:text-[20px]">
        <span className="">
          {headerText}
          <Cursor cursorStyle="_" />
        </span>
      </section>
    </>
  );
};

export default Landing;
