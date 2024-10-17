import { Section } from "./Section";
import Lote1 from "../assets/lote1.png";
import Lote2 from "../assets/lote2.png";
import Lote3 from "../assets/lote3.png";


const lotes = [
  {
    title: "Colaboradores",
    content: (
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
        <div className="md:w-1/2 space-y-4">
          <p className="text-base sm:text-lg text-gray-700">
          El botón Rojo “Colaboradores” te llevará a la sección donde puedes ver y gestionar las personas que trabajan en la finca.
          </p>

          <p className="text-base sm:text-lg text-gray-700"> Si seleccionas el botón rojo con la cruz, serás dirigido a una pantalla para <strong>Crear nuevo lote</strong>.
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src={Lote1}
            alt="Colaboradores"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    )
  },
  {
    title: "Crear Lote",
    content: (
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
        <div className="md:w-1/2 space-y-4">
          <p className="text-base sm:text-lg text-gray-700">
            En esta vista corresponde a la pantalla de “Crear Lote” y tiene los
            siguientes elementos:<br/>
            <strong>- Nombre:</strong> Campo para ingresar el nombre del lote.<br />
            <strong>- Variedad del café:</strong> Selecciona la variedad del café que se plantará en el lote.<br />
            <strong>- Botón “Siguiente”:</strong> Presiona este botón para continuar con la creación del lote.
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src={Lote2}
            alt="Crear Lote"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    )
  },
  {
    title: "Ubicación del Lote",
    content: (
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
        <div className="md:w-1/2 space-y-4">
          <p className="text-base sm:text-lg text-gray-700">
          Se muestra un mapa donde puedes ver la ubicación del lote que estas creando. El pin rojo en el mapa marca la ubicación actual seleccionada.<br/> Latitud, Longitud y Altitud: Justo debajo del mapa, veras tres datos importantes que indican la ubicación geográfica exacta del lote.<br/> Botón guardar: Una vez que hayas verificado o ajustado la ubicación, puedes presionar el botón de guardar para confirmar los datos del lote.
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src={Lote3}
            alt="Ubicación del Lote"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    )
  }
];

export const Lotes = () => (
  <Section title=" Módulo de Lotes" subsections={lotes} />
);