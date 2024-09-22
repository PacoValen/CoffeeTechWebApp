import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white text-gray-600 py-4">
      <div className="container mx-auto max-w-screen-xl flex flex-col md:flex-row md:items-center md:justify-between">
       
        <span className="hidden text-sm text-gray-500 md:inline text-right dark:text-gray-400">
            © 2024{" "}
            <a href="#" className="hover:underline">
              CoffeeTech
            </a>
            . All Rights Reserved.
          </span>

          <span className="block text-sm text-gray-500 text-center md:hidden mt-4">
            © 2024{" "}
            <a href="#" className="hover:underline">
              CoffeeTech
            </a>
            . All Rights Reserved.
          </span>

          <ul className="flex flex-wrap items-center justify-center md:justify-start text-sm font-medium text-gray-500 dark:text-gray-400 gap-4 md:gap-6 mb-4 md:mb-0">
            <li>
              <a href="#video" className="hover:underline">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#capagratuita" className="hover:underline">
                Soluciones
              </a>
            </li>
            <li>
            <a href="/termsandconditions" target="_blank" rel="noopener noreferrer" className="text-customRed hover:underline">
              Términos y Condiciones
            </a>
            </li>
            <li>
              <Link to="/documentation" className="hover:underline">
                Documentación
              </Link>
            </li>
            <li>
              <Link to="/download" className="hover:underline">
                Apk
              </Link>
            </li>
          </ul>
      </div>
    </footer>

  );
}
export default Footer;
