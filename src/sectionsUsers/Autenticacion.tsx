import { Section } from "./Section";
import Descarga from "../assets/Descarga.jpg";
import Desconocidas from "../assets/Desconocidas.png";
import Registrarse1 from "../assets/Registrarse1.png";
import Token from "../assets/Token.png";
import Inicio from "../assets/Inicio.png";
import Reestablecer1 from "../assets/Reestablecer1.png";
import Reestablecer2 from "../assets/Reestablecer2.png";
import Reestablecer3 from "../assets/Reestablecer3.png";
import IrMenu from "../assets/irmenu.jpg";
import Perfil from "../assets/perfil.jpg";
import GuardarPerfil from "../assets/guardarPerfil.jpg";
import Cerrar from "../assets/cerrar.jpg";
import CambiarSeña from "../assets/cambiarSeña.jpg";
import GuardarSeña from "../assets/guardarSeña.jpg";

const autenticacion = [
  {
    title: " Descarga del APK",
    content: (
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
        <div className="md:w-1/2 space-y-4">
          <p className="text-base sm:text-lg text-gray-700">
            1. Estando en la pantalla de descarga, haga clic en el botón 
            <strong> "Descargar Coffee Tech" </strong> para comenzar la descarga del archivo APK.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            2. Una vez descargado, localice el archivo APK en su dispositivo 
            (generalmente se ubica en la carpeta "Descargas").
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src={Descarga}
            alt="Botón de descarga de Coffee Tech"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    )
  },
  {
    title: "Activar permisos de instalación",
    content: (
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
        <div className="md:w-1/2 space-y-4">
          <p className="text-base sm:text-lg text-gray-700">
            1. Vaya a  &#62;  
            <strong> Configuración </strong> <strong> Seguridad</strong> en su dispositivo Android.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            2. Active la opción de "Fuentes desconocidas" 
            para permitir la instalación de aplicaciones externas a Google Play. 
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            3. En ocasiones al abrir el archivo APK aparece un recuadro directamente en su pantalla 
            para decidir si otorgar o no permisos a las aplicaciones externas a Google Play. 
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src={Desconocidas}
            alt="Botón de descarga de Coffee Tech"
            className="w-full rounded-lg shadow-md"
          />
        </div>
      </div>
    )
  },
  {
    title: "Instalación del APK",
    content: (
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
        <div className="md:w-1/2 space-y-4">
          <p className="text-base sm:text-lg text-gray-700">
            1. Abra el archivo APK previamente descargado.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            2. Siga las instrucciones en pantalla para completar la instalación.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Confirmar permisos",
    content: (
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
        <div className="md:w-1/2 space-y-4">
          <p className="text-base sm:text-lg text-gray-700">
            1. Mientras ejecuta la aplicación, se le pedirá confirmar los permisos que requiere la aplicación.
             Revise y otorgue los permisos necesarios para un uso optimo.
          </p>
        </div>
      </div>
    )
  },
  {
    title: "Registro de Usuario",
    content: (
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
        <div className="md:w-1/2 space-y-4">
          <p className="text-base sm:text-lg text-gray-700">
            1. Abra la aplicación y seleccione la opción <strong>"Registrarse"</strong>
             que aparece en la parte inferior de la pantalla.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            2. Ingrese su nombre completo, correo electrónico válido, y contraseña, 
            teniendo en cuenta que la contraseña debe cumplir con los requisitos mínimos de seguridad 
            (mínimo 8 caracteres con al menos una mayúscula, un número y un carácter especial).
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            3. Confirme su contraseña en el campo correspondiente.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            4. Presione el botón <strong>"Registrarse".</strong>
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            5. Recibirá a su correo un mensaje de autenticación, el cual llevará un código 
            (token) que deberá pegar en el campo requerido; siga las instrucciones para activar su cuenta.
          </p>
        </div>
        <div className="md:w-1/3 space-y-6 md:mr-6">
          <div className="flex justify-center">
            <img
              src={Registrarse1}
              alt="Pantalla de registro en Coffee Tech"
              className="w-full max-w-[100px] rounded-lg shadow-md"
            />
          </div>

          <div className="flex justify-center">
            <img
              src={Token}
              alt="Formulario de confirmación de contraseña"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Iniciar Sesión",
    content: (
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
        <div className="md:w-1/2 space-y-4">
          <p className="text-base sm:text-lg text-gray-700">
            1. Al verificar el correo, automáticamente regresa a la pantalla principal.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            2. Introduzca su correo electrónico y contraseña.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            3. Presione el botón <strong>"Iniciar sesión".</strong>
             Si las credenciales son correctas, será redirigido a la página principal de la aplicación.
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src={Inicio}
            alt="Botón de descarga de Coffee Tech"
            className="w-full max-w-[100px] rounded-lg shadow-md"
          />
        </div>
      </div>
    )
  },
  {
    title: "Recuperación de Contraseña",
    content: (
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
        <div className="md:w-1/2 space-y-4">
          <p className="text-base sm:text-lg text-gray-700">
            1. Desde la pantalla de inicio de sesión, seleccione "¿Olvidaste tu contraseña?".
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            2. Ingrese su correo electrónico registrado y presione <strong>"Enviar correo".</strong>
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            3. Recibirá un correo con un token el cual debe pegar en el recuadro “token” 
            para verificar y luego dar clic al botón “confirmar Token. 
            Abra el correo y siga las instrucciones.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            4. Ingrese una nueva contraseña, confírmela y guarde los cambios 
            seleccionando el botón <strong>“Restablecer”.</strong>
          </p>
        </div>
        <div className="md:w-1/3 flex flex-col items-center space-y-4">
          <img
            src={Reestablecer1}
            alt="Pantalla de restablecimiento 1"
            className="w-full max-w-[200px] rounded-lg shadow-md"
          />
          <img
            src={Reestablecer2}
            alt="Pantalla de restablecimiento 2"
            className="w-full max-w-[400px] rounded-lg shadow-md ml-6"
          />
          <img
            src={Reestablecer3}
            alt="Pantalla de restablecimiento 3"
            className="w-full max-w-[100px] rounded-lg shadow-md -ml-4"
          />
        </div>
      </div>
    )
  },
  {
    title: "Editar perfil",
    content:(
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
        <div className="md:w-1/2 space-y-4">
          <p className="text-base sm:text-lg text-gray-700">
            1. Estando en la pantalla principal, nos dirigimos hasta el menú de hamburguesa 
            ubicado en la parte superior izquierda.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            2. Presionamos sobre la opción llamada <strong>“Perfil”.</strong>
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            3. Podemos editar el nombre o cambiar la contraseña. 
            Después de hacer los cambios deseados guardamos los cambios seleccionando el botón 
            <strong>“Guardar”.</strong>
          </p>
        </div>
        <div className="md:w-1/3 flex flex-col items-center space-y-4">
          <img
            src={Perfil}
            alt="Pantalla de restablecimiento 2"
            className="w-full max-w-[100px] rounded-lg shadow-md ml-6"
          />
          <img
            src={GuardarPerfil}
            alt="Pantalla de restablecimiento 3"
            className="w-full max-w-[100px] rounded-lg shadow-md ml-6"
          />
        </div>
      </div>
    )
  },
  {
    title: "Cambiar contraseña",
    content: (
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
        <div className="md:w-1/2 space-y-4">
          <p className="text-base sm:text-lg text-gray-700">
            1. Estando en la pantalla principal, nos dirigimos hasta el menú de hamburguesa 
            ubicado en la parte superior izquierda.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            2. Presionamos sobre la opción  <strong>“Perfil”.</strong>
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            3. Seleccione la opción <strong>“Cambiar contraseña”.</strong>
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            4. Rellene los campos con la contraseña actual y la contraseña nueva. Seleccione el botón <strong>“Guardar”.</strong>
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src={CambiarSeña}
            alt="Botón de descarga de Coffee Tech"
            className="w-full max-w-[100px] rounded-lg shadow-md ml-6"
          />
          <img
            src={GuardarSeña}
            alt="Botón de descarga de Coffee Tech"
            className="w-full max-w-[100px] rounded-lg shadow-md ml-6"
          />
        </div>
      </div>
    )
  },
  {
    title: "Cerrar sesión",
    content: (
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
        <div className="md:w-1/2 space-y-4">
          <p className="text-base sm:text-lg text-gray-700">
            1. Estando en la pantalla principal, nos dirigimos hasta el menú de hamburguesa 
            ubicado en la parte superior izquierda.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            2. En la parte inferior del menú, seleccionamos el botón llamado <strong>“Cerrar sesión”.</strong>
          </p>
        </div>
        <div className="md:w-1/3">
          <img
            src={IrMenu}
            alt="Botón de descarga de Coffee Tech"
            className="w-full max-w-[100px] rounded-lg shadow-md ml-6"
          />
          <img
            src={Cerrar}
            alt="Botón de descarga de Coffee Tech"
            className="w-full max-w-[100px] rounded-lg shadow-md ml-6"
          />
        </div>
      </div>
    )
  }
];

export const Autenticacion = () => (
  <Section title=" Módulo de Descargar APK y Autenticación" subsections={autenticacion} />
);