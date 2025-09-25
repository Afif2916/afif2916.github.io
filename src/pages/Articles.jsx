import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import Logo from '../assets/logoapip.png';
import ArticleCard from '../components/ArticleCard';
import { motion } from "framer-motion";
import articles from '../data/article';
import useSEO from '../utils/useSEO';
import SEO from "../data/seo";


export default function Articles() {
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

  const currentSEO = SEO.find((item) => item.page === "articles");

   useSEO({
                    title: "Afif Portofolio",
                    description: currentSEO.description,
                    keywords: currentSEO.keywords,
    });

  return (
    <div className="bg-white relative dark:bg-gray-800">
      <Navbar />
      <div className="px-4">
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
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-start items-center gap-5 mt-5">
            {/* Text Area */}
            <motion.div
              className="flex flex-col items-center md:items-start text-center md:text-left max-w-5xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-[#27272a] text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight dark:text-gray-300">
                I'm passionate about pushing the boundaries of what's possible
                and inspiring the next generation of innovators.
              </div>

              <motion.div
                className="text-[#27272a] text-sm sm:text-base lg:text-lg pt-3 mt-6 leading-relaxed dark:text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
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
          </div>

          {/* Articles Grid */}
          <div className="pt-5 mb-5 px-5">
            <div className="max-w-7xl mx-auto pt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {articles.map((article) => (
        <ArticleCard
          key={article.article_id}
          title={article.title}
          description={article.description}
          image={article.image_url}
          link={article.link}
        />
      ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[60px]">
        <Footer />
      </div>
    </div>
  );
}
