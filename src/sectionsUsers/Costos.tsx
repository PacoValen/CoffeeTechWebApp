import { Section } from "./Section";
import Costos1 from "../assets/costos1.png";
import Costos2 from "../assets/costos2.png";
import Costos3 from "../assets/costos3.png";

const costos = [
    {
        title: "Acceso a Costos",
        content: (
            <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
                <div className="md:w-1/2 space-y-4">
                <p className="text-base sm:text-lg text-gray-700">
                        Para acceder a la información de costos, sigue estos pasos:
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>1. Seleccionar Finca</strong><br />
                        Desde el menú de navegación ubicado en la parte inferior de la pantalla, selecciona la opción <strong>Fincas</strong>. Aparecerá un listado con todas las fincas registradas. Selecciona la finca de la cual deseas consultar los costos.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>2. Seleccionar Lote</strong><br />
                        Una vez seleccionada la finca, se mostrará un listado de lotes. Escoge el lote del cual necesitas la información de costos.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>3. Pantalla de Información del Lote</strong><br />
                        Al seleccionar el lote, accederás a la pantalla con la siguiente información:
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>a. Encabezado del Lote</strong><br />
                        - Nombre del lote (por ejemplo: "DesSur").<br />
                        - Ubicación general (por ejemplo: Colombia).<br />
                        - Un ícono de lápiz en un círculo rojo para editar la información del lote.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>b. Ubicación Geográfica</strong><br />
                        - Latitud y Longitud: Coordenadas exactas del lote.<br />
                        - Altitud: Altura sobre el nivel del mar.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>c. Menú de Acciones</strong><br />
                        - Floraciones: Accede a información relacionada con las floraciones del lote.<br />
                        - Labores culturales: Consulta tareas asignadas o completadas, como chequeos de salud o actividades de mantenimiento.<br />
                        - Costos: Ingresa a la información de costos del lote.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>4. Acceso a Costos</strong><br />
                        Presiona el botón <strong>Costos</strong> en el menú de acciones. Esto te redireccionará a la <strong>vista de transacciones</strong>, donde podrás consultar toda la información relacionada con los costos del lote.
                    </p>
                </div>
                <div className="md:w-1/3">
                    <img
                        src={Costos1}
                        alt="Sección de Fincas"
                        className="w-full rounded-lg shadow-md"
                    />
                </div>
            </div>
        )
    },
    {
        title: "Vista de transacciones",
        content: (
            <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
                <div className="md:w-1/2 space-y-4">
                    <p className="text-base sm:text-lg text-gray-700">
                        La sección de transacciones permite visualizar, filtrar y gestionar los movimientos financieros del lote.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>1. Consultar y Filtrar Transacciones</strong><br />
                        Usa los filtros para clasificar las transacciones en "Ingresos" o "Gastos". También puedes ordenar por fechas recientes.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>2. Editar o Agregar Transacciones</strong><br />
                        Para editar, toca el ícono de lápiz junto a la transacción correspondiente.<br />
                        Para agregar, pulsa el botón "+" en la parte inferior derecha de la pantalla, completa los campos requeridos y guarda la transacción.
                    </p>
                </div>
                <div className="md:w-1/3">
                    <img
                        src={Costos2}
                        alt="Sección de Fincas"
                        className="w-full rounded-lg shadow-md"
                    />
                </div>
            </div>
        )
    },
    {
        title: "Vista de Agregar Transacción",
        content: (
            <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
                <div className="md:w-1/2 space-y-4">
                    <p className="text-base sm:text-lg text-gray-700">
                        Esta vista permite registrar nuevos movimientos financieros.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>1. Campos del Formulario</strong><br />
                        - <strong>Tipo de Transacción:</strong> Selecciona entre "Ingreso" o "Gasto".<br />
                        - <strong>Categoría:</strong> Clasifica la transacción según su naturaleza, como "Venta de café".<br />
                        - <strong>Valor:</strong> Introduce el monto de la transacción.<br />
                        - <strong>Descripción:</strong> Agrega notas breves para identificar mejor la transacción.<br />
                        - <strong>Fecha:</strong> Selecciona el día exacto usando un calendario emergente.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>2. Pasos para Registrar una Transacción</strong><br />
                        - Pulsa el botón "+", completa todos los campos y selecciona "Crear".<br />
                        - Verifica que la nueva transacción aparezca en la lista.
                    </p>
                </div>
                <div className="md:w-1/3">
                    <img
                        src={Costos3}
                        alt="Sección de Fincas"
                        className="w-full rounded-lg shadow-md"
                    />
                </div>
            </div>
        )
    },
];

export const Costos = () => (
    <Section title="Módulo de Costos" subsections={costos} />
);
