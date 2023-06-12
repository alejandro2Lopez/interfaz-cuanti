import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Inicio from './Inicio'
import GraficoResiduos from './GraficoResiduos'
import GraficoArtVivienda from './GraficoArtPorVivienda'
import GraficosArtZonaUrbana from './GraficoArtZonaUrb'
function App() {
  return (

    <Router>

      <Routes>

        <Route path="/inicio" element={<Inicio></Inicio>} />
        <Route path="/graficoGeneracionDeResiduos" element={<GraficoResiduos></GraficoResiduos>} />
        <Route path="/graficoArtefactosPorVivienda" element={<GraficoArtVivienda></GraficoArtVivienda>} />
        <Route path="/graficoArtefactosPorZonaUrbana" element={<GraficosArtZonaUrbana></GraficosArtZonaUrbana>} />
      </Routes>
    </Router>

  );
}

export default App;