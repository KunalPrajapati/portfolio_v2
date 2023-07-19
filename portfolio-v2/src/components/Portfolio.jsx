import React from 'react';
import demoVideo from '../assets/projects/demoVideo.mp4';
import weatherApp from '../assets/projects/Weather.png';
import razorPay from '../assets/projects/razorPay.png';

const Portfolio = () => {
  return (
    <div id='PortfolioSection'>
        <div>
            <p className='pt-20 font-bold text-xl font-sans text-white text-center'
            >My Recent Work</p>
            <h1 className='pt-3 font-bold text-white text-3xl text-center'
            >PORTFOLIO</h1>
            <div className="projects pt-16 pb-32 flex justify-center flex-wrap gap-5">
                <div className="project1 h-[364px] w-[324px] 
                bg-[#2c2c6c] rounded-lg border border-solid flex item-center flex-col
                 border-[#5758BB] hover:bg-transparent hover:transition ease-in-out duration-1000 p-5">
                    <video src={demoVideo} className='GifGenDemoVideo' 
                    ></video>
                    <h2 className='pl-4 pt-2 font-bold text-white text-xl text-left
                    '>Gif Generator Extension</h2>
                    <a className="github w-[94px] h-[53px]  rounded-lg border border-solid font-bold text-white mt-2
                    border-[#4db5ff] hover:bg-white hover:text-[#5758BB] hover:transition ease-in-out duration-1000 flex justify-center items-center
                    " href='https://github.com/KunalPrajapati/GifGenerator-' target='__blank' rel="noreferrer"
                        >Github</a>
                </div>
                <div className="project1 h-[364px] w-[324px] 
                bg-[#2c2c6c] rounded-lg border border-solid flex item-center flex-col
                 border-[#5758BB] hover:bg-transparent hover:transition ease-in-out duration-1000 p-5">
                    <img src={weatherApp} alt='weatherApp img' 
                    className='rounded-lg' 
                    />
                    <h2 className='pl-4 pt-20 font-bold text-white text-xl text-left
                    '>Weather App</h2>
                    <div className='flex gap-5'>
                        <a className="github w-[94px] h-[53px]  rounded-lg border border-solid font-bold text-white mt-2
                        border-[#4db5ff;] hover:bg-white hover:text-[#5758BB] hover:transition ease-in-out duration-1000 flex justify-center items-center
                        " href='https://github.com/KunalPrajapati/weatherApp' target='__blank' rel="noreferrer"
                            >Github</a>
                        <a className="github w-[94px] h-[53px]  rounded-lg border border-solid font-bold text-white mt-2
                        border-[#4db5ff;] hover:bg-white hover:text-[#5758BB] hover:transition ease-in-out duration-1000 flex justify-center items-center
                        " href='https://kunals-weatherapp.netlify.app/' target='__blank' rel="noreferrer"
                        >Live</a>
                    </div>
                </div>
                <div className="project1 h-[364px] w-[324px] 
                bg-[#2c2c6c] rounded-lg border border-solid flex item-center flex-col
                 border-[#5758BB] hover:bg-transparent hover:transition ease-in-out duration-1000 p-5">
                    <img src={razorPay} className='rounded-lg' alt='razorpay img'
                    />
                    <h2 className='pl-4 pt-20 font-bold text-white text-xl text-left
                    '>RazorPay Website Clone</h2>
                    <div className='flex gap-5'>
                        <a className="github w-[94px] h-[53px]  rounded-lg border border-solid font-bold text-white mt-2
                        border-[#4db5ff;] hover:bg-white hover:text-[#5758BB] hover:transition ease-in-out duration-1000 flex justify-center items-center
                        " href='https://github.com/KunalPrajapati/razorPayClone' target='__blank' rel="noreferrer"
                            >Github</a>
                        <a className="github w-[94px] h-[53px]  rounded-lg border border-solid font-bold text-white mt-2
                        border-[#4db5ff;] hover:bg-white hover:text-[#5758BB] hover:transition ease-in-out duration-1000 flex justify-center items-center
                        " href='https://razorpayclonenew.netlify.app/' target='__blank' rel="noreferrer"
                        >Live</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio
