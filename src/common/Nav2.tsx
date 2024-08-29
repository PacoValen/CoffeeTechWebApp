import { Link } from "react-router-dom";
import Logo from "../assets/logoCoffeeTech.svg"; // Usa tu logo en lugar de "Coffee"

export default function SecondaryNavbar() {
  return (
    <nav className="relative bg-gradient-to-r from-amber-100 to-amber-200 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <img src={Logo} alt="Coffee Tech logo" className="h-10 w-10 transition-transform duration-300 ease-in-out group-hover:scale-110" />
            <div className="absolute -inset-0.5 bg-amber-300 blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
          </div>
          <span className="text-3xl font-bold text-amber-800 font-serif tracking-wide">
            Coffee Tech
          </span>
        </Link>
        <Link
          to="/"
          className="relative px-6 py-3 font-bold text-amber-900 group"
        >
          <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-amber-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full border-4 border-amber-800"></span>
          <span className="relative">Inicio</span>
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300"></div>
    </nav>
  );
}


