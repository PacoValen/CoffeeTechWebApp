import { Section } from "./Section";
import LaborCultural1 from "../assets/laborCultural1.png";
import LaborCultural2 from "../assets/laborCultural2.png";
import LaborCultural3 from "../assets/laborCultural3.png";
import LaborCultural4 from "../assets/laborCultural4.png";
import LaborCultural5 from "../assets/laborCultural5.png";
import LaborCultural6 from "../assets/laborCultural6.png";
import LaborCultural7 from "../assets/laborCultural7.png";
import LaborCultural8 from "../assets/laborCultural8.png";
import LaborCultural9 from "../assets/laborCultural9.png";
import LaborCultural10 from "../assets/laborCultural10.png";

const laboresCulturales = [
    {
        title: "Pantalla de Bienvenida de CoffeeTech",
        content: (
            <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
                <div className="md:w-1/2 space-y-4">
                    <p className="text-base sm:text-lg text-gray-700">
                        Aquí se destacan las opciones principales: <br />
                        <strong>- Descargar manual: </strong>Botón para descargar el manual de usuario.<br />
                        <strong>- Más información: </strong>Proporciona detalles adicionales sobre las funciones de CoffeeTech.
                    </p>

                    <p className="text-base sm:text-lg text-gray-700">
                        Chequeos de salud con IA: Detecta plagas, deficiencias nutricionales y maduración de los cultivos usando inteligencia artificial.<br />
                        <strong>- Gestiona tus fincas y lotes: </strong>Organiza fincas y lotes, asigna colaboradores, y programa tareas y chequeos.<br />
                        <strong>- Añade colaboradores: </strong>Permite agregar usuarios en roles específicos para facilitar la gestión en campo.
                    </p>

                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>Primer paso: </strong>Tener en cuenta que para poder agregar una labor hay que tener a un colaborador activo.
                    </p>
                </div>
                <div className="md:w-1/3">
                    <img
                        src={LaborCultural1}
                        alt="Sección de Fincas"
                        className="w-full rounded-lg shadow-md"
                    />
                </div>
            </div>
        )
    },
    {
        title: "Sección de Mis Tareas",
        content: (
            <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
                <div className="md:w-1/2 space-y-4">
                    <p className="text-base sm:text-lg text-gray-700">
                        Dentro de la aplicación, donde se organizan las tareas de labor cultural. A continuación, se explica cada elemento: <br />
                        <strong>- Barra de búsqueda ("Buscar tarea por 'Asignado a'"): </strong>Permite buscar tareas específicas asignadas a un colaborador en particular, facilitando la gestión de tareas por persona.<br />
                        <strong>- Filtros: </strong><br />
                        <strong> - "Todas las fincas": </strong>Este filtro permite seleccionar tareas de una finca específica o de todas las fincas.<br />
                        <strong> - "Todos los lotes": </strong>Permite seleccionar tareas por lote, mostrando así tareas de un lote específico o de todos los lotes en general.<br />
                        <strong> - "Más reciente": </strong>Ordena las tareas por la fecha más reciente o más antigua, ayudando a priorizar tareas.<br />
                        <strong>- Mensaje de no tareas: </strong><br />
                        - En la parte inferior, el mensaje <strong>"No hay tareas de labor cultural para mostrar"</strong> indica que actualmente no hay tareas programadas o pendientes de realizar en la sección de labores culturales, de acuerdo con los filtros seleccionados.<br />
                        <strong>- Menú inferior: </strong><br />
                        <strong> - Inicio, Fincas, Labores, Reportes: </strong>Navegación rápida a otras secciones de la aplicación para gestionar diferentes aspectos.
                    </p>
                </div>
                <div className="md:w-1/3">
                    <img
                        src={LaborCultural2}
                        alt="Sección Detalles de la Finca"
                        className="w-full rounded-lg shadow-md"
                    />
                </div>
            </div>
        )
    },
    {
        title: "Información de Lote",
        content: (
            <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
                <div className="md:w-1/2 space-y-4">
                    <p className="text-base sm:text-lg text-gray-700">
                        Se muestra información detallada sobre un lote específico de la finca "finca Q".<br />
                        <strong>- Información general del lote: </strong>Aquí se presenta el nombre del lote ("lote 1") y su ubicación geográfica en Colombia. Hay un ícono de lápiz rojo a la derecha que permite editar esta información.<br />
                        <strong>- Ubicación: </strong>Muestra las coordenadas de latitud, longitud y altitud exactas del lote, lo cual es útil para la ubicación y gestión en campo. El ícono de lápiz rojo también permite editar estos detalles.<br />
                        <strong>- Botones para navegar a secciones específicas: </strong><br />
                        <strong> - Floraciones: </strong>Acceso directo para ver información relacionada con las floraciones en este lote.<br />
                        <strong> - Labores culturales: </strong>Permite acceder a las tareas culturales asignadas o completadas en el lote, como chequeos de salud o actividades de mantenimiento.<br />
                        <strong>- Historial de detecciones: </strong>Esta sección proporciona un registro de actividades o problemas detectados en el lote.
                    </p>
                </div>
                <div className="md:w-1/3">
                    <img
                        src={LaborCultural3}
                        alt="Sección Gestión de Lotes"
                        className="w-full rounded-lg shadow-md"
                    />
                </div>
            </div>
        )
    },
    {
        title: "Sección de tarea labor cultural",
        content: (
            <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
                <div className="md:w-1/2 space-y-4">
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>1. Búsqueda y filtros: </strong><br />
                        - En la parte superior se encuentra una barra de búsqueda que permite al usuario buscar tareas filtrando por la persona a la que están asignadas.<br />
                        - Debajo, hay dos filtros adicionales:<br />
                        <strong> - Filtro de Estado: </strong>Permite elegir entre mostrar todas las tareas, solo las tareas "Por hacer" o las tareas "Terminadas".<br />
                        <strong> - Filtro de Orden: </strong>Permite ordenar las tareas de acuerdo a su fecha, mostrando las más recientes primero o las más antiguas.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>2. Mensaje de sin tareas: </strong><br />
                        - En esta pantalla, aparece el mensaje "No hay tareas de labor cultural para mostrar," lo que indica que no hay tareas disponibles para este lote en este momento, ya sea porque no se han creado o porque no cumplen con los filtros seleccionados.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>3. Botón agregar tarea: </strong><br />
                        - En la esquina inferior derecha, hay un botón rojo con el símbolo “+” que permite al usuario añadir una nueva tarea cultural para este lote.
                    </p>
                </div>
                <div className="md:w-1/3">
                    <img
                        src={LaborCultural4}
                        alt="Sección Filtrar y Visualizar Floraciones"
                        className="w-full rounded-lg shadow-md"
                    />
                </div>
            </div>
        )
    },
    {
        title: "Añadir labores",
        content: (
            <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
                <div className="md:w-1/2 space-y-4">
                    <p className="text-base sm:text-lg text-gray-700">
                        - Pantalla <strong>"Añadir labor: Seleccionar tipo de labor cultural": </strong>Esta pantalla permite seleccionar el tipo de labor cultural que se va a realizar en el lote. El usuario puede elegir entre diferentes opciones, como "Chequeo de salud" o "Chequeo de estado de maduración". Una vez seleccionado, el botón "Siguiente" permanece desactivado hasta completar todos los campos necesarios.<br />
                        - Pantalla <strong>"Añadir labor: Seleccionar fecha": </strong>Tras seleccionar el tipo de labor cultural, el usuario debe ingresar la fecha en la que se realizará la tarea. El campo de fecha es obligatorio para avanzar. Esto permite una mejor planificación y gestión de las actividades en el lote.<br />
                        - Pantalla <strong>"Añadir labor: Mensaje de error de colaboradores": </strong>Si no hay colaboradores asignados a la finca, esta pantalla muestra un mensaje en rojo que indica: "Usted no tiene colaboradores operadores de campo en su finca, agréguelos para continuar". Esto informa al usuario que debe añadir colaboradores antes de poder avanzar con la creación de la labor.
                    </p>
                </div>
                <div className="md:w-1/3">
                    <img
                        src={LaborCultural5}
                        alt="Sección Añadir labores"
                        className="w-full rounded-lg shadow-md"
                    />
                </div>
            </div>
        )
    },
    {
        title: "Sección de Mis tareas",
        content: (
            <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
                <div className="md:w-1/2 space-y-4">
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>- Vista de mis tareas (Primera imagen): </strong>Muestra las tareas asignadas, con detalles como el nombre de la tarea, el responsable de asignación, la fecha, la finca y el lote. El botón "Comenzar" te permite iniciar la tarea directamente.<br />
                        <strong>- Filtro de fincas (Segunda imagen): </strong>Permite filtrar las tareas según la finca seleccionada. En este caso, puedes elegir entre "Todas las fincas" o una finca específica (Pruebas tareas 1).<br />
                        <strong>- Filtro de lotes (Tercera imagen): </strong>Filtra las tareas según el lote, mostrando "Todos los lotes" o un lote específico (lote 1), para localizar las tareas de ese lote en particular.<br />
                        <strong>- Orden de tareas (Cuarta imagen): </strong>Permite ordenar las tareas por "Más reciente" o "Más antiguo" para organizar la visualización según la fecha, facilitando encontrar las tareas más recientes o antiguas primero, Después de presionar el botón comenzar nos va a direccionar a la vista <strong>“Añadir labor”</strong>
                    </p>
                </div>
                <div className="md:w-1/3">
                    <img
                        src={LaborCultural6}
                        alt="Sección de Mis tareas"
                        className="w-full rounded-lg shadow-md"
                    />
                </div>
            </div>
        )
    },
    {
        title: "Visualización de tareas en lote",
        content: (
            <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
                <div className="md:w-1/2 space-y-4">
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>- Pantalla inicial de tareas: </strong><br />
                        - La primera pantalla muestra una lista de tareas asignadas a un lote específico de una finca.<br />
                        - El usuario puede ver detalles básicos de cada tarea, como el tipo de chequeo (por ejemplo, "Chequeo de Salud"), el nombre del colaborador asignado (por ejemplo, "Brayan Trujillo"), el estado de la tarea (en este caso, "Por hacer"), y la fecha asignada para la tarea.<br />
                        - En la parte inferior derecha, hay un ícono de lápiz, que permite al usuario editar el tipo de labor cultural.<br />
                        - Al seleccionar la tarea desde la lista, el usuario ingresa a una pantalla de edición.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        <strong>- Cambiar el Tipo de labor cultural: </strong>Seleccionar entre opciones como "Chequeo de Salud" o "Chequeo de estado de maduración"<br />
                        <strong>- Actualizar la Fecha de finalización: </strong>Se puede modificar la fecha para la cual se espera que la tarea esté completada.<br />
                        <strong>- Asignar o cambiar colaborador: </strong>Elegir o modificar el colaborador asignado a la tarea, lo cual es útil si se necesita reasignar la labor a otra persona.
                    </p>
                    <p className="text-base sm:text-lg text-gray-700">
                        En esta sección, el usuario tiene dos opciones:<br />
                        <strong>- Guardar Cambios: </strong>Si se realizaron modificaciones, puede guardarlas seleccionando el botón "Guardar".<br />
                        <strong>- Eliminar la tarea: </strong>Si decide que la tarea ya no es necesaria, puede seleccionar la opción de "Eliminar".<br />
                        - Si el usuario elige "Eliminar", aparece una advertencia importante indicando que esta acción es irreversible. Esto significa que todos los datos relacionados con esta labor se perderán definitivamente.
                    </p>
                </div>
                <div className="md:w-1/3">
                    <img
                        src={LaborCultural8}
                        alt="Sección de Visualización de tareas en lote"
                        className="w-full rounded-lg shadow-md"
                    />
                    <img
                        src={LaborCultural9}
                        alt="Sección de Visualización de tareas en lote 2"
                        className="w-full rounded-lg shadow-md"
                    />
                    <img
                        src={LaborCultural10}
                        alt="Sección de Visualización de tareas en lote 3"
                        className="w-full rounded-lg shadow-md"
                    />
                </div>
            </div>
        )
    }
];

export const LaboresCulturales = () => (
    <Section title="Módulo de Labores Culturales" subsections={laboresCulturales} />
);
