import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Logo from "../assets/logoCoffeeTech.svg";
import { Link } from "react-router-dom";


function Nav() {
  const textLinkClasses =
    "text-gray-500 hover:text-gray-900 active:text-gray-400";

  return (
    <Disclosure as="nav" className="sticky top-0 z-50 bg-white shadow-md">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 pb-2 pt-2 sm:px-6 lg:px-8">
            <div className="mr-4 flex h-12 sm:h-16 items-center justify-between">
              <div className="flex items-center">
                <img
                  src={Logo}
                  alt="logoCoffeeTech"
                  className="h-12 sm:h-20 w-auto"
                />
              </div>

              {/* Menú de Links */}
              <div className="hidden items-center sm:flex sm:space-x-6">
                <a href="#video" className={textLinkClasses}>
                  Nosotros
                </a>
                <a href="#partners" className={textLinkClasses}>
                  Etapas
                </a>
                <a href="#capagratuita" className={textLinkClasses}>
                  Soluciones
                </a>
                <Link to="/documentation" className={textLinkClasses}>
                  Documentación
                </Link>
                <Link
                  to="/download"
                  className="rounded-xl bg-gray-800 px-3 py-1.5 sm:px-5 sm:py-2 text-white hover:bg-gray-900 active:bg-gray-600"
                >
                  Descargar CoffeeTech
                </Link>
              </div>

              {/* Botón de Menú Hamburgesa */}
              <div className="-mr-2 flex sm:hidden">
                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Menú desplegable en pantallas pequeñas */}
          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <DisclosureButton
                as="a"
                href="#about"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              >
                Nosotros
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="#capagratuita"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              >
                Contáctenos
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="#partners"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              >
                Aliados
              </DisclosureButton>
              <DisclosureButton
                as={Link}
                to="/documentation"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              >
                Documentación
              </DisclosureButton>
              <DisclosureButton
                as={Link}
                to="/download"
                className="block rounded-md bg-gray-800 px-3 py-2 text-base font-medium text-white hover:bg-gray-900"
              >
                Descargar CoffeeTech
              </DisclosureButton>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

export default Nav;

