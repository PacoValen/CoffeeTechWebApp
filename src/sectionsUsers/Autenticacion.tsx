import { Section } from "./Section";

const autenticacion = [
  {
    title: " Descarga del APK",
    content: "Coffee Tech es una aplicación diseñada para..."
  },
  {
    title: "Activar permisos de instalación",
    content: "Los principales beneficios incluyen..."
  },
  {
    title: "Instalación del APK",
    content: "Coffee Tech es una aplicación diseñada para..."
  },
  {
    title: "Confirmar permisos",
    content: "Los principales beneficios incluyen..."
  },
  {
    title: "Registro de Usuario",
    content: "Coffee Tech es una aplicación diseñada para..."
  },
  {
    title: "Iniciar Sesión",
    content: "Los principales beneficios incluyen..."
  },
  {
    title: "Recuperación de Contraseña",
    content: "Los principales beneficios incluyen..."
  }
];

export const Autenticacion = () => (
  <Section title=" Módulo de Descargar APK y Autenticación" subsections={autenticacion} />
);
