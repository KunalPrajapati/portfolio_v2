import React from 'react';
import {Link} from 'react-scroll';

const AboutMe = () => {
  return (
    <div id='AboutSection'>
      <div className=" text-center w-10/12 max-w-[1080px] mx-auto pt-20">
          <p className=" font-bold text-xl font-sans text-white pb-1">Get To Know</p>
          <p className=" font-bold text-white text-3xl pb-3">About Me</p>
          <p className="text-white font-bold w-9/12 mx-auto text-left pb-10">I am Kunal Prajapati, a BCA student at Vivekananda Institute Of Professional Studies. I am actively working and learning frontend technologies, including HTML, CSS, JavaScript, Tailwind CSS, and React JS. My passion for technology drives me to continuously improve my skills. As a computer science student, I strive to stay up-to-date with emerging technologies.  I thoroughly enjoy the process of coding and find immense satisfaction in it.</p>
          <Link
            to="ContactMeClass"
            smooth={true}
            duration={500}
            className="text-[#e0e1e2] font-bold p-5 border-solid bg-[#4653c8] border-2 border-[#5758BB] rounded-lg hover:bg-white hover:text-[#373764] hover:border-white hover:transition ease-in duration-200"
          >
            Let's Connect
          </Link>
        </div>
    </div>
  )
}

export default AboutMe
