import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/kunalprajapati01/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/KunalPrajapati" target="_blank"><BsGithub/></a>
        <a href="https://twitter.com/kunalprajapati01" target="_blank"><BsTwitter/></a>
        {/* <a href="https://leetcode.com/onkarojha/" target="_blank"><SiLeetcode/></a> */}
    </div>
  )
}

export default HeaderSocials