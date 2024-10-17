import { Section } from "./Section";
import Colab1 from "../assets/colab1.png";
import Colab2 from "../assets/colab2.png";
import Colab3 from "../assets/colab3.png";
import Colab4 from "../assets/colab4.png";
import Colab5 from "../assets/colab5.png";
import Colab6 from "../assets/colab6.png";


const colaboradores = [

  {
    title: "Finca y Rol",
    content: (
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
        <div className="md:w-1/2 space-y-4">
          <p className="text-base sm:text-lg text-gray-700">
          En la parte superior, se mostrará el nombre de la finca (Por ejemplo, “Prueba 2”) y tu rol dentro de la finca (Por ejemplo, “Administrador de la finca”).
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src={Colab1}
            alt="Buscar Colaborador"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    )
  },
  {
    title: "Buscar Colaborador",
    content: (
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
        <div className="md:w-1/2 space-y-4">
          <p className="text-base sm:text-lg text-gray-700">
          Usa el campo “Buscar colaborador por nombre” para encontrar rápidamente a un colaborador específico dentro de la finca.
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src={Colab2}
            alt="Buscar Colaborador"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    )
  },
  {
    title: "Filtro de Roles",
    content: (
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
        <div className="md:w-1/2 space-y-4">
          <p className="text-base sm:text-lg text-gray-700">
          Te permite seleccionar un rol en particular para asignarle a una función específica a cada usuario de la aplicación.
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src={Colab3}
            alt="Buscar Colaborador"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    )
  },
  {
    title: "Lista de colaboradores",
    content: (
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
        <div className="md:w-1/2 space-y-4">
          <p className="text-base sm:text-lg text-gray-700">
            Aquí verás la lista de las personas que trabajan en
            la finca. Cada entrada mostrará:<br/><br/>
            Nombre del colaborador. <br/>- Rol dentro de la finca (ejemplo: “Operador de campo” o Administrador de finca”) <br/> - Si necesitas cambiar la información de un colaborador, como su nombre, correo o rol, solo presiona el ícono del lápiz rojo. 
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src={Colab4}
            alt="Lista de colaboradores"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    )
  },
  {
    title: "Editar Colaborador",
    content: (
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
        <div className="md:w-1/2 space-y-4">
          <p className="text-base sm:text-lg text-gray-700">
          - Correo”: Aquí puedes modificar su correo electrónico.<br/>- Rol asignado: Usa el menú desplegable para cambiar el rol del colaborador.<br/>- “Guardar”: Presiona este botón para guardar cualquier cambio que hayas hecho.<br/>- “Eliminar” Si necesitas eliminar los datos del colaborador, presiona este botón.
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src={Colab5}
            alt="Lista de colaboradores"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    )
  },
  
  {
    title: "Agregar Colaborador",
    content: (
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
        <div className="md:w-1/2 space-y-4">
          <p className="text-base sm:text-lg text-gray-700">
          <strong>- Correo:</strong> En este campo debes ingresar el correo electrónico del colaborador que deseas agregar a la finca. Es un campo de texto donde escribirás la dirección del correo del nuevo miembro.<br/><strong>- Rol asignado:</strong> Debajo del campo de correo, hay un menú despegable donde permite seleccionar el rol que tendrá el colaborador dentro de la finca, Aquí puedes elegir entre las distintas opciones de roles disponibles, según las funciones que el colaborador desempeñará. <br/><strong>- Botón de crear:</strong> Una vez que hayas ingresado el correo electrónico y asignado el rol puedes presionar el botón que dice “Crear” para añadir el colaborador y guardar lainformación.
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src={Colab6}
            alt="Agregar Colaborador"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    )
  }
];


export const Colaboradores = () => (
  <Section title=" Módulo de Colaboradores" subsections={colaboradores} />
);