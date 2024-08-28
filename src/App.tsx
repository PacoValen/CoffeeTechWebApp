/* import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import FreeTier from "./sections/FreeTier";
import Plots from "./sections/Plots";
import VideoPlayer from "./sections/VideoPlayer";

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Plots />
      <VideoPlayer />
      <FreeTier />
    </>
  );
}
 */

// src/App.tsx
import { Outlet } from "react-router-dom";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import FreeTier from "./sections/FreeTier";
import Plots from "./sections/Plots";
import VideoPlayer from "./sections/VideoPlayer";

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Plots />
      <VideoPlayer />
      <FreeTier />
      <Outlet />{" "}
      {/* Aquí se renderizará el contenido específico de cada ruta */}
    </>
  );
}
