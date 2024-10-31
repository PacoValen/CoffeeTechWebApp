import { Section } from "./Section";

const gettingStartedSubsections = [
  {
    title: "Instalación de la aplicación",
    content: "Para instalar Coffee Tech, sigue estos pasos..."
  },
  {
    title: "Configuración inicial",
    content: "Una vez instalada, deberás configurar tu cuenta..."
  }
];

export const GettingStartedSection = () => (
  <Section title="Primeros pasos" subsections={gettingStartedSubsections} />
);
