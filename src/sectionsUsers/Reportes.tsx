import { Section } from "./Section";
import Reportes1 from "../assets/reportes1.png";
import Reportes2 from "../assets/reportes2.png";
import Reportes3 from "../assets/reportes3.png";
import Reportes4 from "../assets/reportes4.png";
import Reportes5 from "../assets/reportes5.png";

const reportes = [
    {
        title: "Vista de Reportes",
        content: (
            <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
                <div className="md:w-1/2 space-y-4">
                    <p className="text-base sm:text-lg text-gray-700">
                        El módulo de reportes ofrece un análisis visual e interactivo de los datos financieros y de salud de la finca. En esta vista encontraremos las siguientes opciones:
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>1. Reporte Financiero</strong><br />
                        - Proporciona un desglose de ingresos y gastos por lotes y para toda la finca.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>2. Reporte General de Salud</strong><br />
                        - Muestra el estado de las plantas y del suelo.
                    </p>
                </div>
                <div className="md:w-1/3">
                    <img
                        src={Reportes1}
                        alt="Sección de Fincas"
                        className="w-full rounded-lg shadow-md"
                    />
                </div>
            </div>
        )
    },
    {
        title: "Vista de Reporte Financiero",
        content: (
            <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
                <div className="md:w-1/2 space-y-4">
                    <p className="text-base sm:text-lg text-gray-700">
                        Esta vista incluye:
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>1. Información General</strong><br />
                        - Detalla el periodo del reporte y los lotes analizados.<br />
                        - Explica el propósito del reporte: un análisis completo de ingresos y gastos.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>2. Comparación de Ingresos y Gastos</strong><br />
                        - Sección visual con gráficos de barras que comparan ingresos y gastos por lote.
                    </p>
                </div>
                <div className="md:w-1/3">
                    <img
                        src={Reportes2}
                        alt="Sección de Fincas"
                        className="w-full rounded-lg shadow-md"
                    />
                </div>
            </div>
        )
    },
    {
        title: "Sección de Distribución de Categorías de Ingresos y Gastos por Lote",
        content: (
            <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
                <div className="md:w-1/2 space-y-4">
                    <p className="text-base sm:text-lg text-gray-700">
                        Esta sección presenta gráficos circulares para una visión detallada. Forma parte de la vista de reporte financiero:
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>1. Ingresos por Categoría</strong><br />
                        - Muestra el porcentaje de ingresos clasificados, como "Venta de café".
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>2. Gastos por Categoría</strong><br />
                        - Divide los gastos según su uso, como "Pagos a colaboradores".
                    </p>
                </div>
                <div className="md:w-1/3">
                    <img
                        src={Reportes3}
                        alt="Sección de Fincas"
                        className="w-full rounded-lg shadow-md"
                    />
                </div>
            </div>
        )
    },
    {
        title: "Sección de Resumen Financiero de la Finca",
        content: (
            <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
                <div className="md:w-1/2 space-y-4">
                    <p className="text-base sm:text-lg text-gray-700">
                        Esta sección forma parte de la vista de reporte financiero y está ubicada después de la sección de distribución de categorías de ingresos y gastos por lote. Incluye:
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>Resumen de Datos Financieros</strong><br />
                        - <strong>Total de Ingresos:</strong> Ejemplo, $1,320,000.<br />
                        - <strong>Total de Gastos:</strong> Ejemplo, $2,368.<br />
                        - <strong>Balance Financiero:</strong> Ejemplo, $1,317,632.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>Gráficos Circulares</strong><br />
                        - Representan la distribución de ingresos y gastos principales.
                    </p>
                </div>
                <div className="md:w-1/3">
                    <img
                        src={Reportes4}
                        alt="Sección de Fincas"
                        className="w-full rounded-lg shadow-md"
                    />
                </div>
            </div>
        )
    },
    {
        title: "Sección de Distribución de Gastos, Análisis y Conclusiones",
        content: (
            <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
                <div className="md:w-1/2 space-y-4">
                <p className="text-base sm:text-lg text-gray-700">
                        Esta sección es posterior a la sección de resumen financiero de la finca e incluye:
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>1. Distribución de Gastos</strong><br />
                        - Un gráfico circular divide los gastos principales, como "Pagos a colaboradores".
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>2. Análisis y Recomendaciones</strong><br />
                        - Incluye evaluaciones de rendimiento por lote.<br />
                        - Sugerencias para mejorar la sostenibilidad.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>3. Conclusiones</strong><br />
                        - Resumen del estado financiero con recomendaciones para el periodo analizado.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>4. Descarga en PDF</strong><br />
                        - Pulsa el botón PDF para obtener una copia descargable del reporte completo.
                    </p>
                </div>
                <div className="md:w-1/3">
                    <img
                        src={Reportes5}
                        alt="Sección de Fincas"
                        className="w-full rounded-lg shadow-md"
                    />
                </div>
            </div>
        )
    },
];

export const Reportes = () => (
    <Section title="Módulo de Reportes" subsections={reportes} />
);
