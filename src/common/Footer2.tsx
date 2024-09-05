import { Link } from "react-router-dom";

function Footer2() {
  return (
    <footer className="m-4 mx-auto flex w-full rounded-lg">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        {/* Texto en pantallas grandes (lado derecho) */}
        <span className="hidden text-sm text-gray-500 md:inline text-right dark:text-gray-400">
          © 2024{" "}
          <a href="/" className="hover:underline">
            CoffeeTech
          </a>
          . All Rights Reserved.
        </span>

        {/* Texto en pantallas pequeñas (parte inferior) */}
        <span className="block text-sm text-gray-500 text-center md:hidden mt-4 dark:text-gray-400">
          © 2024{" "}
          <a href="/" className="hover:underline">
            CoffeeTech
          </a>
          . All Rights Reserved.
        </span>

        {/* Enlaces - Alineados a la izquierda en pantallas grandes y centrados en móviles */}
        <ul className="mt-3 flex flex-wrap items-center justify-center md:justify-start text-sm font-medium text-gray-500 sm:mt-0 dark:text-gray-400 gap-4 md:gap-6">
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
export default Footer2;