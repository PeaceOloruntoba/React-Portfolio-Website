import React, { useContext } from 'react'
import './Projects.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper'
import property from '../../assets/projects/property.jpg'
import sidebar from '../../assets/projects/sidebar.png'
import ecommerce from '../../assets/projects/ecommerce.png'
import twitch from '../../assets/projects/twitch.jpg'
import hoc from '../../assets/projects/hoc.png'
import cryptom from '../../assets/projects/crypto.jpg'
import music from '../../assets/projects/musicapp.png'
import netflix from '../../assets/projects/netflix.jpg'
import 'swiper/css'
import 'swiper/css/pagination'
import {themeContext} from '../../Context'

const Projects = () => {
    const projects = [
        {
            img: property,
        },
        {
            img: sidebar,
        },
        {
            img: ecommerce,
        },
        {
            img: twitch,
        },
        {
            img: hoc,
        },
        {
            img: cryptom,
        },
        {
            img: music,
        },
        {
            img: netflix,
        },
    ]
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="wrapper" id='Projects'>
        <div className="heading">
            <span style={{color: darkMode? 'white': ''}}>Recent Projects</span> <br />
            <span>Portfolio</span>
         </div>
        <Swiper modules={[Pagination]} slidesPerView={1} pagination={{clickable: true}}>
            {projects.map((projects, index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="proj">
                            <img src={projects.img} alt="" />
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Projects