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
                        <strong>Vista de Reportes:</strong><br/><br/>
                        <strong>- Reporte financiero:</strong><br/>Toca este botón para ver la información financiera de la finca. Esto te mostrará detalles sobre ingresos y
                        gastos.<br/><br/>
                        <strong>- Reporte general de salud:</strong><br/>Toca este botón para ver el estado de salud de la finca. Aquí encontrarás datos sobre la salud de las plantas y
                        del suelo.<br/><br/>
                        
                        Barra de Navegación (abajo de la pantalla)<br/>
                        - Inicio: Te lleva a la pantalla principal de la aplicación.<br/>
                        - Fincas: Te muestra la información de tu finca (donde estás ahora).<br/>
                        - Labores: Te permite ver las tareas programadas para la finca.
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
        title: "Vista de Reportes Financieros",
        content: (
            <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
                <div className="md:w-1/2 space-y-4">
                    <p className="text-base sm:text-lg text-gray-700">
                        - Periodo: Se muestra el periodo del reporte, desde el 01 de noviembre de 2024 hasta el 07 de noviembre de 2024.<br/><br/>
                        - Lotes Incluidos: Aparece el lote o los lotes que están incluidos en este reporte (aquí, solo el lote 1).<br/><br/>
                        - se proporciona una breve descripción del reporte. En este caso, explica que se analizarán los ingresos y gastos para el lote 1 y para la finca en general.<br/><br/>
                        - Sección 1: Comparación de Ingresos y Gastos por Lote:<br/>
                        En esta sección, puedes ver un gráfico que compara los ingresos y los gastos para cada lote incluido en el reporte.<br/><br/>
                        Para este ejemplo, el gráfico muestra una barra verde con el valor 1,320,000 (monto en moneda local), que representa los ingresos o gastos del lote 1.
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
        title: "Vista de Distribución de Categorías de Ingresos y Gastos por lote",
        content: (
            <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
                <div className="md:w-1/2 space-y-4">
                    <p className="text-base sm:text-lg text-gray-700">
                        En esta sección del Reporte Financiero, puedes ver cómo se distribuyen los ingresos y gastos por categorías para cada lote. En este caso, se muestra el lote 1.<br/><br/>
                        <strong>- Ingresos por Categoría:</strong><br/>
                        Este gráfico circular muestra de dónde vienen los ingresos. En este ejemplo, el 100% de los ingresos provienen de la Venta de café.<br/><br/>
                        <strong>- Gastos por Categoría:</strong><br/>
                        Este gráfico circular indica en qué se gasta el dinero. En este ejemplo, los gastos también están clasificados por categoría.
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
        title: "Vista de Resumen Financiero de la Finca",
        content: (
            <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
                <div className="md:w-1/2 space-y-4">
                    <p className="text-base sm:text-lg text-gray-700">
                        Resumen de Datos Financieros:<br/>
                        - Total, Ingresos: $1,320,000<br/>
                        - Total, Gastos: $2,368<br/>
                        - Balance Financiero: $1,317,632 (resultado de restar los gastos de los ingresos)<br/><br/>
                        Distribución de Ingresos y Gastos de la Finca:<br/>
                        - Se presenta un gráfico circular que muestra la fuente principal de ingresos o gastos.<br/>
                        - En este ejemplo, el 100% de los ingresos proviene de la Venta de café.
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
        title: "Vista de Distribución de Gastos, Análisis y conclusiones",
        content: (
            <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
                <div className="md:w-1/2 space-y-4">
                    <p className="text-base sm:text-lg text-gray-700">
                        Esta es la última sección del Reporte Financiero. Aquí encontrarás el desglose de gastos, análisis del rendimiento y recomendaciones para la finca.<br/><br/>
                        Distribución de Gastos de la Finca:<br/>
                        - Se presenta un gráfico circular que muestra el destino principal de los gastos.<br/>
                        - En este ejemplo, el 100% de los gastos está destinado a Pagos a colaboradores.<br/><br/>
                        Análisis y Recomendaciones:<br/>
                        - Aquí se ofrece una evaluación sobre el rendimiento de los lotes.<br/>
                        - Para el lote 1, el rendimiento es calificado como Excelente. Se recomienda mantener o incrementar la inversión en este lote debido a su buen desempeño.<br/><br/>
                        Conclusiones:<br/>
                        - Esta sección proporciona un resumen general de la situación económica de la finca.<br/>
                        - El reporte cubre el periodo del 01 al 07 de noviembre de 2024.<br/>
                        - Basado en el análisis, se recomienda implementar las acciones propuestas para mejorar el rendimiento financiero y asegurar la sostenibilidad y crecimiento de la finca.<br/><br/>
                        Botón PDF:<br/>
                        En la esquina inferior derecha, el botón "PDF" permite descargar esta sección completa en formato PDF.
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
