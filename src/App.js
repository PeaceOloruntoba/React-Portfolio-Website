import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from './components/About/About';
import Services from './components/Services/Services';
import Works from './components/Works/Works';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Testimonial from './components/Testimonials/Testimonial'
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import { useContext } from 'react';
import { themeContext } from './Context';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='App' style={{background : darkMode? 'black': '', color : darkMode? 'white': '',}}>
      <Navbar />
      <Intro />
      <About />
      <Services />
      <Works />
      <Skills />
      <Experience />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
