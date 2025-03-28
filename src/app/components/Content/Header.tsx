import { useTypewriter } from "react-simple-typewriter";
import Section from "../Custom/Section";
import { images } from "../../constants";
const Header = () => {
  const [text] = useTypewriter({
    words: [
      "E-Jhay M. Esplana\nIT Student | Full-Stack Developer\nPassionate Software Developer/Programmer focused on continuous growth. I aim to join dynamic teams, build exciting projects, and stay updated with the latest technologies. I see every day as a chance to improve, learn, and gain experience from industry mentors.",
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
        className="desktop:w-[400px] tablet:w-[300px] mobile:w-[250px] small:w-[200px] aspect-square rounded-full object-cover border-4 border-gray-700 
    shadow-md transition-all duration-300 ease-in-out 
    hover:shadow-[0px_0px_40px_10px_rgba(59,130,246,0.8)]"
      />

      <div className=" mt-10 desktop:mt-0 desktop:ml-16 desktop:text-left text-center">
        <h1 className="desktop:text-5xl tablet:text-5xl  mobile:text-4xl small:text-2xl font-bold text-blue-400">
          {text.split("\n")[0]}
        </h1>
        <h2 className="text-2xl desktop:text-3xl text-gray-400 font-semibold mt-3">
          {text.split("\n")[1]}
        </h2>
        <p className="mt-6 max-w-2xl text-xl mobile:text-md small:text-sm mobile:mx-4 small:mx-4 text-gray-300 leading-relaxed">
          {text.split("\n")[2]}
        </p>
      </div>
    </Section>
  );
};

export default Header;
