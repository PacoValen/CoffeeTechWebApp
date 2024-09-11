import Footer2 from "../common/Footer2";
import Nav2 from "../common/Nav2";
import { Autenticacion } from "../sectionsUsers/Autenticacion";
import { GettingStartedSection } from "../sectionsUsers/GettingStartedSection";


const Documentacion = () => {
  return (
    <>
      <Nav2 />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Manual de Usuario</h1>
        <Autenticacion />
        <GettingStartedSection />
      </div>
      <Footer2 />
    </>
  );
};

export default Documentacion;



