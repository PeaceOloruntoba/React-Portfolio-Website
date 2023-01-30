import React from 'react'
import Toggle from '../Toggle/Toggle'
import navlogo from '../../assets/navLogog.png'
import './Navbar.css'
import { Link } from 'react-scroll'

function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <img src={navlogo} alt="" width='85' height='85' />
            <Toggle />
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                        <li>Home</li>
                    </Link>
                    <Link spy={true} to='About' smooth={true}>
                        <li>About</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true}>
                        <li>Services</li>
                    </Link>
                    <Link spy={true} to='Skills' smooth={true}>
                        <li>Skills</li>
                    </Link>
                    <Link spy={true} to='Projects' smooth={true}>
                        <li>Projects</li>
                    </Link>
                    <Link spy={true} to='Contact' smooth={true}>
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
        </div>
    </div>
  )
}


export default Navbar