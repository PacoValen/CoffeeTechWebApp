import ButtonLink from '../common/ButtonLink';
import Logo from '../assets/logoCoffeeTech.svg'; 

export default function SecondaryNavbar() {
  return (
    <nav className="bg-amber-100 p-4 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <ButtonLink href="/" className="flex items-center space-x-2">
          <img src={Logo} alt="Coffee Tech logo" className="h-8 w-auto" />
          <span className="text-2xl font-bold text-amber-800">Coffee Tech</span>
        </ButtonLink>
        <ButtonLink
          href="/"
          className="rounded-full bg-amber-200 px-4 py-2 text-amber-800 transition-colors hover:bg-amber-300"
        >
          Inicio
        </ButtonLink>
      </div>
    </nav>
  );
}

