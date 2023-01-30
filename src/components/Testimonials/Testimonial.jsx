import React from 'react'
import './Testimonial.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css/pagination'
import 'swiper/css'
import profile1 from '../../assets/profile1.jpg'
import profile2 from '../../assets/profile2.jpg'
import profile3 from '../../assets/profile3.jpg'
import profile4 from '../../assets/profile4.jpg'

const Testimonial = () => {
    const clients = [
        {
            img: profile1,
            review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos placeat culpa nemo, vero debitis incidunt quae. Quos rem mollitia illum laboriosam quidem id ipsa quasi? Quis quam excepturi facilis dicta.'
        },
        {
            img: profile2,
            review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos placeat culpa nemo, vero debitis incidunt quae. Quos rem mollitia illum laboriosam quidem id ipsa quasi? Quis quam excepturi facilis dicta.'
        },
        {
            img: profile3,
            review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos placeat culpa nemo, vero debitis incidunt quae. Quos rem mollitia illum laboriosam quidem id ipsa quasi? Quis quam excepturi facilis dicta.'
        },
        {
            img: profile4,
            review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos placeat culpa nemo, vero debitis incidunt quae. Quos rem mollitia illum laboriosam quidem id ipsa quasi? Quis quam excepturi facilis dicta.'
        },
    ]
  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className="t-heading">
            <span>Clients always get </span>
            <span>Exceptional Work </span>
            <span>from me...</span>
            <div className="blur t-blur1" style={{background: 'var(--purple)'}}></div>
            <div className="blur t-blur2" style={{background: 'skyblue'}}></div>
        </div>
        <Swiper modules={[Pagination]} slidesPerView={1} pagination={{clickable: true}}>
            {clients.map((client, index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={client.img} alt="" />
                            <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Testimonial