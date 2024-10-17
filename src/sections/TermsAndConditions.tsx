
const TermsAndConditions = () => {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6 bg-gray-800 text-white">
            <h1 className="text-3xl font-bold text-center">Términos y Condiciones</h1>
          </div>
          <div className="px-4 py-5 sm:p-6 space-y-6">
            {/* Iteramos sobre el array 'sections' para generar cada sección de los términos */}
            {sections.map((section, index) => (
              
              // Cada sección tiene un 'key' único para identificarla, usa un borde inferior
              <section key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                {/* Título de cada sección (si existe) */}
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">{section.title}</h2>
                
                {/* Contenido principal de la sección */}
                <div className="text-gray-700 space-y-4">
                  
                  {/* Iteramos sobre los párrafos de la sección */}
                  {section.content.map((paragraph, pIndex) => (
                    // Cada párrafo tiene un 'key' único
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                  
                  {/* Si la sección contiene una lista (section.list), renderizamos la lista */}
                  {section.list && (
                    <ul className="list-disc pl-5 space-y-2">
                      {/* Iteramos sobre los elementos de la lista */}
                      {section.list.map((item, iIndex) => (
                        // Cada elemento de lista tiene un 'key' único
                        <li key={iIndex}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>
          
          {/* Pie de página con la fecha de última actualización */}
          <div className="px-4 py-4 sm:px-6 bg-gray-100">
            {/* Mostramos la fecha actual formateada */}
            <p className="text-sm text-gray-500 text-center">
              Términos vigentes: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  // Array que contiene las secciones del contenido de Términos y Condiciones

const sections = [
  {
    content: [
       "De acuerdo con la Ley 1581 de 2012 y el Decreto 1377 de 2013, que regulan la protección de datos personales en Colombia, CoffeeTech se compromete a proteger y garantizar la confidencialidad, integridad y seguridad de los datos personales de sus usuarios. A continuación, se describen los términos y condiciones aplicables al tratamiento de los datos personales recopilados a través de esta aplicación." 
    ]
  },
  {
    title: "1. Aceptación de los Términos",
    content: [
      "Al utilizar la aplicación móvil CoffeeTech, el usuario reconoce haber leído, comprendido y aceptado en su totalidad los términos y condiciones aquí descritos. Si no está de acuerdo con estos términos, debe abstenerse de utilizar la aplicación. Cualquier modificación será notificada y deberá ser aceptada nuevamente por el usuario."
    ]
  },
  {
    title: "2. Datos Recopilados",
    content: [
      "CoffeeTech recopila los siguientes datos personales de sus usuarios:"
    ],
    list: [
      "Nombres y apellidos",
      "Correo electrónico",
      "Contraseña (almacenada de manera segura)",
      "Nombres de fincas",
      "Cantidad de hectáreas o metros"
    ]
  },
  {
    title: "3. Uso de los Datos",
    content: [
      "Los datos personales recopilados serán utilizados exclusivamente para los siguientes fines:"
    ],
    list: [
      "Verificación mediante autenticación de correo electrónico.",
      "Envío de notificaciones y actualizaciones relacionadas con la aplicación.",
      "Mejoras en la experiencia del usuario y análisis anónimo para optimización."
    ]
  },
  {
    title: "4. Seguridad de los Datos",
    content: [
      "CoffeeTech implementa medidas de seguridad para proteger los datos personales de sus usuarios:"
    ],
    list: [
      "Cifrado de extremo a extremo (TLS) para proteger la transmisión de información.",
      "Almacenamiento seguro de contraseñas utilizando bcrypt."
    ]
  },
  {
    title: "5. Modificación y Eliminación de Datos",
    content: [
      "El usuario tiene derecho a acceder, modificar o eliminar sus datos personales en cualquier momento a través de la opción \"Editar perfil\". En caso de solicitar la eliminación de su cuenta, CoffeeTech eliminará sus datos personales, salvo cuando haya una obligación legal de conservarlos."
    ]
  },
  {
    title: "6. Confirmación de Mayoría de Edad",
    content: [
      "Al aceptar estos términos y condiciones, el usuario declara que es mayor de edad (18 años o más) o está utilizando la aplicación bajo la supervisión de un adulto responsable. Esta confirmación se realiza mediante un checkbox en el inicio de sesión."
    ]
  },
  {
    title: "7. Derechos del Usuario",
    content: [
      "Conforme a la Ley 1581 de 2012, los usuarios de CoffeeTech tienen los siguientes derechos:"
    ],
    list: [
      "Acceso a sus datos personales.",
      "Rectificación de datos incorrectos o desactualizados.",
      "Cancelación o eliminación de datos no necesarios.",
      "Oposición al tratamiento de sus datos personales por motivos legítimos."
    ]
  },
  {
    title: "8. Procedimiento para Consultas y Reclamos",
    content: [
      "El usuario puede presentar consultas o reclamaciones relacionadas con el tratamiento de sus datos personales enviando un correo a [ejemplo@coffeetech.com]. Las solicitudes serán atendidas en un plazo máximo de 15 días hábiles."
    ]
  },
  {
    title: "9. Modificaciones a los Términos",
    content: [
      "CoffeeTech se reserva el derecho de modificar estos términos en cualquier momento. Las modificaciones serán publicadas en esta página y notificadas a los usuarios, quienes deberán aceptar los nuevos términos para continuar utilizando la aplicación."
    ]
  },
  {
    title: "10. Contacto",
    content: [
      "Para cualquier consulta o duda sobre estos términos y condiciones, el usuario puede ponerse en contacto con nosotros a través de [ejemplo@coffeetech.com]."
    ]
  }
];

export default TermsAndConditions;