import React from "react";
import { useNavigate } from "react-router-dom";

const GraficoArtVivienda = () => {
  const navigate = useNavigate();

  const regresar = () => {
    navigate("/graficoGeneracionDeResiduos")

  }
  const siguiente = () => {
    navigate("/graficoArtefactosPorZonaUrbana")
  }
  return (
    <>
      <br />
      <div className="d-flex justify-content-center align-items-center">
        <img src={require('../Graficos/Logo.png')} width="90" height="90" />
        <h1>GreenTech</h1>


      </div>
      <hr />
      <div class="container">
        <div class="row">
          <div class="col-sm-8 bg p-3">
            <div className="d-flex justify-content-center align-items-center">
              <img src={require('../Graficos/GraficoTotal.jpeg')} width="80%" height="80%" />
            </div>
            <div class="container">
              <div class="row">
                <div className="col-sm-9  p-3">
                  <p class="text-start">  <button type="button" class="btn btn-light" onClick={regresar}>Regresar
                  </button>
                  </p>

                </div>
                <div class="col-3  p-3">
                  <p class="text-start"><button type="button" class="btn btn-light" onClick={siguiente}>Siguiente</button></p>

                </div>
              </div>
            </div>
          </div>
          <div class="col-4  p-3 ">
            <h3>Observaciones:</h3>

            Con respecto a la grafica empleada, se observa detalladamente
            el pronóstico sobre los artefactos totales por vivienda a partir del año 2022 a 2027,
            se logra ver que a partir del año 2022 se incrementa el servicio de internet debido a
            la situación post-pandemia que se experimentó a nivel mundial, asimismo se presenta
            un aumento drástico de teléfonos celulares y televisores en contraste con el fax,
            el cual va disminuyendo considerablemente cada año.
            Es fundamental resaltar que ante mayor numero de dispositivos o artefactos tecnológicos hayan
            en los hogares mayor será los desechos que se generarán a futuro, por lo cual se puede apreciar la estrecha relación de este grafico con el anterior, ya que en ambos se muestra un pronóstico del
            comportamiento o tendencia que tendrán algunos dispositivos en los próximos años.
          </div>
        </div>
      </div>
    </>
  );
}

export default GraficoArtVivienda;
