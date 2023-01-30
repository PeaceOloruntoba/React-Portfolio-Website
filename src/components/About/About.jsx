import './About.css'
import {Link} from 'react-scroll'
import React, { useContext } from 'react'
import aboutimg from '../../assets/about.png'
import {themeContext} from '../../Context'

const About = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='cvdf' id='About'>
        <div className="blur" style={{background: 'rgb(238 210 255)', top: '47rem', width:'26rem', height:'18rem', left:'2rem'}}></div>
        <div className="blur" style={{background: 'rgb(238 210 255)', top: '69rem', width:'23rem', height:'15rem', left:'44rem'}}></div>
        <div className="blur" style={{background: '#C1F5FF', top: '75rem', width:'26rem', height:'18rem', left:'-13rem'}}></div>
        <div className='abut'>
            <div className='asdf'>
                <p className='cdr'>About</p>
                <h2 className='ds' style={{color: darkMode? 'white': ''}}>Who I Am</h2>
                <p className='pip'>I am not your normal developer</p>
                <p className='pip'>As a software developer, I am passionate about using technology to solve complex problems and create innovative solutions. I have several years of experience in developing software using a variety of programming languages, including Python, PHP, Golang, and JavaScript.</p>
                <p className='pip'>I am well-versed in various software development methodologies, including Agile and Scrum, and have experience working in both small teams and large-scale projects. I also have experience in web development, and familiar with front-end technologies like HTML, CSS, and JavaScript, as well as back-end technologies like Node.js, Flask, Django, Laravel.</p>
                <p className='pip'>I am able to quickly learn new technologies and programming languages and am always eager to learn and grow as a developer. I am an effective communicator and enjoy working closely with other developers, designers, and stakeholders to deliver high-quality software.</p>
                <Link href='Projects'>
                  <p className='fdsa'>Check out some of my latest projects.</p>
                </Link>
            </div>
            <div className='image'>
                <img src={aboutimg} alt="/" width='480' height='480' />
            </div>
        </div>
    </div>
  )
}

export default About