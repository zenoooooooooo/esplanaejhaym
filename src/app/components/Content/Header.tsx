import { useTypewriter } from "react-simple-typewriter";
import Section from "../Custom/Section";
import { images } from "../../constants";

const Header = () => {
  const [text] = useTypewriter({
    words: [
      "Passionate software developer focused on continuous growth, building impactful projects, and learning modern technologies.",
    ],
    typeSpeed: 20,
  });

  return (
    <Section
      className="bg-black text-white flex flex-col desktop:flex-row items-center min-h-[80vh] justify-center desktop:p-20 mobile:p-4"
      tag="section"
    >
      <img
        src={images[5].src}
        alt={images[5].name}
        className="desktop:w-[400px] tablet:w-[300px] mobile:w-[250px] small:w-[200px] aspect-square rounded-full object-cover border-4 border-gray-700 
        shadow-md transition-all duration-300 ease-in-out 
        hover:shadow-[0px_0px_40px_10px_rgba(59,130,246,0.8)]"
      />

      <div className="mt-10 desktop:mt-0 desktop:ml-16 text-center desktop:text-left max-w-2xl">
        <h1 className="desktop:text-5xl tablet:text-4xl mobile:text-3xl small:text-2xl font-bold text-blue-400">
          E-Jhay M. Esplana
        </h1>

        <h2 className="text-2xl desktop:text-3xl text-gray-400 font-semibold mt-3">
          IT Student | Full-Stack Developer
        </h2>

        <p className="mt-6 text-gray-300 text-lg mobile:text-md small:text-sm leading-relaxed">
          {text}
        </p>
      </div>
    </Section>
  );
};

export default Header;
