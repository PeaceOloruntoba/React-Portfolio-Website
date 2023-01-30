import React, { useContext } from 'react'
import './Services.css'
import heart from "../../assets/heartemoji.png"
import glass from "../../assets/glasses.png"
import humble from "../../assets/humble.png"
import Card from '../Card/Card'
import resume from './Peace_Oloruntoba_CV.pdf'
import { motion } from 'framer-motion'
import { themeContext } from '../../Context'

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = {duration:2, type:'spring'}
  return (
    <div className="services" id='Services'>
        <div className="awesome">
            <p className='pip1' style={{color: darkMode? 'white': ''}}>My Awesome</p>
            <p className='pip2'>Services</p>
            <p className='pip3'>As a software developer, I provide a wide range of services to help<br/>clients create and improve their digital products.<br/>This services include, but not limited to:</p>
            <a href={resume} download>
              <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>
        <div className="cards">
            <motion.div initial={{left:'25rem'}} whileInView={{left:'20rem'}} transition={transition} className="div" style={{left: '32rem'}}>
              <Card emoji={heart} heading={'Design'} detail={'Figma, Canva, Photoshop, Adobe, AdobeXD'} />
            </motion.div>
            <motion.div initial={{left:'4rem'}} whileInView={{left:'9rem', top:'8rem'}} transition={transition} className="div" style={{top: '8rem', left: '4rem'}}>
              <Card emoji={glass} heading={'Development'} detail={'HTML, CSS, JavaScript, Python, PHP, Golang, (with there frameworks)'} />
            </motion.div>
            <motion.div initial={{left:'25rem'}} whileInView={{left:'17rem', top:'19rem'}} transition={transition} className="div" style={{top: '19rem',left: '25rem'}}>
              <Card emoji={humble} heading={'Tutoring'} detail={'You can learn from us at Edge Tech, we train zeros to become heros'} />
            </motion.div>
            <div className="blur s-blur2" style={{background: 'var(--purple)'}}></div>
        </div>
    </div>
  )
}

export default Services