import { SiLaravel } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import csharpIcon from "../assets/c-sharp.svg";
import { color } from "framer-motion";

// Hanya referensi, tanpa < > di sini
const projects = [
  {
    name: "Metrografik / New Graphixity",
    description: "Sebuah Aplikasi Berbasis Web untuk me-request grafis dari tim grafis siaran.",
    icon: SiLaravel, // bukan <SiLaravel/>
    link: "https://github.com/Afif2916/NewGraphixity",
    color: "text-red-600"
  },
  {
    name: "Portal TryOut",
    description: "Platform CPNS untuk latihan soal tryout online dengan sistem pembayaran via Midtrans.",
    icon: SiLaravel,
    link: "https://github.com/Afif2916/PortalTryOut",
    color: "text-red-600"
  },
  {
    name: "C4.5 Data Mining",
    description: "Sebuah Aplikasi Web untuk klasifikasi menggunakan algoritma C4.5. yang digunakan untuk memprediksi keterlambatan pengiriman paket",
    icon: SiLaravel,
    link: "https://github.com/Afif2916/c4.5",
    color: "text-red-600"
  },
  {
    name: "Pilkada Control Scene",
    description: "Sebuah Aplikasi desktop untuk mengontrol grafis Pilkada di Viz Artist via network secara Real-time.",
    // bungkus jadi function, jangan JSX langsung
    icon: csharpIcon,
    link: "https://github.com/Afif2916/PilkadaControlScene",
    color: "text-purple-600"
  },
  {
    name: "3D Book With Control Admin",
    description: "Sebuah web aplikasi yang memiliki buku 3d interaktif dengan admin panel untuk mengelola konten buku.",
    icon: FaReact,
    link: "https://github.com/Afif2916/3d-book-with-control-admin",
    color: "text-sky-600"
  },
  {
    name: "XML Generator For Data Market",
    description: "A XML Generator web app to create structured XML files for market data integration to graphic broadcast.",
    icon: FaNodeJs,
    link: "https://github.com/Afif2916/json-to-xml-generator",
    color: "text-green-600"
  },
  {
    name: "QnA Box Control To Viz Artist",
    description: "A Desktop application to control QnA Box graphics in Viz Artist via network.",
    icon: csharpIcon,
    link: "https://github.com/Afif2916/QnA-box-control-to-viz-artist",
    color: "text-purple-600"
  }
];

export default projects;
