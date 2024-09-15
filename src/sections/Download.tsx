import Nav2 from '../common/Nav2';
import { Download as DownloadIcon } from 'lucide-react'; // Asegúrate de que 'lucide-react' esté instalado
import Logo from '../assets/download.png'; // Verifica que la ruta y el nombre del archivo sean correctos
import Footer2 from '../common/Footer2';

const Download = () => {
  return (
    <>
      <Nav2 />
        <section className="flex flex-col items-center justify-center px-4 py-12 bg-white md:px-8 md:py-16">
          <div className="max-w-xl md:max-w-2xl mx-auto text-center">
            <div className="mb-6 inline-block p-3 bg-gray-50 rounded-full shadow-md">
              <img src={Logo} alt="Coffee Tech Logo" className="w-10 h-10 sm:w-12 sm:h-12 text-gray-700" />
            </div>
            <h1 className="mb-4 text-2xl font-bold text-gray-800 sm:text-4xl font-serif">
              Descarga Nuestra App
            </h1>
            <p className="mb-6 text-lg text-gray-600 sm:text-xl">
              Gestión eficiente, ágil y sofisticada para tu cultivo de café.
            </p>
            <a
              href="/coffeeTech.apk"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 sm:px-8 
              sm:py-4 text-base sm:text-lg font-medium text-white bg-green-600 rounded-full hover:bg-green-700 
              focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-300 
              lg:pointer-events-none lg:bg-gray-400"
              download="coffee-Tech.apk"
            >
              <DownloadIcon className="w-5 h-5 mr-2" />
              Descargar APK
            </a>
            <p className="mt-6 text-xs sm:text-sm text-gray-500">
              Versión 1.0.0 - Última actualización: Septiembre 2024
            </p>
          </div>
        </section>
      <Footer2 />
    </>
  );
};

export default Download;





