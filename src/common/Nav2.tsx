import { Link } from "react-router-dom";
import Logo from "../assets/logoCoffeeTech.svg"; 

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-b from-gray-100 to-gray-200 p-4 shadow-[0_4px_12px_rgba(0,0,0,0.1)] rounded-b-lg">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <img
              src={Logo} // Cambia esto al logo que tienes en common
              alt="Coffee Tech Logo"
              className="h-10 w-10 text-gray-600 transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute -inset-0.5 bg-gray-300 blur opacity-30 group-hover:opacity-50 transition duration-300 rounded-full"></div>
          </div>
          <span className="text-3xl font-bold text-gray-700 font-serif tracking-wide">
            Coffee Tech
          </span>
        </Link>
        <Link
          to="/"
          className="relative px-6 py-3 font-bold text-gray-800 group"
        >
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-gray-300 group-hover:translate-x-0 group-hover:translate-y-0 rounded-lg"></span>
          <span className="absolute inset-0 w-full h-full border-4 border-gray-400 rounded-lg"></span>
          <span className="relative">Inicio</span>
        </Link>
      </div>
    </nav>
  );
}

