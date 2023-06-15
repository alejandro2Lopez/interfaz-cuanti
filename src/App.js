import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Inicio from './Pages/Inicio'
import GraficoResiduos from './Pages/GraficoResiduos'
import GraficoArtVivienda from './Pages/GraficoArtPorVivienda'
import GraficosArtZonaUrbana from './Pages/GraficoArtZonaUrb'
import GraficosArtZonaRural from './Pages/GraficoArtZonaRural'
import AnalisisFinal from './Pages/AnalisisFinal'
import AnalisisFinalF from './Pages/AnalisisFinalF'
function App() {
  return (

    <Router>

      <Routes>

        <Route path="/inicio" element={<Inicio></Inicio>} />
        <Route path="/graficoGeneracionDeResiduos" element={<GraficoResiduos></GraficoResiduos>} />
        <Route path="/graficoArtefactosPorVivienda" element={<GraficoArtVivienda></GraficoArtVivienda>} />
        <Route path="/graficoArtefactosPorZonaUrbana" element={<GraficosArtZonaUrbana></GraficosArtZonaUrbana>} />
        <Route path="/graficoArtefactosPorZonaRural" element={<GraficosArtZonaRural></GraficosArtZonaRural>} />
        <Route path="/analisisFinal" element={<AnalisisFinal></AnalisisFinal>} />
        <Route path="/analisisFinalF" element={<AnalisisFinalF></AnalisisFinalF>} />
        <Route path="*" element={<Navigate to="/inicio" />} />

      </Routes>
    </Router>


  );
}

export default App;