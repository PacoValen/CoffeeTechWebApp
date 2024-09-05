import StoreLinks, { BtnTypes } from "../common/StoreLinks";
import Phone from "../assets/mockup.svg";
import HeroImage from "../assets/imaMain.png";

function Hero() {
  return (
    <section
      id="about"
      className="relative mt-4 flex h-fit max-w-7xl flex-col items-center gap-10 px-8 pb-20 pt-20 sm:gap-16 md:my-0 md:h-[84.9vh] md:flex-row md:gap-0 lg:px-12 xl:m-auto xl:gap-0 xl:overflow-hidden"
    >
      <div className="w-full md:w-3/6">
        <h1 className="mx-auto mb-8 w-[12ch] text-center text-3xl font-semibold text-gray-800 sm:text-4xl md:mx-0 md:text-left">
          Revoluciona tu cultivo de Café
        </h1>
        <p className="m-auto w-full text-center text-sm text-gray-500 sm:text-base md:m-0 md:text-left">
          Toma el control de tus cultivos desde cualquier lugar. ¡Gestiona de forma inteligente y transforma tu producción de café!
        </p>

        {/* Aquí ocultamos el botón en pantallas pequeñas y lo mostramos en pantallas grandes */}
        <div className="hidden md:block mt-6">
          <StoreLinks type={BtnTypes.Standard} />
        </div>
      </div>

      <div className="md:w-3/6 xl:mb-12 xl:overflow-hidden">
        <img
          className="right-0 m-auto w-60 sm:w-72 xl:absolute xl:left-6 xl:right-0 xl:mt-32 xl:w-80"
          src={Phone}
          alt="Kobodrop app frame"
        />
        <img
          className="hidden rounded-2xl pt-12 xl:flex"
          src={HeroImage}
          alt="A woman happily using Kobodrop"
        />

        {/* Aquí mostramos el botón en pantallas pequeñas debajo de la imagen */}
        <div className="block mt-8 md:hidden w-full text-center">
          <StoreLinks type={BtnTypes.Standard} />
        </div>
      </div>
    </section>


  );
}

export default Hero;
