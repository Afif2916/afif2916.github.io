import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  faTwitter,
  faGithub,
  faInstagram,
  faLinkedin,
  faMailchimp
  
} from "@fortawesome/free-brands-svg-icons";
//import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

//import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "../assets/profilapip.png";
import { useState, useEffect, useRef } from "react";
import Logo from "../assets/logoapip.png";
import { motion } from "framer-motion";
import SEO from "../data/seo";
import useSEO from "../utils/useSEO";
import { GiMailbox } from "react-icons/gi";
import emailjs from "@emailjs/browser";


export default function Contact() {
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

  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    emailjs
      .sendForm(
        "service_3n7nijk",   // ganti dengan Service ID
        "template_qnjj9vr",  // ganti dengan Template ID
        formRef.current,
        "ykontWOlxCHtNCvue"    // ganti dengan Public Key
      )
      .then(
        () => {
          setLoading(false);
          setSuccess("Message sent successfully ✅");
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          setSuccess("Something went wrong ❌");
          console.error("EmailJS Error:", error);
        }
      );
  };



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
                className="text-[#27272a] text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight dark:text-gray-300"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                Let's Get in Touch: Ways to Connect with Me
              </motion.div>

              <motion.div
                className="text-[#27272a] text-sm sm:text-base lg:text-lg pt-3 mt-6 leading-relaxed dark:text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                Thank you for your interest in getting in touch with
							me. I welcome your feedback, questions, and
							suggestions. If you have a specific question or
							comment, please feel free to email me directly at
							&nbsp;{" "}
							<a href={`mailto:afif2916@gmail.com`} className="text-blue-600 underline hover:text-blue-800">
								afif2916@gmail.com
							</a>
							. I make an effort to respond to all messages within
							24 hours, although it may take me longer during busy
							periods. Alternatively, you can use the contact form
							on my website to get in touch. Simply fill out the
							required fields and I'll get back to you as soon as
							possible. Finally, if you prefer to connect on
							social media, you can find me on{" "}
							<a
								href=""
								target="_blank"
								rel="noreferrer"
                                className="text-blue-600 underline hover:text-blue-800"
							>
								apipnr_27
							</a>
							. I post regular updates and engage with my
							followers there, so don't hesitate to reach out.
							Thanks again for your interest, and I look forward
							to hearing from you!
                
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
      className="text-gray-600 hover:text-amber-400 transition"
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

          {/* Contact / Follow Section */}
          <div className="max-w-7xl mx-auto mt-0 sm:mt-20 md:mt-16 lg:mt-0 mb-10 flex flex-col items-center md:items-end text-center md:text-right px-4">
           
          </div>

          {/* Contact Form Section */}
<div className="max-w-3xl mx-auto mt-16 px-4 w-full">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
    Send Me a Message
  </h2>
  <form
    ref={formRef}
  //  action="https://formspree.io/f/mwkdeyql" 
   // method="POST"
    className="space-y-6"
    onSubmit={sendEmail}
  >
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
        Your Name
      </label>
      <input
        type="text"
        id="name"
        name="from_name"
        required
        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
      />
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
        Your Email
      </label>
      <input
        type="email"
        id="email"
        name="from_email"
        required
        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
      />
    </div>

    <div>
      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 dark:text-gray-300">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        rows="5"
        required
        className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
      ></textarea>
    </div>

     <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-400 text-white font-semibold py-3 px-6 rounded-lg hover:bg-amber-500 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
  </form>
</div>

        </div>
      </div>

      <div className="pt-[60px]">
        <Footer />
      </div>
    </div>
  );
}
