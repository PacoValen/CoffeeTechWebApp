import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import FreeTier from "./sections/FreeTier";
import Plots from "./sections/Plots";
import Download from "./sections/Download";
import Documentation from "./sections/Documentation";
import VideoPlayer from "./sections/VideoPlayer";
import Footer from "./common/Footer";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Nav />
              <Hero />
              <VideoPlayer />
              <Plots />
              <FreeTier />
              <Footer />
            </>
          }
        />
        <Route path="/download" element={<Download />} /> //con este codigo nos
        redirigimos a la otra pagina
        <Route path="/documentation" element={<Documentation />} /> //con este
        codigo nos redirigimos a la otra pagina
      </Routes>
    </Router>
  );
}
