import Nav2 from '../common/Nav2';
import { Download as DownloadIcon } from 'lucide-react'; // Asegúrate de que 'lucide-react' esté instalado
import Logo from '../assets/copalogo.png'; // Verifica que la ruta y el nombre del archivo sean correctos
import Footer2 from '../common/Footer2';

const Download = () => {
  return (
    <>
      <Nav2 />
      <section className="flex flex-col items-center justify-center px-8 py-16 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8 inline-block p-3 bg-gray-50 rounded-full shadow-md">
            <img src={Logo} alt="Coffee Tech Logo" className="w-12 h-12 text-gray-700" />
          </div>
          <h1 className="mb-4 text-4xl font-bold text-gray-800 font-serif">Descarga Nuestra App</h1>
          <p className="mb-8 text-xl text-gray-600">
            Gestión eficiente, ágil y sofisticada para tu cultivo de café.
          </p>
          <a
            href="/app-debug.apk"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-amber-500 rounded-full hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 transition-colors duration-300"
            download="coffee-tech.apk"
          >
            <DownloadIcon className="w-5 h-5 mr-2" />
            Descargar APK
          </a>
          <p className="mt-8 text-sm text-gray-500">Versión 1.0.0 - Última actualización: Agosto 2024</p>
        </div>
      </section>
      <Footer2 />
    </>
  );
};

export default Download;





