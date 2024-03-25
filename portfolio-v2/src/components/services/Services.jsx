import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi';
const services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* <article className="service">
          <div className="service__head">
            <h3>Graphic Designing</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Logo Design</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Poster Design</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Brochure Designs</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Hands on experience in Canva Pro and PhotoShop</p>
            </li>
          </ul>
          
        </article> */}



        <article className="service">
          <div className="service__head">
            <h3>Website Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experienced guy who can build your website</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Served more than 4+ clients across the globe</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Experienced in React Js and Tailwind Css</p>
            </li>

          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Hybrid Mobile App Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experienced guy who can build your app for <span className="font-bold">Android and IOS</span></p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Served more than 4+ clients across the globe</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Experienced in React Native</p>
            </li>
          </ul>
        </article>



        {/* <article className="service">
          <div className="service__head">
            <h3>Community Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experienced VP-Growth with a 
demonstrated history of working in the education management industry.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Skilled in Microsoft Excel, Management, Engineering, Communication, and Administrative Assistance. </p>
            </li>

           
          </ul>
          
        </article> */}
      </div>
    </section>
  )
}

export default services