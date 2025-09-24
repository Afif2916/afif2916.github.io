import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Logo from './assets/logo.png'
import Image from './assets/homepage.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import ProjectCard from './components/ProjectCard'
import ArticleCard from './components/ArticleCard'
import Footer from './components/Footer'
import WorkExperience from './components/WorksExperience'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Project from './pages/Project'
import Articles from './pages/Articles'

function App() {
  const [stayLogo, setStayLogo] = useState(false)
  const [logoSize, setLogoSize] = useState(80)
  const [oldLogoSize, setOldLogoSize] = useState(80)
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let scroll = Math.round(window.pageYOffset, 2);
      let newLogoSize = 80 - (scroll * 4) / 10;

      if (newLogoSize < oldLogoSize) {
        if (newLogoSize > 40) {
          setLogoSize(newLogoSize);
          setOldLogoSize(newLogoSize);
          setStayLogo(false);
        } else {
          setStayLogo(true);
        }
      } else {
        setLogoSize(newLogoSize);
        setStayLogo(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [logoSize, oldLogoSize]);

  const logoStyle = {
    display: "flex",
    position: stayLogo ? "fixed" : "relative",
    top: stayLogo ? "3vh" : "auto",
    zIndex: 999,
    border: stayLogo ? "1px solid white" : "none",
    borderRadius: stayLogo ? "50%" : "none",
    boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
    width: `${logoSize}px`,
    height: `${logoSize}px`
  };

  return (
    <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/projects' element={<Project/>} />
      <Route path='/articles' element={<Articles/>} />

    </Routes>
  )
}

export default App
