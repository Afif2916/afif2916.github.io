import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  faTwitter,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
//import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "../assets/profilapip.png";
import { useState, useEffect } from "react";
import Logo from "../assets/logoapip.png";
import { motion } from "framer-motion";
import SEO from "../data/seo";
import useSEO from "../utils/useSEO";
import { GiMailbox } from "react-icons/gi";

export default function About() {
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

  const currentSEO = SEO.find((item) => item.page === "about");

  useSEO({
    title: "Afif Portofolio",
    description: currentSEO.description,
    keywords: currentSEO.keywords,
  });

  return (
    <div className="bg-white relative dark:bg-gray-800">
      <Navbar />

      <div className="px-4">
        {/* Floating logo */}
        <div className="hidden md:flex justify-start items-center">
          <div style={logoStyle}>
            <img
              src={Logo}
              alt="Logo"
              className="rounded-full block m-0 p-0 w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="absolute top-12 left-6 w-24 h-24 bg-amber-400 rounded-full opacity-80 animate-pulse hidden md:flex"></div>

            {/* Kotak panjang */}
            <div className="absolute top-1/3 right-8 w-3 h-32 bg-cyan-400 rounded-full rotate-12 opacity-70 hidden md:flex"></div>

            {/* Segitiga pakai clip-path */}
            <div
                className="hidden md:flex absolute bottom-16 left-10 w-0 h-0 border-l-[40px] border-r-[40px] border-b-[70px] border-transparent border-b-pink-500 opacity-80"
            ></div>

            {/* Kotak tipis miring */}
            <div className="hidden md:flex absolute bottom-24 right-1/4 w-32 h-6 bg-purple-500 rotate-6 opacity-70"></div>

            {/* Garis tipis dekorasi */}
            <div className="hidden md:flex absolute top-1/3 left-1/2 w-40 h-[2px] bg-gray-400 opacity-40 rotate-45"></div>
          
          <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row md:justify-around items-center gap-6 mt-5"></div>

        {/* Content */}
        <div className="pt-5 mb-5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-around items-center gap-10 mt-5">
            
            {/* Text Area */}
            <motion.div
              className="flex flex-col items-center md:items-start text-center md:text-left max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="text-[#27272a] text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight dark:text-white"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                Hallo, Saya Afif. <br /> Full-stack Web Developer.
              </motion.div>

              <motion.div
                className="text-[#27272a] text-sm sm:text-base lg:text-lg pt-3 mt-6 leading-relaxed dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Saya berpengalaman membangun aplikasi web yang aman, andal, dan
                skalabel. Sebagian proyek saya tersedia secara open-source,
                sehingga bisa dieksplorasi dan dikembangkan bersama. Saya selalu
                terbuka untuk kolaborasi, ide baru, dan masukan.
              </motion.div>

              {/* Social Media */}
              <motion.div
                className="flex justify-center md:justify-start pt-6 gap-4 flex-wrap mb-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {[
                  { icon: <FontAwesomeIcon icon={faTwitter} size="2x" />, link: "https://twitter.com" },
                  { icon: <FontAwesomeIcon icon={faGithub} size="2x" />, link: "https://github.com" },
                  { icon: <FontAwesomeIcon icon={faLinkedin} size="2x" />, link: "https://linkedin.com" },
                  { icon: <FontAwesomeIcon icon={faInstagram} size="2x" />, link: "https://instagram.com" },
                  { icon: <GiMailbox size={32} />, link: "mailto:afif2916@gmail.com" }, // langsung react-icons
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-600 hover:text-amber-400 transition dark:text-gray-300"
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Image Area */}
            <motion.div
              className="w-60 sm:w-60 md:w-60 lg:w-60 aspect-square"
              initial={{ opacity: 0, scale: 2 }}
              animate={{ opacity: 1, scale: 1.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="overflow-hidden rounded-[20px] shadow-[0px_4px_10px_rgba(0,0,0,0.25)]">
                <motion.img
                  src={Image}
                  alt="About"
                  className="w-full h-60 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          </div>
          

         
          
        </div>
      </div>

      {/* Extra About Section */}
<div className="max-w-7xl mx-auto mt-16 mb-10 px-4 grid gap-10 md:grid-cols-2">
  {/* Skill Highlight */}
  <motion.div
    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow p-6"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h3 className="text-2xl font-bold mb-4 text-[#27272a] dark:text-white">
      Apa yang Bisa Saya Lakukan?
    </h3>
    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
      <li>⚡ Membangun REST API dengan Node.js & Express</li>
      <li>⚡ Mengelola database PostgreSQL & MongoDB</li>
      <li>⚡ Integrasi frontend React dengan backend</li>
      <li>⚡ Deployment aplikasi ke server & cloud</li>
    </ul>
  </motion.div>

  {/* Personal Touch */}
  <motion.div
    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow p-6"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2, duration: 0.8 }}
  >
    <h3 className="text-2xl font-bold mb-4 text-[#27272a] dark:text-white">
      Tentang Saya
    </h3>
    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
      Di luar coding, saya suka <span className="font-semibold">nongkrong</span> bareng teman, ngulik teknologi baru, dan kadang bikin <span className="italic">stand-up comedy</span> untuk iseng.  
      Saya percaya kalau software yang baik bukan hanya soal kode, tapi juga soal kolaborasi, komunikasi, dan kreativitas.
    </p>
  </motion.div>
</div>

{/* CTA Section */}
<div className="max-w-4xl mx-auto mt-16 mb-20 text-center px-4">
  <motion.h3
    className="text-3xl sm:text-4xl font-bold text-[#27272a] dark:text-white mb-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    Tertarik Berkolaborasi?
  </motion.h3>
  <p className="text-gray-600 dark:text-gray-300 mb-6">
    Saya selalu terbuka untuk proyek baru, ide segar, atau sekadar ngobrol soal teknologi.
  </p>
  <a
    href="mailto:afif2916@gmail.com"
    className="inline-block px-6 py-3 bg-amber-400 text-white font-semibold rounded-lg shadow hover:bg-amber-500 transition"
  >
    Hubungi Saya
  </a>
</div>


      <div className="pt-[60px]">
        <Footer />
      </div>
    </div>
  );
}
