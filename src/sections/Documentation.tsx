import Footer2 from "../common/Footer2";
import Nav2 from "../common/Nav2";

import { Finca } from "../sectionsUsers/Finca";
import { Lotes } from "../sectionsUsers/Lotes";
import { Autenticacion } from "../sectionsUsers/Autenticacion";
import { GettingStartedSection } from "../sectionsUsers/GettingStartedSection";
import { Colaboradores } from "../sectionsUsers/Colaboradores";


const Documentacion = () => {
  return (
    <>
      <Nav2 />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Manual de Usuario</h1>
        <Autenticacion />
        <GettingStartedSection />
        <Finca />
        <Lotes />
        <Colaboradores />
      </div>
      <div className="flex justify-center pt-8">
        <a
          href="/manual.pdf"
          download="Manual_de_usuario_Coffee_Tech.pdf"
          className="bg-customRed px-6 py-3 text-white rounded-lg text-center text-sm md:text-base lg:text-lg font-semibold transition-transform duration-200 transform hover:scale-105"
        >
          Descargar Manual de usuario
        </a>
      </div>
      <Footer2 />
    </>
  );
};

export default Documentacion;



