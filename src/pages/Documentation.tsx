// src/pages/Documentation.tsx

/* import React from "react";
import { Link } from "react-router-dom"; // Asegúrate de que estés usando react-router-dom para la navegación

const Documentation: React.FC = () => {
  return (
    <div className="mx-auto max-w-4xl p-4">
      <h1 className="mb-4 text-3xl font-bold">
        Documentación de la Aplicación
      </h1>
      <p className="mb-4">
        Bienvenido a la documentación de nuestra aplicación. Aquí encontrarás
        toda la información necesaria para utilizar y gestionar la aplicación
        que te permite descargar el APK de nuestra app Android para el manejo de
        cultivos de café.
      </p>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">Introducción</h2>
        <p>
          Esta sección proporciona una visión general de la aplicación y sus
          características principales. Aquí puedes aprender sobre la
          funcionalidad de la app y cómo puede ayudarte en la gestión de tus
          cultivos de café.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">Instalación</h2>
        <p>Para instalar la aplicación, sigue estos pasos:</p>
        <ol className="mb-4 ml-6 list-decimal">
          <li>Descarga el archivo APK desde el enlace proporcionado.</li>
          <li>Abre el archivo APK en tu dispositivo Android.</li>
          <li>
            Sigue las instrucciones en pantalla para completar la instalación.
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">Uso</h2>
        <p>
          Una vez instalada la aplicación, puedes comenzar a usarla para
          gestionar tus cultivos de café. Asegúrate de revisar la guía de
          usuario para aprender sobre todas las funciones y cómo sacar el máximo
          provecho de la aplicación.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-2 text-2xl font-semibold">Contacto</h2>
        <p>
          Si tienes alguna pregunta o necesitas ayuda, no dudes en ponerte en
          contacto con nuestro equipo de soporte.
        </p>
      </section>

      <Link to="/" className="text-blue-500 hover:underline">
        Regresar a la página principal
      </Link>
    </div>
  );
};

export default Documentation; */

// src/Documentacion.tsx
import React from "react";
import { Link } from "react-router-dom";

const Documentacion: React.FC = () => {
  return (
    <div>
      <h1>Documentación</h1>
      <button>
        <Link to="/">Volver al Inicio</Link>
      </button>
    </div>
  );
};

export default Documentacion;
