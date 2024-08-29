function Footer() {
  return (
    <footer className="m-4 mx-auto flex w-full rounded-lg">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="hidden text-sm text-gray-500 md:inline md:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="#" className="hover:underline">
            CoffeeTech
          </a>
          . All Rights Reserved.
        </span>
        <ul className="mt-3 flex flex-wrap items-center justify-center text-sm font-medium text-gray-500 sm:mt-0 dark:text-gray-400">
          <li>
            <a href="#video" className="me-4 hover:underline md:me-6">
              Nosotros
            </a>
          </li>
          <li>
            <a href="#capagratuita" className="me-4 hover:underline md:me-6">
              Soluciones
            </a>
          </li>
          <li>
            <a href="/documentation" className="me-4 hover:underline md:me-6">
              Documentacion
            </a>
          </li>
          <li>
            <a href="/download" className="hover:underline">
              Apk
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
