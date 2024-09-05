import { Link } from "react-router-dom";
import Logo from "../assets/logoCoffeeTech.svg"; 

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 sm:h-16">
          <div className="flex-shrink-0 flex items-center">
            <img
              src={Logo}
              alt="Coffee Tech Logo"
              width={30} // Tamaño reducido para pantallas móviles
              height={30}
              className="h-12 w-auto sm:h-20"
            />
          </div>
          <div className="flex items-center">
            <Link
              to="/"
              className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 border border-transparent text-xs sm:text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Inicio
            </Link>
          </div>
        </div>
      </div>
    </nav>

  );
}
