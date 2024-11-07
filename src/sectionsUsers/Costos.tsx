import { Section } from "./Section";
import Costos1 from "../assets/costos1.png";
import Costos2 from "../assets/costos2.png";
import Costos3 from "../assets/costos3.png";
import Costos4 from "../assets/costos4.png";

const costos = [
    {
        title: "Vista Inicial",
        content: (
            <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
                <div className="md:w-1/2 space-y-4">
                    <p className="text-base sm:text-lg text-gray-700">
                    Esta pantalla muestra la información detallada de un lote específico en la finca "Villa Claudia". A continuación, se describen sus secciones y funcionalidades principales: <br />
                        <strong>- Encabezado (Información de Lote)</strong><br/>Indica que se está visualizando la información del lote dentro de la finca especificada.<br />
                        <strong>- Información General</strong><br/>Muestra el nombre del lote (en este caso, "DesSur") y la ubicación general (Colombia).<br/>
                        Hay un icono de lápiz en un círculo rojo, que permite editar la información general del lote.<br/>
                        <strong>- Ubicación</strong><br/>Proporciona las coordenadas de ubicación específicas del lote:<br/>Latitud y Longitud: Coordenadas geográficas precisas.<br/>Altitud: Altitud sobre el nivel del mar.
                    </p>

                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>Primer paso: </strong>Seleccionamos botón rojo de “Costos” donde automáticamente nos direccionará a la vista que estará reflejada en la parte de abajo.
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
                    <strong>- Saldo Total</strong><br />Muestra el saldo actual para el lote, en este caso, <strong>$400,000.00</strong>, que es el resultado de ingresos menos gastos.<br/><br/>
                    <strong>- Filtros</strong><br /><strong>Todos:</strong> Permite ver tanto ingresos como gastos.<br /><strong>Más reciente:</strong> Ordena las transacciones de la más reciente a la más antigua.<br /><br />
                    <strong>- Lista de Transacciones</strong><br/><strong>Gasto:</strong> Aparece en rojo y se detalla como:<br /><strong>Categoría:</strong> Fertilizantes.<br /><strong>Descripción:</strong> Abono F70.<br /><strong>Monto:</strong> $3,800,000, registrado el 5 de noviembre de 2024.<br /><strong>Icono de Lápiz:</strong> Permite editar esta transacción.<br /><br /><strong>Ingreso:</strong> Aparece en verde y se detalla como:<br /><strong>Categoría:</strong> Venta de café.<br /><strong>Descripción:</strong> Venta de 3 cargas.<br /><strong>Monto:</strong> $4,200,000, registrado el 1 de noviembre de 2024.<br /><strong>Icono de Lápiz:</strong> Permite editar esta transacción.<br /><br />
                    <strong>- Botón de Añadir Nueva Transacción</strong><br />En la esquina inferior derecha, el botón rojo con el signo "+" permite agregar una nueva transacción al lote.<br /><br />
                    <strong>- Menú de Navegación Inferior</strong><br />- Ofrece acceso rápido a las diferentes secciones de la aplicación:<br /><strong>- Inicio:</strong> Pantalla principal de la aplicación.<br /><strong>- Fincas:</strong> Vista de fincas y lotes.<br /><strong>- Labores:</strong> Acceso a tareas y labores culturales.<br /><strong>- Reportes:</strong> Visualización de reportes financieros y de actividades.
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
        title: "Vista de agregar transacción 1",
        content: (
            <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
                <div className="md:w-1/2 space-y-4">
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>- Tipo de Transacción:</strong> Permite seleccionar entre "Ingreso" o "Gasto". Al pulsar en el campo se despliega un menú con estas opciones. Esta selección determina el tipo de transacción que se registrará.<br /><br />
                        <strong>- Categoría:</strong> Este campo despliega un menú de categorías relacionadas con el tipo de transacción seleccionado. Por ejemplo, para un ingreso, puede haber categorías como "Venta de café". Esto ayuda a clasificar cada transacción según su naturaleza.<br /><br />
                        <strong>- Valor:</strong> En este campo, el usuario ingresa el monto de la transacción. Debe ser un valor numérico que representa la cantidad de dinero involucrada en la transacción.<br /><br />
                        <strong>- Descripción:</strong> Campo para añadir una breve nota o descripción sobre la transacción, como "venta 1 carga café". Esto facilita la identificación de cada transacción en los registros.<br /><br />
                        <strong>- Fecha:</strong> Aquí se debe seleccionar la fecha en la que se realizó la transacción. El campo aparece inicialmente vacío y permite seleccionar la fecha mediante un calendario emergente.
                    </p>

                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>Ejemplo de flujo de trabajo:</strong><br /><strong>Seleccionar el tipo de transacción:</strong> Tocar el campo "Tipo" y elegir entre "Ingreso" o "Gasto".<br /><strong>Seleccionar la categoría:</strong> Tocar el campo "Categoría" y elegir la opción que mejor describa la transacción.<br /><strong>Ingresar el valor:</strong> Escribir el monto correspondiente en el campo "Valor".<br /><strong>Añadir descripción:</strong> Ingresar una breve descripción para identificar mejor la transacción.<br /><strong>Elegir fecha:</strong> Tocar en el campo "Fecha" y seleccionar la fecha deseada en el calendario emergente.
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
    {
        title: "Vista de agregar transacción 2",
        content: (
            <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
                <div className="md:w-1/2 space-y-4">
                    <p className="text-base sm:text-lg text-gray-700">
                    <strong>Vista de agregar transacción:</strong><br /><br />
                    <strong>Agregar Transacción:</strong><br/>- Toca el botón "+" en la vista principal para abrir el formulario.<br />
                    - Completa los campos: <strong>Tipo, Categoría, Valor, Descripción y Fecha.</strong><br />
                    - Presiona <strong>Crear</strong> para guardar la transacción.<br/><br/>
                    <strong>- Verificar Transacción:</strong> Revisa la lista para confirmar que la nueva transacción esté registrada con los datos correctos.<br/><br/>
                    <strong>- Filtrar y Ordenar Transacciones:</strong> Usa los filtros de Tipo (Ingreso/Gasto) y Fecha (Más reciente) para ver transacciones específicas.<br/><br/>
                    <strong>- Editar Transacción (Opcional):</strong> Pulsa el icono de lápiz en la transacción que deseas modificar, haz los cambios y guarda.<br />
                    </p>
                </div>
                <div className="md:w-1/3">
                    <img
                        src={Costos4}
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
