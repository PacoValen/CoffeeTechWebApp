import Footer2 from '../common/Footer2';
import Nav2 from '../common/Nav2';

const Documentacion = () => {
  return (
    <>
      <Nav2 />
      <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Documentación</h1>
      <p className="text-lg mb-4">
        Aquí puedes encontrar toda la información necesaria sobre el uso y las características de nuestra aplicación.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Guía de Instalación</h2>
      <p className="mb-4">
        Sigue los pasos a continuación para instalar nuestra aplicación en tu dispositivo:
        <ol className="list-decimal pl-6">
          <li>Descarga el archivo APK desde la sección de descarga.</li>
          <li>Permite la instalación desde fuentes desconocidas en tu dispositivo.</li>
          <li>Abre el archivo APK descargado y sigue las instrucciones de instalación.</li>
        </ol>
      </p>
      <h2 className="text-2xl font-semibold mb-2">Guía de Uso</h2>
      <p>
        Una vez instalada la aplicación, puedes iniciar sesión con tus credenciales y comenzar a explorar sus funcionalidades.
        Consulta los siguientes recursos para más detalles:
        <ul className="list-disc pl-6">
          <li>Documentación del usuario</li>
          <li>Preguntas frecuentes</li>
          <li>Soporte técnico</li>
        </ul>
      </p>
    </div>
    <Footer2 />
    </>
  );
};

export default Documentacion;
