import React from 'react';
import {AiOutlineMail} from 'react-icons/ai';
import {BsWhatsapp} from 'react-icons/bs';

const ContactMe = () => {
  return (
    <div className='ContactMeClass flex flex-col items-center mb-10' id='ContactMeClass'>
       <p className='font-bold text-xl font-sans text-white text-center'
            >Get In Touch</p>
        <h1 className='pt-3 font-bold text-white text-3xl text-center'
            >Contect Me ✆</h1>

        <div className='flex flex-wrap gap-10'>
            <div className='flex flex-col items-center p-5 mt-10 mb-10 w-[273px] bg-[#2c2c6c] rounded-lg border border-solid border-[#5758BB] hover:bg-transparent      hover:transition ease-in-out duration-1000 font-bold'>
            <AiOutlineMail className='h-[25px] w-[25px] text-white'/>
            <p className='text-white'
            >Email</p>
            <p className='text-gray-400'>kunalprajpati@gmail.com</p>
            <a href="mailto:kunalprajpati@gmail.com" target="_blank" rel="noreferrer"className='text-white hover:text-[#4db5ff]'>Send A Message</a>
            </div>

            <div className='flex flex-col items-center p-5 mt-10 mb-10 w-[273px] bg-[#2c2c6c] rounded-lg border border-solid border-[#5758BB] hover:bg-transparent hover:transition ease-in-out duration-1000 font-bold'>
            <BsWhatsapp className='h-[25px] w-[25px] text-white'/>
            <p className='text-white'
            >Whatsapp</p>
            <p className='text-gray-400'>Click Below to Msg</p>
            <a href="https://wa.me/+918076710949" target="_blank" rel="noreferrer"className='text-white hover:text-[#4db5ff]'>Send A Message</a>
            </div>
        </div>
    </div>
  )
}

export default ContactMe
