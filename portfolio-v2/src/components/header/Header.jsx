import React from 'react'
import './header.css'
import CTA from './CTA'

import ME from '../../assets/withoutBg.png'
import HeaderSocials from './HeaderSocials'
import Typewriter from 'typewriter-effect'
const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kunal Prajapati</h1>
        {/* <h5 className="text-light">Front-end Developer</h5> */}
        <h5>
        <Typewriter
              options={{
                strings: ["Front-end Developer", "React-Native Developer", "Mobile App Developer" , "Stock Market Trader", "Traveller"],
                autoStart: true,
                loop: true,
                delay: 100,
              }}
            />
        </h5>
        
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me"></img>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
        


      </div>
    </header>
  )
}

export default header