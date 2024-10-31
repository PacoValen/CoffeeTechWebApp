import { Section } from "./Section";
import Flora1 from "../assets/flora1.png";
import Flora2 from "../assets/flora2.png";
import Flora3 from "../assets/flora3.png";
import Flora4 from "../assets/flora4.png";
import Flora5 from "../assets/flora5.png";
import Flora6 from "../assets/flora6.png";
import Flora7 from "../assets/flora7.png";

const floraciones = [
    {
        title: "Acceso a la Sección de Fincas",
        content: (
            <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
                <div className="md:w-1/2 space-y-4">
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>- Pantalla Inicial: </strong>Una vez dentro de la aplicación, navega hasta la pestaña "Fincas" ubicada en la barra inferior, identificada con un icono de hoja.<br />
                        <strong>- Búsqueda de Finca: </strong>Si tienes varias fincas registradas, puedes buscar una finca específica escribiendo su nombre en la barra de búsqueda que dice "Buscar finca por nombre".<br />
                        <strong>- Filtro por Roles: </strong>También puedes filtrar las fincas según tu rol (por ejemplo, "Propietario") utilizando el menú desplegable "Todos los roles".<br />
                        <strong>- Seleccionar Finca: </strong>Toca la finca que deseas gestionar para acceder a los detalles.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>Primer paso: </strong>Cuando ingresas al módulo “finca Q” automáticamente te va a direccionar a la siguiente vista.
                    </p>
                </div>
                <div className="md:w-1/3">
                    <img src={Flora1} alt="Sección de Fincas" className="w-full rounded-lg shadow-md" />
                </div>
            </div>
        )
    },
    {
        title: "Visualización de Detalles de la Finca",
        content: (
            <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
                <div className="md:w-1/2 space-y-4">
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>- Vista de la Finca Seleccionada: </strong>Al seleccionar una finca, verás información relevante como su nombre, rol y la lista de lotes asociados.<br />
                        <strong>- Opciones de Gestión: </strong>Aquí podrás acceder a "Información General", "Colaboradores" y "Reportes".<br />
                        <strong>- Acceso a Lotes: </strong>Desplázate hacia abajo hasta la sección "Lotes" y selecciona el lote que deseas gestionar.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>Segundo paso: </strong>Después de haber seleccionado el lote en la sección de Lotes automáticamente te va a direccionar a la siguiente vista.
                    </p>
                </div>
                <div className="md:w-1/3">
                    <img src={Flora2} alt="Sección Detalles de la Finca" className="w-full rounded-lg shadow-md" />
                </div>
            </div>
        )
    },
    {
        title: "Gestión de Lotes",
        content: (
            <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
                <div className="md:w-1/2 space-y-4">
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>- Visualizar Información del Lote: </strong>Al ingresar a un lote, podrás ver su información general y ubicación, incluyendo la latitud, longitud y altitud.<br />
                        <strong>- Historial de Floraciones: </strong>En la sección de "Floraciones", selecciona la opción para ver el historial de floraciones anteriores.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>Tercer paso: </strong>Cuando seleccionas el botón rojo “Floraciones” te va direccionar a una vista donde puedes especificar el tipo de floración de tu finca.
                    </p>
                </div>
                <div className="md:w-1/3">
                    <img src={Flora3} alt="Sección Gestión de Lotes" className="w-full rounded-lg shadow-md" />
                </div>
            </div>
        )
    },
    {
        title: "Filtrar y Visualizar Floraciones",
        content: (
            <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
                <div className="md:w-1/2 space-y-4">
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>- Historial de Floraciones: </strong>Al acceder al historial, puedes filtrar las floraciones por tipo (por ejemplo, "Principal" o "Mitaca") y ordenar por "Más reciente".<br />
                        <strong>- Seleccionar Tipo de Floración: </strong>Al presionar el botón "Todos los tipos", se desplegará una lista para elegir el tipo de floración que deseas visualizar.<br />
                        <strong>- Visualización de Resultados: </strong>Una vez aplicado el filtro, la lista mostrará únicamente las floraciones que corresponden a los criterios seleccionados.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>Cuarto paso: </strong>Después de hacer todo el paso a paso de esta vista procedemos a presionar el botón rojo con la cruz blanca para que nos direccione a la siguiente vista “Agregar floración”
                    </p>
                </div>
                <div className="md:w-1/3">
                    <img src={Flora4} alt="Sección Filtrar y Visualizar Floraciones" className="w-full rounded-lg shadow-md" />
                </div>
            </div>
        )
    },
    {
        title: "Agregar una Floración",
        content: (
            <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
                <div className="md:w-1/2 space-y-4">
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>1. Formulario de Floración: </strong>Al presionar el botón de agregar, se abrirá un formulario titulado "Agregar Floración".<br />
                        <strong>2. Seleccionar Tipo de Floración: </strong>Toca el menú desplegable y selecciona el tipo de floración (por ejemplo, "Principal" o "Mitaca").<br />
                        <strong>3. Fecha de Floración: </strong>Ingresa la fecha de inicio de la floración utilizando el selector de fecha.<br />
                        <strong>4. Fecha de Cosecha (Opcional): </strong>Ingresa la fecha estimada de cosecha si está disponible, aunque este campo es opcional.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>Quinto paso: </strong>Después de haber hecho todo el debido proceso procedemos a seleccionar el botón de “Crear” en donde se nos va a direccionar a la vista de validaciones de cosecha.
                    </p>
                </div>
                <div className="md:w-1/3">
                    <img src={Flora5} alt="Lista de colaboradores" className="w-full rounded-lg shadow-md" />
                </div>
            </div>
        )
    },
    {
        title: "Validaciones en la Fecha de Cosecha",
        content: (
            <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
                <div className="md:w-1/2 space-y-4">
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>- Fecha de Cosecha y Reglas: </strong>La fecha de cosecha debe ser al menos 24 semanas después de la fecha de floración. Si no se cumple esta regla, aparecerá un mensaje en rojo indicando el error.<br />
                        <strong>- Error: Menos de 24 Semanas: </strong>Si intentas ingresar una fecha de cosecha antes del periodo mínimo, la aplicación mostrará el mensaje "La fecha de cosecha debe ser al menos 24 semanas después de la fecha de floración" y deshabilitará el botón de "Crear".<br />
                        <strong>- Error: Cosecha Demorada: </strong>Si la fecha de cosecha supera las 32 semanas desde la floración, se mostrará un mensaje que indica que "Su lote debió ser cosechado mucho antes, se pasa de 32 semanas desde la floración"
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>Sexto paso: </strong>Después de haber registrado la respectiva información vamos a finalizar el proceso en la siguiente vista llamada “Finalización de registro de floración.”
                    </p>
                </div>
                <div className="md:w-1/3">
                    <img src={Flora6} alt="Sección Validaciones en la Fecha de Cosecha" className="w-full rounded-lg shadow-md" />
                </div>
            </div>
        )
    },
    {
        title: "Finalización del Registro de Floración",
        content: (
            <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
                <div className="md:w-1/2 space-y-4">
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>- Confirmar y Guardar: </strong>Una vez que hayas ingresado los datos correctamente y la fecha de cosecha cumpla con las reglas establecidas, el botón "Crear" estará habilitado.<br />
                        <strong>- Guardar la Floración: </strong>Presiona "Crear" para guardar la nueva floración en el historial.<br />
                        <strong>- Ver Floración Registrada: </strong>La nueva floración aparecerá en el "Historial de Floraciones" del lote, mostrando el tipo de floración, su estado y la fecha correspondiente.
                    </p>
                </div>
                <div className="md:w-1/3">
                    <img src={Flora7} alt="Sección Finalización del Registro de Floración" className="w-full rounded-lg shadow-md" />
                </div>
            </div>
        )
    }
];

export const Floraciones = () => (
    <Section title="Módulo de Floraciones" subsections={floraciones} />
);
