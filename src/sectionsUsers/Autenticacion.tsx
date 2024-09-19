import { Section } from "./Section";
import Descarga from "../assets/Descarga.jpg";
import Desconocidas from "../assets/Desconocidas.png";
import Registrarse1 from "../assets/Registrarse1.jpg";
import Token from "../assets/Token.png";
import Inicio from "../assets/Inicio.jpg";
import Reestablecer1 from "../assets/Reestablecer1.jpg";
import Reestablecer2 from "../assets/Reestablecer2.png";
import Reestablecer3 from "../assets/Reestablecer3.jpg";
import IrMenu from "../assets/irmenu.jpg";
import Perfil from "../assets/perfil.jpg";
import GuardarPerfil from "../assets/guardarPerfil.jpg";
import Cerrar from "../assets/cerrar.jpg";
import CambiarSeña from "../assets/cambiarSeña.jpg";
import GuardarSeña from "../assets/guardarSeña.jpg";

const autenticacion = [
  {
    title: " Descarga de la APP",
    content: (
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
        <div className="md:w-1/2 space-y-4">
          <p className="text-base sm:text-lg text-gray-700">
            1. Estando en la pantalla de descarga, haga clic en el botón
            <strong> "Descargar APK" </strong> para comenzar la descarga del archivo.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            2. Una vez Una vez que la descarga haya finalizado, 
            busque la app en su dispositivo. Generalmente, el archivo se encuentra en la carpeta "Descargas".
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
            2. Active la opción <strong>Permitir aplicaciones de fuentes desconocidas </strong> 
            para permitir la instalación de apps que no provienen de Google Play. 
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            3. A veces, al abrir la app, aparecerá un cuadro en su pantalla pidiendo
             confirmar si desea permitir la instalación de aplicaciones que no son de Google Play.
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
    title: "Instalación de la APP",
    content: (
      <div className="flex flex-col items-center space-y-8 md:space-y-0 md:space-x-8 md:flex-row">
        <div className="md:w-1/2 space-y-4">
          <p className="text-base sm:text-lg text-gray-700">
            1. Se debe abrir la aplicación previamente descargada
             y seguir las instrucciones que aparecerán en pantalla para completar la instalación.
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
            1. Al ejecutar la aplicación, se solicitará la confirmación de los permisos necesarios.
            Es importante revisar y otorgar estos permisos para garantizar un uso óptimo.
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
            1. Abra la aplicación y seleccione la opción <strong>"¿No tienes cuenta? Registrarse"</strong>
            que aparece en la parte inferior de la pantalla. 
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            2. Se debe ingresar el nombre completo, un correo electrónico válido y una contraseña 
            que cumpla con los requisitos mínimos de seguridad: 
            al menos 8 caracteres, incluyendo una mayúscula, un número y un carácter especial.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            3. Confirme su contraseña en el campo correspondiente.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            4. Presione el botón <strong>"Registrarse".</strong>
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            5. Se recibirá un mensaje de autenticación en el correo electrónico proporcionado, 
            el cual incluirá un código (token). Este código debe ingresarse en el campo correspondiente,
             y seguir las instrucciones para activar la cuenta.
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
            1. Desde la pantalla de inicio de sesión, seleccione <strong>"Olvide la contraseña".</strong>
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            2. Ingrese su correo electrónico registrado y presione <strong>"Enviar correo".</strong>
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            3. Se recibirá un correo electrónico con un código (token).
             Este código debe ingresarse en el campo "Código" para verificar la cuenta 
             y luego se debe hacer clic en el botón <strong>"Confirmar código".</strong> 
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            4. Se debe ingresar una nueva contraseña, confirmarla y guardar los cambios
             haciendo clic en el botón  <strong>“Restablecer”.</strong>
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
            1. Desde la pantalla principal, diríjase hasta el menú de hamburguesa ubicado en la parte superior izquierda.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            2. Presionamos sobre la opción llamada <strong>“Perfil”.</strong>
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            3. Se puede editar el nombre o cambiar la contraseña. 
            Una vez realizados los cambios, se deben guardar haciendo clic en el botón  
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
            1. Desde la pantalla principal, diríjase hasta el menú de hamburguesa ubicado en la parte superior izquierda.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            2. Presionamos sobre la opción  <strong>“Perfil”.</strong>
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            3. Seleccione la opción <strong>“Cambiar contraseña”.</strong>
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            4. Se deben completar los campos con la contraseña actual y la nueva contraseña.
            Luego, se debe hacer clic en el botón  <strong>“Guardar”.</strong>
          </p>
        </div>
        <div className="md:w-1/3 flex flex-col items-center space-y-4">
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
            1. Desde la pantalla principal, diríjase hasta el menú de hamburguesa ubicado en la parte superior izquierda.
          </p>
          <p className="text-base sm:text-lg text-gray-700">
            2. En la parte inferior del menú, seleccionamos el botón llamado <strong>“Cerrar sesión”.</strong>
          </p>
        </div>
        <div className="md:w-1/3 flex flex-col items-center space-y-4">
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