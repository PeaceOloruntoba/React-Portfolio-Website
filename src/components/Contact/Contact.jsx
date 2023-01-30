import './Contact.css'
import emailjs from '@emailjs/browser'
import React, {useState, useRef, useContext} from 'react'
import ContactImg from '../../assets/contact.png'
import { themeContext } from '../../Context'

const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef()
    const [done, setDone] = useState(false)
    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_6adsfun', 'template_8h6sjbo', form.current, 'bz8EazjXjhswwveoq')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div id='Contact' className='contact-form'>
        <div className='contat'>
            <p className='head'>Contact</p>
            <div className='divi'>
                {/* Left */}
                <div className='con-left'>
                    <div className='c-intro'>
                        <div>
                            <img className='c-intro-img' src={ContactImg} alt='/' />
                        </div>
                        <div>
                            <h2 className='py-2'>Peace Oloruntoba</h2>
                            <p>Full-Stack Developer</p>
                            <p className='py-4'>I am available for freelance or remote positions. Contact me and let&apos;s talk.</p>
                        </div>
                    </div>
                </div>
                {/* Right */}
                <div className='.c-right'>
                    <div className='rightme'>
                        <p className='serif' style={{color: darkMode? 'white': ''}}>Get in Touch:</p>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='pea'>
                                <div className='indi'>
                                    <label className='label'>Name:</label>
                                    <input className='bnm flex' type='text' name='name' />
                                </div>
                                <div className='indi'>
                                    <label className='label'>Phone Number:</label>
                                    <input className='bnm flex' type='text' name='phone' />
                                </div>
                            </div>
                            <div className='indip'>
                                <label className='label'>Email:</label>
                                <input className='bnm flex' type='email' name='email' />
                            </div>
                            <div className='indip'>
                                <label className='label'>Subject:</label>
                                <input className='bnm flex' type='text' name='subject' />
                            </div>
                            <div className='indip'>
                                <label className='label'>Message:</label>
                                <textarea className='bnm' name='message'></textarea>
                            </div>
                            <button className='button c-btn'>Send Message</button>
                            <div className="blur c-blur1" style={{background: 'var(--purple)'}}></div>
                            <span>{done && "Thanks for contacting me!"}</span>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact