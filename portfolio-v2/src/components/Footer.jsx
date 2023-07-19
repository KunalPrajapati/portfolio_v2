import React from 'react';
import { AiOutlineCopyright, AiFillLinkedin, AiOutlineGithub, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className='w-full bg-[#2c2c6c] h-full p-7'>
      <div className='flex flex-col'>
        <Link
          to='HeaderSection'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className='mx-auto text-white hover:text-[#4db5ff] hover:transition ease-in-out duration-1000 text-2xl font-bold'
        >
          Kunal Prajapati
        </Link>
        <div className='ContactMeOptions mx-auto p-10 flex gap-6 text-lg text-white'>
          <Link
            to='HeaderSection'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='hover:text-[#4db5ff] hover:transition ease-in-out duration-1000'
          >
            Home
          </Link>
          <Link
            to='AboutSection'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='hover:text-[#4db5ff] hover:transition ease-in-out duration-1000'
          >
            About
          </Link>
          <Link
            to='ExperienceSection'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='hover:text-[#4db5ff] hover:transition ease-in-out duration-1000'
          >
            Experience
          </Link>
          <Link
            to='PortfolioSection'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='hover:text-[#4db5ff] hover:transition ease-in-out duration-1000'
          >
            Portfolio
          </Link>
          <Link
            to='ContactMeClass'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className='hover:text-[#4db5ff] hover:transition ease-in-out duration-1000'
          >
            Contact Me
          </Link>
        </div>
        <div className='flex justify-center gap-5'>
          <a href='https://www.linkedin.com/in/kunal-prajapati01/' rel="noreferrer"target='__blank' className='text-[#e0e1e2] font-bold p-1 border-solid 
          bg-[#4653c8] border-2 border-[#5758BB] rounded-lg hover:bg-white 
          hover:text-[#373764] hover:border-white hover:transition ease-in duration-200'>
            <AiFillLinkedin />
          </a>
          <a href='https://github.com/KunalPrajapati' target='__blank' rel="noreferrer"className='text-[#e0e1e2] font-bold p-1 border-solid 
          bg-[#4653c8] border-2 border-[#5758BB] rounded-lg hover:bg-white 
          hover:text-[#373764] hover:border-white hover:transition ease-in duration-200'>
            <AiOutlineGithub />
          </a>
          <a href='https://twitter.com/kunalprajapati_' target='__blank' rel="noreferrer"className='text-[#e0e1e2] font-bold p-1 border-solid 
          bg-[#4653c8] border-2 border-[#5758BB] rounded-lg hover:bg-white 
          hover:text-[#373764] hover:border-white hover:transition ease-in duration-200'>
            <AiOutlineTwitter />
          </a>
          <a href='https://www.instagram.com/kunallprajapati' rel="noreferrer"target='__blank' className='text-[#e0e1e2] font-bold p-1 border-solid 
          bg-[#4653c8] border-2 border-[#5758BB] rounded-lg hover:bg-white 
          hover:text-[#373764] hover:border-white hover:transition ease-in duration-200'>
            <AiOutlineInstagram />
          </a>
        </div>
        <div className='text-sm text-white mx-auto flex gap-1 pt-5'>
          <AiOutlineCopyright className='mt-[3px]' />
          <p>Kunal Prajapati. All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
