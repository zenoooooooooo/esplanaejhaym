import { useTypewriter } from "react-simple-typewriter";
import Section from "../Custom/Section";
import { images } from "../../constants";
const Header = () => {
  const [text] = useTypewriter({
    words: [
      "Hi! I'm E-Jhay Esplana\nIT Student | Full-Stack Developer\nPassionate Software Developer/Programmer focused on continuous growth. I aim to join dynamic teams, build exciting projects, and stay updated with the latest technologies. I see every day as a chance to improve, learn, and gain experience from industry mentors.",
    ],
    typeSpeed: 20,
  });

  return (
    <Section
      className="bg-black text-white flex flex-col desktop:flex-row items-center min-h-[80vh] justify-center  desktop:p-20 mobile:p-4"
      tag="section"
    >
      <img
        src={images[0].src}
        alt={images[0].name}
        className="desktop:w-[400px] tablet:w-[300px] mobile:w-[400px] small:w-[250px] aspect-square rounded-full object-cover border-4 border-gray-700 
    shadow-md transition-all duration-300 ease-in-out 
    hover:shadow-[0px_0px_40px_10px_rgba(59,130,246,0.8)]"
      />

      <div className="mt-10 desktop:mt-0 desktop:ml-16 text-center desktop:text-left">
        <h1 className="text-4xl desktop:text-6xl mobile:text-4xl font-bold tracking-wide">
          <span className="text-blue-400">{text.split("\n")[0]} </span>
        </h1>
        <h2 className="text-2xl desktop:text-3xl text-gray-400 font-semibold mt-3">
          {text.split("\n")[1]}
        </h2>
        <p className="mt-6 max-w-2xl text-lg desktop:text-xl text-gray-300 leading-relaxed">
          {text.split("\n")[2]}
        </p>
      </div>
    </Section>
  );
};

export default Header;
