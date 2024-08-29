import MockupFincas from "../assets/mockups/mockup-fincas.png";
import Plus from "../assets/icons/plus.png";
import DolarSign from "../assets/icons/dollar.png";
import PhotoFrames from "../assets/photosFrame.png";
import TitleDes from "../common/TitleDes";
import StoreLinks, { BtnTypes } from "../common/StoreLinks";

function FreeTier() {
  return (
    <section
      id="capagratuita"
      className="flex max-w-7xl flex-col gap-10 px-8 lg:px-12 xl:m-auto xl:pt-20"
    >
      <TitleDes
        title="Gestión eficiente, ágil y sofisticada"
        description="En su capa gratuita CoffeeTech te ofrece todas las <br /> soluciones para el manejo inteligente de tus cultivos."
      />

      <article className="flex w-full flex-col gap-8 overflow-hidden xl:h-96 xl:flex-row">
        <div className="flex flex-col rounded-2xl bg-green-200 px-4 sm:px-0 md:flex-row md:gap-8 xl:w-2/3">
          <div className="mt-10 flex flex-col justify-center gap-4 text-center sm:mx-10 md:mx-0 md:ml-10 md:w-1/2 md:text-left">
            <h2 className="m-auto text-center text-3xl font-semibold text-gray-800 sm:w-[18ch] md:m-0 md:text-left">
              Gestiona tus fincas y lotes
            </h2>
            <p className="m-auto text-center text-gray-500 sm:w-[34ch] md:m-0 md:text-left">
              Añade hasta dos fincas y tres lotes por finca. Realiza chequeos de
              salud de manera periódica, asocia labores culturales, gastos e
              ingresos a tus lotes.
            </p>
          </div>

          <div className="m-auto mt-10 max-w-72 md:mx-10 md:w-1/2 lg:mx-0">
            <img src={MockupFincas} alt="Mockup Finca" />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4 rounded-2xl bg-indigo-100 p-10 xl:w-1/3">
          <div className="w-fit rounded-full bg-indigo-200 p-4">
            <img src={Plus} alt="" className="max-h-12 max-w-12" />
          </div>
          <h2 className="text-3xl font-semibold text-gray-800">
            Añade colaboradores
          </h2>
          <p className="text-gray-500">
            Asigna permisos y tareas a tus operadores en fincas y lotes
            específicos. Programa, asigna y registra el cumplimiento de las
            labores culturales.
          </p>
        </div>
      </article>

      <article className="flex w-full flex-col gap-8 xl:h-96 xl:flex-row">
        <div className="flex flex-col justify-center gap-4 rounded-2xl bg-red-100 p-10 xl:w-1/3">
          <div className="w-fit rounded-full bg-red-200 p-4">
            <img src={DolarSign} alt="" className="max-h-12 max-w-12" />
          </div>
          <h2 className="text-3xl font-semibold text-gray-800">
            Genera reportes de costos y rendimiento
          </h2>
          <p className="text-gray-500">
            Visualiza y descarga reportes de la utilidad neta en tus fincas y
            lotes por rango de tiempo. Además genera un reporte del rendimiento
            del café en base al peso del café en pergamino, pasilla y excelso al
            final de la cadena de producción.
          </p>
        </div>

        <div className="flex flex-col gap-8 overflow-hidden rounded-2xl bg-green-200 px-4 sm:px-0 md:flex-row md:gap-8 xl:w-2/3">
          <div className="mt-10 flex flex-col justify-center gap-4 text-center sm:mx-10 md:mx-0 md:ml-10 md:mt-0 md:w-1/2 md:text-left">
            <h2 className="m-auto text-center text-3xl font-semibold text-gray-800 sm:w-[18ch] md:m-0 md:text-left">
              Gestiona la salud de tus lotes
            </h2>
            <p className="m-auto text-center text-gray-500 sm:w-[34ch] md:m-0 md:text-left">
              Realiza detecciones de plagas, falta de nutrientes y estados de
              maduración en la planta.
            </p>
            <StoreLinks type={BtnTypes.Standard} />
          </div>

          <div className="m-auto max-w-96 md:mt-36 md:w-1/2">
            <img
              src={PhotoFrames}
              alt="Frame displaying logos of various payment solutions"
            />
          </div>
        </div>
      </article>
    </section>
  );
}

export default FreeTier;
