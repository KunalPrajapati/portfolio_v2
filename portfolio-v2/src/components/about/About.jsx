import React from "react";
import "./about.css";
import ME from "../../assets/withoutBg.png";
import { FaAward } from "react-icons/fa";
import { SiCodeproject } from "react-icons/si";
import { GiProgression } from "react-icons/gi";
const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        {/* <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" className= "" />
          </div>
        </div> */}

        <div className="about__content">
          {/* <div className="about__cards"> */}
          {/* <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>VP-Growth @Skillvalley</small>
            </article> */}

          {/* <article className='about__card'>
              <SiCodeproject className='about__icon'/>
              <h5>Projects</h5>
              <small>11+ Completed!</small>
            </article> */}
          {/* </div> */}

          <div className="">
            <p>
              I am Kunal Prajapati, a BCA student at Vivekananda Institute Of
              Professional Studies. I am actively working and learning frontend
              technologies, including HTML, CSS, JavaScript, Tailwind CSS, and
              React JS. My passion for technology drives me to continuously
              improve my skills. As a computer science student, I strive to stay
              up-to-date with emerging technologies. I thoroughly enjoy the
              process of coding and find immense satisfaction in it.
            </p>
          </div>
          <div>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default about;
