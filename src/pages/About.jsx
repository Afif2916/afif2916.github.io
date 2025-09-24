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
    <div className="bg-white relative">
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
                className="text-[#27272a] text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                Hallo, Saya Afif. <br /> Full-stack Web Developer.
              </motion.div>

              <motion.div
                className="text-[#27272a] text-sm sm:text-base lg:text-lg pt-3 mt-6 leading-relaxed"
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
                className="flex justify-center md:justify-start pt-6 gap-6 flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                {[
                  { icon: faTwitter, link: "https://twitter.com" },
                  { icon: faGithub, link: "https://github.com" },
                  { icon: faLinkedin, link: "https://linkedin.com" },
                  { icon: faInstagram, link: "https://instagram.com" },
                  {
                    icon: faInstagram,
                    link: "mailto:afif2916@gmail.com",
                  },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-600 hover:text-amber-400 transition"
                  >
                    <FontAwesomeIcon icon={item.icon} size="2x" />
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
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>
          </div>

          {/* Contact / Follow Section */}
          <div className="max-w-7xl mx-auto mt-20 sm:mt-20 md:mt-16 lg:mt-10 mb-10 flex flex-col items-center md:items-end text-center md:text-right px-4">
            <ul className="space-y-4 text-lg font-semibold text-gray-800">
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faTwitter} /> Follow on Twitter
              </li>
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faGithub} /> Follow on Github
              </li>
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faLinkedin} /> Follow on LinkedIn
              </li>
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faInstagram} /> Follow on Instagram
              </li>
              <li className="flex items-center gap-3">
                <FontAwesomeIcon icon={faInstagram} /> Email : afif2916@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-[60px]">
        <Footer />
      </div>
    </div>
  );
}
