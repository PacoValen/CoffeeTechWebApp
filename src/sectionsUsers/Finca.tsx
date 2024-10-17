import { Section } from "./Section";
import Finca1 from "../assets/finca1.png";
import Finca2 from "../assets/finca2.png";
import Finca3 from "../assets/finca3.png";
import Finca4 from "../assets/finca4.png";
import Finca5 from "../assets/finca5.png";
import Finca6 from "../assets/finca6.png";
import Finca7 from "../assets/finca7.png";
import Finca8 from "../assets/finca8.png";
import Finca9 from "../assets/finca9.png";

const finca = [
  {
    title: "Buscar Finca",
    content: (
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
        <div className="md:w-1/2 space-y-4">
          <p className="text-base sm:text-lg text-gray-700">
            Usa la opción “Buscar finca por nombre” para encontrar una finca rápidamente.
            Solo escribe el nombre de la finca y presiona el icono de la lupa.
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src={Finca1}
            alt="Buscar Finca"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    )
  },
  {
    title: "Filtro de roles",
    content: (
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
        <div className="md:w-1/2 space-y-4">
          <p className="text-base sm:text-lg text-gray-700">
          Si quieres ver un rol específico, selecciona uno desde el menú que dice “Todos los roles”. Aquí puedes ver qué rol tiene asignado cada usuario.<br/><br/>
          - Si haces clic en el botón rojo con una cruz, serás dirigido automáticamente a una pantalla para crear una finca.
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src={Finca2}
            alt="Filtro de Roles"
            className="w-full rounded-lg shadow-md"
          />
          <img
            src={Finca3}
            alt="Filtro de Roles"
            className="w-full rounded-lg shadow-md"
          />
          <img
            src={Finca4}
            alt="Filtro de Roles"
            className="w-full rounded-lg shadow-md"
          />
          
        </div>
      </div>
    )
  },
  {
    title: "Crear Finca",
    content: (
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
        <div className="md:w-1/2 space-y-4">
          <p className="text-base sm:text-lg text-gray-700">
            - Nombre: Campo para ingresar el nombre de la finca.<br />
            - Área: Campo para ingresar el tamaño de la finca.<br />
            - Unidad de medida: Escoge entre Metro cuadrado, Kilómetro cuadrado, o hectárea.<br />
            - Botón “Crear”: Presiona este botón para crear la finca.
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src={Finca5}
            alt="Crear Finca"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    )
  },
  {
    title: "Rol de usuario",
    content: (
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
        <div className="md:w-1/2 space-y-4">
          <p className="text-base sm:text-lg text-gray-700">
          En la parte superior, verás el rol que tienes dentro de la finca (Por ejemplo, “Administrador de la finca”) Este rol determina que cosas puedes hacer en la finca.
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src={Finca6}
            alt="Crear Finca"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    )
  },
  {
    title: "Buscar lote por nombre",
    content: (
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
        <div className="md:w-1/2 space-y-4">
          <p className="text-base sm:text-lg text-gray-700">
            Usa el campo “Buscar lote por nombre” para encontrar un lote específico dentro de la finca
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src={Finca7}
            alt="Crear Finca"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    )
  },
  {
    title: "Información general",
    content: (
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
        <div className="md:w-1/2 space-y-4">
          <p className="text-base sm:text-lg text-gray-700">
          Aquí veras un resumen de la finca, que incluye el nombre (Por ejemplo “Prueba2”) y el tamaño de la finca (En este caso, 100 kilómetros cuadrados). Si necesitas editar esta información, presiona el icono lápiz rojo que está en la derecha en donde te va a direccionar a la vista <strong>Editar información de finca.</strong>
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src={Finca8}
            alt="Crear Finca"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    )
  },
  {
    title: "Editar información de finca",
    content: (
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
        <div className="md:w-1/2 space-y-4">
          <p className="text-base sm:text-lg text-gray-700">
          Esta pantalla corresponder a la opción “Editar información de finca” Donde puedes modificar datos claves de la finca:<br/> <strong>- Nombre:</strong> Aquí puedes editar el nombre de la finca. En este ejemplo, el nombre de la finca es “Prueba 2”. Puedes modificar este campo escribiendo uno nuevo si es necesario. <br/> <strong>- Área:</strong>  En este campo puedes cambiar el tamaño de la finca. <br/> <strong>- Unidad de medida:</strong> Es un menú desplegable donde puedes seleccionar la unidad que se usará para medir el área de la finca. En este caso, está seleccionada la opción “Kilómetro cuadrado”, Puedes cambiarla a otra unidad, como metros cuadrados o hectárea, si lo necesitas. <br/> <strong>- Botón Guardar:</strong> Una vez que hayas realizado los cambios en el nombre, el área o la unidad de medida, puedes presionar el botón rojo que dice “Guardar” para confirmar y guardar los cambios realizados en la información de la finca.
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src={Finca9}
            alt="Editar información de finca"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    )
  }
];

export const Finca = () => (
  <Section title=" Módulo de Finca" subsections={finca} />
);