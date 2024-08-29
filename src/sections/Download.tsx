function Download() {
  return (
    <section className="flex flex-col items-center justify-center px-8 py-12 bg-gray-100">
      <h1 className="mb-4 text-3xl font-bold text-gray-800">Descarga Nuestra App</h1>
      <p className="mb-8 text-center text-gray-600">
        ¡Descarga la última versión de nuestra aplicación APK y lleva tu cultivo al siguiente nivel!
      </p>
      <a
        href="/path/to/your/apk"
        className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
        download
      >
        Descargar APK
      </a>
      <p className="mt-4 text-sm text-gray-500">Versión 1.0.0 - Última actualización: Agosto 2024</p>
    </section>
  );
}

export default Download;
