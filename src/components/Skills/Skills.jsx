import React, { useContext } from 'react'
import './Skills.css'
import Html from '../../assets/skills/html.png';
import Css from '../../assets/skills/css.png';
import Javascript from '../../assets/skills/javascript.png';
import ReactImg from '../../assets/skills/react.png';
import Tailwind from '../../assets/skills/tailwind.png';
import Github from '../../assets/skills/github1.png';
import Firebase from '../../assets/skills/firebase.png';
import NextJS from '../../assets/skills/nextjs.png'
import AWS from '../../assets/skills/aws.png';
import Django from '../../assets/skills/django.png'
import Python from '../../assets/skills/python.png'
import Laravel from '../../assets/skills/laravel.png'
import Figma from '../../assets/skills/figma.png'
import Node from '../../assets/skills/node.png'
import Mongo from '../../assets/skills/mongo.png'
import Solidity from '../../assets/skills/Solidity.png'
import { themeContext } from '../../Context';

const Skills = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id='Skills' className='wsx'>
        <div className="blur" style={{background: 'rgb(238 210 255)', top: '185rem', width:'23rem', height:'15rem', left:'42rem'}}></div>
        <div className="blur" style={{background: 'rgb(238 210 255)', top: '155rem', width:'23rem', height:'15rem', left:'16rem'}}></div>
        <div className="blur" style={{background: '#C1F5FF', top: '180rem', width:'26rem', height:'18rem', left:'-9rem'}}></div>
        <div className="blur" style={{background: '#C1F5FF', top: '140rem', width:'26rem', height:'18rem', left:'-9rem'}}></div>
      <div className='zxc'>
        <p className='qwe' style={{color: darkMode? 'white': ''}}>
          Skills
        </p>
        <h2 className='py4'>What I Can Do</h2>
        <div className='asd'>
          <div className='psp' style = {darkMode? {boxShadow:'0px 0px 10px 0px rgba(255,255,255,0.75)'} : {boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75)'}}>
            <div className='dsa'>
              <div className='md'>
                <img src={Html} width='64px' height='64px' alt='/' />
              </div>
              <div className='fdm'>
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className='psp' style = {darkMode? {boxShadow:'0px 0px 10px 0px rgba(255,255,255,0.75)'} : {boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75)'}}>
            <div className='dsa'>
              <div className='md'>
                <img src={Css} width='64px' height='64px' alt='/' />
              </div>
              <div className='fdm'>
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className='psp' style = {darkMode? {boxShadow:'0px 0px 10px 0px rgba(255,255,255,0.75)'} : {boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75)'}}>
            <div className='dsa'>
              <div className='md'>
                <img src={Javascript} width='64px' height='64px' alt='/' />
              </div>
              <div className='fdm'>
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='psp' style = {darkMode? {boxShadow:'0px 0px 10px 0px rgba(255,255,255,0.75)'} : {boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75)'}}>
            <div className='dsa'>
              <div className='md'>
                <img src={ReactImg} width='64px' height='64px' alt='/' />
              </div>
              <div className='fdm'>
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className='psp' style = {darkMode? {boxShadow:'0px 0px 10px 0px rgba(255,255,255,0.75)'} : {boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75)'}}>
            <div className='dsa'>
              <div className='md'>
                <img src={Tailwind} width='64px' height='64px' alt='/' />
              </div>
              <div className='fdm'>
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className='psp' style = {darkMode? {boxShadow:'0px 0px 10px 0px rgba(255,255,255,0.75)'} : {boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75)'}}>
            <div className='dsa'>
              <div className='md'>
                <img src={Django} width='64px' height='64px' alt='/' />
              </div>
              <div className='fdm'>
                <h3>Django</h3>
              </div>
            </div>
          </div>
          <div className='psp' style = {darkMode? {boxShadow:'0px 0px 10px 0px rgba(255,255,255,0.75)'} : {boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75)'}}>
            <div className='dsa'>
              <div className='md'>
                <img src={Laravel} width='64px' height='64px' alt='/' />
              </div>
              <div className='fdm'>
                <h3>Laravel</h3>
              </div>
            </div>
          </div>
          <div className='psp' style = {darkMode? {boxShadow:'0px 0px 10px 0px rgba(255,255,255,0.75)'} : {boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75)'}}>
            <div className='dsa'>
              <div className='md'>
                <img src={Python} width='64px' height='64px' alt='/' />
              </div>
              <div className='fdm'>
                <h3>Python</h3>
              </div>
            </div>
          </div>
          <div className='psp' style = {darkMode? {boxShadow:'0px 0px 10px 0px rgba(255,255,255,0.75)'} : {boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75)'}}>
            <div className='dsa'>
              <div className='md'>
                <img src={Figma} width='64px' height='64px' alt='/' />
              </div>
              <div className='fdm'>
                <h3>Figma</h3>
              </div>
            </div>
          </div>
          <div className='psp' style = {darkMode? {boxShadow:'0px 0px 10px 0px rgba(255,255,255,0.75)'} : {boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75)'}}>
            <div className='dsa'>
              <div className='md'>
                <img src={Firebase} width='64px' height='64px' alt='/' />
              </div>
              <div className='fdm'>
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className='psp' style = {darkMode? {boxShadow:'0px 0px 10px 0px rgba(255,255,255,0.75)'} : {boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75)'}}>
            <div className='dsa'>
              <div className='md'>
                <img src={NextJS} width='64px' height='64px' alt='/' />
              </div>
              <div className='fdm'>
                <h3>NextJs</h3>
              </div>
            </div>
          </div>
          <div className='psp' style = {darkMode? {boxShadow:'0px 0px 10px 0px rgba(255,255,255,0.75)'} : {boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75)'}}>
            <div className='dsa'>
              <div className='md'>
                <img src={Github} width='64px' height='64px' alt='/' />
              </div>
              <div className='fdm'>
                <h3>GitHub</h3>
              </div>
            </div>
          </div>
          <div className='psp' style = {darkMode? {boxShadow:'0px 0px 10px 0px rgba(255,255,255,0.75)'} : {boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75)'}}>
            <div className='dsa'>
              <div className='md'>
                <img src={AWS} width='64px' height='64px' alt='/' />
              </div>
              <div className='fdm'>
                <h3>Amazon Web Services</h3>
              </div>
            </div>
          </div>
          <div className='psp' style = {darkMode? {boxShadow:'0px 0px 10px 0px rgba(255,255,255,0.75)'} : {boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75)'}}>
            <div className='dsa'>
              <div className='md'>
                <img src={Solidity} width='64px' height='64px' alt='/' />
              </div>
              <div className='fdm'>
                <h3>Solidity</h3>
              </div>
            </div>
          </div>
          <div className='psp' style = {darkMode? {boxShadow:'0px 0px 10px 0px rgba(255,255,255,0.75)'} : {boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75)'}}>
            <div className='dsa'>
              <div className='md'>
                <img src={Node} width='64px' height='64px' alt='/' />
              </div>
              <div className='fdm'>
                <h3>NodeJS</h3>
              </div>
            </div>
          </div>
          <div className='psp' style = {darkMode? {boxShadow:'0px 0px 10px 0px rgba(255,255,255,0.75)'} : {boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75)'}}>
            <div className='dsa'>
              <div className='md'>
                <img src={Mongo} width='64px' height='64px' alt='/' />
              </div>
              <div className='fdm'>
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Skills;