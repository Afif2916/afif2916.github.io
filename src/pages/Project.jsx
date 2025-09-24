import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { faTwitter, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from '../assets/homepage.jpg'
import { useState, useEffect } from 'react';
import Logo from '../assets/logoapip.png'
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';
import { motion } from "framer-motion";
import useSEO from '../utils/useSEO';
import SEO from "../data/seo";



// Variants untuk parent grid (stagger effect)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // jeda antar card
    },
  },
};

// Variants untuk tiap card
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};



export default function Project(){

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

      const currentSEO = SEO.find((item) => item.page === "projects");

      useSEO({
                  title: "Afif Portofolio",
                  description: currentSEO.description,
                  keywords: currentSEO.keywords,
              });
    return (
    <div className="bg-white relative">
      <Navbar />
      <div className="px-4">
        {/* Logo Area */}
        <div className="hidden md:flex justify-start items-center">
          <div style={logoStyle}>
            <img
              src={Logo}
              alt="Logo"
              className="rounded-full block m-0 p-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="pt-5 mb-5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-around items-center gap-5 mt-5">
            {/* Text Area */}
            <motion.div
              className="flex flex-col items-center md:items-start text-center md:text-left max-w-5xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="text-[#27272a] text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
                Things I’ve made trying to put my dent in the universe.
              </div>

              <motion.div
                className="text-[#27272a] text-sm sm:text-base lg:text-lg pt-3 mt-6 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                I've worked on a variety of projects over the years and I'm
                proud of the progress I've made. Many of these projects are
                open-source and available for others to explore and contribute
                to. If you're interested in any of the projects I've worked on,
                please feel free to check out the code and suggest any
                improvements or enhancements you might have in mind.
                Collaborating with others is a great way to learn and grow, and
                I'm always open to new ideas and feedback.
              </motion.div>
            </motion.div>

            {/* Image Area */}
            <motion.div
              className="w-full md:w-auto flex justify-center ml-0 md:ml-25"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="w-60 sm:w-72 md:w-80 lg:w-[370px] aspect-square">
                <div className="overflow-hidden rounded-[20px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)]">
                  <motion.img
                    src={Image}
                    alt="About"
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Projects Grid with animation */}
          <div className="pt-5 mb-5 px-5">
            <motion.div
              className="max-w-7xl mx-auto pt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <ProjectCard
                    name={project.name}
                    description={project.description}
                    icon={project.icon}
                    link={project.link}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="pt-[60px]">
        <Footer />
      </div>
    </div>
  );
}