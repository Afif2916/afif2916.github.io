import { useState, useEffect } from "react";
import { motion } from "framer-motion"; // ⬅️ tambahin ini
import "../App.css";
import Navbar from "../components/Navbar";
import Logo from "../assets/logoapip.png";
import Image from "../assets/profilapip.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import ProjectCard from "../components/ProjectCard";
import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";
import WorkExperience from "../components/WorksExperience";
import TechstackCard from "../components/TechstackCard";
import projects from "../data/projects";
import useSEO from "../utils/useSEO";
import { ReactTyped } from "react-typed";

import SEO from "../data/seo";


// Variants animasi reusable
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

function Homepage() {
  const [stayLogo, setStayLogo] = useState(false);
  const [logoSize, setLogoSize] = useState(80);
  const [oldLogoSize, setOldLogoSize] = useState(80);

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
    height: `${logoSize}px`,
  };

  const currentSEO = SEO.find((item) => item.page === "home");

  useSEO({
    title: "Afif Portofolio",
    description: currentSEO.description,
    keywords: currentSEO.keywords,
  });
 
  return (
    
    <div className="bg-white relative">
      <Navbar />
      <div className="px-4">
        {/* Logo Section */}
        <div className="hidden md:flex justify-start items-center">
          <div style={logoStyle}>
            <img
              src={Logo}
              alt="Logo"
              className="rounded-full block m-0 p-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Hero Section */}
        <motion.div
          className="relative pt-5 mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
        >
          {/* Blob / Background Decoration */}
          <div className="absolute top-0 -left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-20 -right-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

          <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row md:justify-around items-center gap-6 mt-5">
            {/* Text Area */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-5xl">
              <div className="text-[#27272a] font-bold leading-tight">
      <ReactTyped
        strings={[
          "Hallo, Nama Saya Afif.",
          "Saya adalah seorang Fullstack Developer.",
        ]}
        typeSpeed={50}    // kecepatan mengetik
        backSpeed={30}    // kecepatan menghapus
        loop={true}      // false = tidak looping
        showCursor={true} // tampilkan cursor berkedip
        className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl"
      />
    </div>

              <div className="text-[#27272a] text-sm sm:text-base lg:text-lg pt-3 mt-6 leading-relaxed">
                Saya adalah seorang Backend Developer dengan keahlian di Node.js.
                Saya berpengalaman membangun aplikasi web yang skalabel, aman, dan andal menggunakan berbagai framework serta teknologi.
                Saya senang memecahkan masalah yang kompleks dan terus belajar keterampilan baru.
                Saya juga memiliki passion dalam menulis kode berkualitas tinggi yang mengikuti best practice serta standar industri.
                Saya selalu terbuka terhadap tantangan baru dan peluang untuk berkembang sebagai seorang developer.
              </div>

              {/* Social Media */}
              <div className="flex justify-center md:justify-start pt-6 gap-6">
                <a>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="hover:text-amber-300"
                    size="2x"
                  />
                </a>
                <a>
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="hover:text-amber-300"
                    size="2x"
                  />
                </a>
                <a>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="hover:text-amber-300"
                    size="2x"
                  />
                </a>
                <a>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="hover:text-amber-300"
                    size="2x"
                  />
                </a>
              </div>
            </div>

            {/* Image Area */}
            <div className="w-full md:w-auto flex justify-center">
              <motion.div
                className="w-60 sm:w-72 md:w-80 lg:w-[370px] aspect-square"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="overflow-hidden rounded-[20px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)] relative z-10">
                  <img
                    src={Image}
                    alt="Homepage"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="absolute top-150 -left-40 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-2xl  opacity-30 animate-blob"></div>
        <div className="hidden sm:block absolute top-220 -right-40 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>

        {/* Project Section */}
        <motion.div
            className="pt-5 mb-5 px-5 relative overflow-hidden "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={fadeInUp}
            >
            {/* Decorative Blobs */}
            

            <div className="max-w-7xl mx-auto pt-[60px] relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-6">
                My Projects
                </h2>
                <p className="text-center text-gray-500 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
                Beberapa project yang sudah saya kerjakan dengan fokus pada desain
                modern, clean, dan fungsional.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {projects.map((project, i) => (
        <motion.div
          key={i}
          className="transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ProjectCard
            name={project.name}
            description={project.description}
            icon={project.icon}
            link={project.link}
          />
        </motion.div>
      ))}
    </div>
            </div>
            </motion.div>
        
        <div className="absolute top-340 -left-40 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-2xl  opacity-30 animate-blob"></div>
        <div className=" absolute top-450 -right-40 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
        {/* Article Section */}
        <motion.div
          className="pt-5 mb-5 px-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
        >
          <div className="max-w-7xl mx-auto pt-[60px]">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
              Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <ArticleCard />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Work Experience and TechStack */}
        <motion.div
          className="pt-[60px] mb-[60px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-5">
            <WorkExperience />
            <TechstackCard />
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="pt-[60px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
        >
          <Footer />
        </motion.div>
      </div>
    </div>
  );
}

export default Homepage;
