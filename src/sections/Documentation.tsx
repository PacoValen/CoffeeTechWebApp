import Footer2 from "../common/Footer2";
import Nav2 from "../common/Nav2";

import { Finca } from "../sectionsUsers/Finca";
import { Lotes } from "../sectionsUsers/Lotes";
import { Autenticacion } from "../sectionsUsers/Autenticacion";
import { Colaboradores } from "../sectionsUsers/Colaboradores";
import { Floraciones } from "../sectionsUsers/Floraciones";
import { LaboresCulturales } from "../sectionsUsers/LaboresCulturales";


const Documentacion = () => {
  return (
    <>
      <Nav2 />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Manual de Usuario</h1>
        <Autenticacion />
        <Finca />
        <Lotes />
        <Colaboradores />
        <Floraciones />
        <LaboresCulturales />
      </div>
      <div className="flex justify-center pt-8">
        <a
          href="/manual.pdf"
          download="Manual_de_usuario_Coffee_Tech.pdf"
          className="bg-customRed px-6 py-3 text-white rounded-lg text-center text-sm md:text-base lg:text-lg font-semibold transition-transform duration-200 transform hover:scale-105"
        >
          Descargar Manual CoffeeTech
        </a>
      </div>
      <Footer2 />
    </>
  );
};

export default Documentacion;



