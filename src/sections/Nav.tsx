import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Logo from "../assets/logoCoffeeTech.svg";
import ButtonLink from "../common/ButtonLink";

function Nav() {
  const textLinkClasses =
    "text-gray-500 hover:text-gray-900 active:text-gray-400";

  const navLinks = [
    { href: "nosotros", children: "Nosotros" },
    { href: "contactenos", children: "Contactenos" },
    { href: "review", children: "Aliados" },
    { href: "docs", children: "Documentacion" },
  ];

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 pb-10 pt-5 sm:px-6 lg:px-8">
            <div className="mr-4 flex h-16 items-center justify-between">
              <div className="flex items-center">
                <ButtonLink href="#" className="flex-shrink-0">
                  <img src={Logo} alt="logoCoffeeTech" className="h-8 w-auto" />
                </ButtonLink>
              </div>

              {/* Menú de Links */}
              <div className="hidden items-center sm:flex sm:space-x-6">
                {navLinks.map((link, index) => (
                  <ButtonLink
                    key={index}
                    href={link.href}
                    className={textLinkClasses}
                  >
                    {link.children}
                  </ButtonLink>
                ))}
                <ButtonLink
                  href="descargar"
                  className="rounded-xl bg-gray-800 px-5 py-2 text-white hover:bg-gray-900 active:bg-gray-600"
                >
                  Descargar CoffeeTech
                </ButtonLink>
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
              {navLinks.map((link, index) => (
                <DisclosureButton
                  key={index}
                  as="a"
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                >
                  {link.children}
                </DisclosureButton>
              ))}
              <DisclosureButton
                as="a"
                href="descargar"
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
