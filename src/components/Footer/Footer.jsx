import React from 'react'
import './Footer.css'
import Wave from '../../assets/wave.png'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import Instagram from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import { FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: '100%'}} />
        <div className="f-content">
            <span>edgetech224@gmail.com</span>
            <div className="f-icons">
              <a href="https://www.github.com/PeaceOloruntoba">
                <Github color='white' size='3rem' />
              </a>
              <a href="https://www.instagram.com/peaceegdetech">
                <Instagram color='white' size='3rem' />
              </a>
              <a href="https://www.linkedin.com/in/peaceoloruntoba">
                <FaLinkedinIn color='white' size='3rem' />
              </a>
              <a href="https://web.facebook.com/people/Peace-Oloruntoba/100089255262028/">
                <Facebook color='white' size='3rem' />
              </a>
              <a href="https://twitter.com/PeaceEdgeTech">
                <Twitter color='white' size='3rem' />
              </a>
            </div>
        <div className='flex justify-center py-12'>
          <a href='/'>
            <div className='bactop rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
              <HiOutlineChevronDoubleUp color='white' size={30} />
            </div>
          </a>
        </div>
        </div>
    </div>
  )
}

export default Footer