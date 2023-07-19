import Typewriter from "typewriter-effect";
import React from "react";
import { Link } from "react-scroll";
import ProfileBg from "../assets/withoutBg.png";

const HeaderSection = () => {
  return (
    <div id="HeaderSection">
      <div className="h-full w-10/12 max-w-[1080px] mx-auto pt-20">
        <div className="text-center">
          <p className="font-bold text-xl font-sans text-white">Hey I'm</p>
          <p className="font-bold text-white text-3xl">Kunal Prajapati</p>
          <p className="text-white font-bold text-lg">
            <Typewriter
              options={{
                strings: ["Front-end Developer", "Stock Market Trader", "Traveller"],
                autoStart: true,
                loop: true,
                delay: 100,
              }}
            />
          </p>
        </div>

        <div className="flex justify-center pt-12 gap-10">
          <a
            href="https://drive.google.com/file/d/1hw6tOM9ooLaTSr25hQ88pT94oOC-nZ3U/view"
            target="__blank" rel="noreferrer"
            className="text-[#e0e1e2] font-bold p-5 border-solid border-2 border-[#5758BB] rounded-lg hover:bg-white hover:text-[#373764] hover:border-white hover:transition ease-in duration-200"
          >
            Download CV
          </a>

          <Link
            to="ContactMeClass"
            smooth={true}
            duration={500}
            className="text-[#e0e1e2] font-bold p-5 border-solid bg-[#4653c8] border-2 border-[#5758BB] rounded-lg hover:bg-white hover:text-[#373764] hover:border-white hover:transition ease-in duration-200"
          >
            Let's Connect
          </Link>
        </div>

        <div className="overflow-hidden mx-auto mt-14 rounded-t-[100%] w-[320px] h-[380px] bg-gradient-to-b from-[#4653c8] to-transparent relative">
          <img src={ProfileBg} alt="Profile Img" className="pt-5 absolute z-10 top-1 left-0 w-[450px] h-[450px]" />
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
