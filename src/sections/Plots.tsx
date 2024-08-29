import TitleDes from "../common/TitleDes";
import Plantacion from "../assets/plantacion.png";
import Maduracion from "../assets/maduracion.png";
import Recoleccion from "../assets/recoleccion.png";

function Plots() {
  return (
    <section id="partners">
      <div className="bg-gray-100 py-24 sm:py-32">
        <TitleDes
          title="Trazabilidad para tus cultivos"
          description="Incluye todas nuestras soluciones en estas etapas de tu cultivo."
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 pt-10 text-center lg:grid-cols-3">
            {/* <!-- Primer div con imagen --> */}
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <img
                src={Plantacion}
                alt="Plantación"
                className="order-1 mx-auto mb-4 h-32 w-32 rounded-full object-cover"
              />
              {/* <dt className="order-3 text-base leading-7 text-gray-600">
                Transactions every 24 hours
              </dt> */}
              <dd className="order-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                Plantación
              </dd>
            </div>

            {/* <!-- Segundo div con imagen --> */}
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <img
                src={Maduracion}
                alt="Maduración"
                className="order-1 mx-auto mb-4 h-32 w-32 rounded-full object-cover"
              />
              {/* <dt className="order-3 text-base leading-7 text-gray-600">
              Transactions every 24 hours
            </dt> */}
              <dd className="order-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                Maduración
              </dd>
            </div>

            {/* <!-- Tercer div con imagen --> */}
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <img
                src={Recoleccion}
                alt="Recolección"
                className="order-1 mx-auto mb-4 h-32 w-32 rounded-full object-cover"
              />
              {/* <dt className="order-3 text-base leading-7 text-gray-600">
              Transactions every 24 hours
            </dt> */}
              <dd className="order-2 text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                Recolección
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export default Plots;
