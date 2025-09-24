import { SiLaravel } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import csharpIcon from "../assets/c-sharp.svg";

// Hanya referensi, tanpa < > di sini
const projects = [
  {
    name: "Metrografik",
    description: "A web application that provides real-time public transit data and route planning for urban commuters.",
    icon: SiLaravel, // bukan <SiLaravel/>
    link: "https://metrografik.com"
  },
  {
    name: "Portal TryOut",
    description: "An online platform for managing and participating in tryouts with scoring system and analysis.",
    icon: SiLaravel,
    link: "https://metrografik.com"
  },
  {
    name: "C4.5 Data Mining",
    description: "A decision tree implementation using the C4.5 algorithm to analyze and classify datasets.",
    icon: SiLaravel,
    link: "https://metrografik.com"
  },
  {
    name: "Pilkada Control Scene",
    description: "A desktop application for controlling and monitoring election broadcast graphics.",
    // bungkus jadi function, jangan JSX langsung
    icon: csharpIcon,
    link: "https://metrografik.com"
  },
  {
    name: "3D Book With Control Admin",
    description: "A 3D interactive book web app with admin panel for managing content.",
    icon: FaReact,
    link: "https://metrografik.com"
  },
  {
    name: "XML Generator For Data Market",
    description: "A XML Generator web app to create structured XML files for market data integration to graphic broadcast.",
    icon: FaNodeJs,
    link: "https://metrografik.com"
  }
];

export default projects;
