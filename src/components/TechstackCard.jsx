import { FaHtml5, FaNodeJs, FaReact, FaPhp, FaGithub } from "react-icons/fa";
import { SiJavascript, SiPostgresql, SiMysql, SiMongodb, SiCss3 } from "react-icons/si";
import csharpIcon from "../assets/c-sharp.svg"
import visualBasicIcon from "../assets/visual-basic.svg"

export default function TechstackCard() {
  const techs = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-7xl" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-600 text-7xl" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-7xl" /> },
    { name: "React", icon: <FaReact className="text-cyan-400 text-7xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-7xl" /> },
    { name: "PHP", icon: <FaPhp className="text-indigo-500 text-7xl" /> },
  //  { name: "Visual Basic", icon: <SiVisualbasic className="text-blue-600 text-7xl" /> },
    { name: "Visual Basic", icon: <img src={visualBasicIcon} alt="Visual Basic" className="w-16 h-16" /> },
    { name: "C#", icon: <img src={csharpIcon} alt="C#" className="w-16 h-16" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-600 text-7xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-400 text-7xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-7xl" /> },
    { name: "Github", icon: <FaGithub className="text-blue-800 text-7xl" /> },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <h2 className="text-3xl font-bold text-center mb-10 mt-5">Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 place-items-center mb-6">
        {techs.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow hover:scale-105 transition-transform"
          >
            {tech.icon}
            <span className="mt-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
