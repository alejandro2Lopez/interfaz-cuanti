import React from "react";
import { useNavigate } from "react-router-dom";

const GraficosArtZonaUrbana = () => {
  const navigate = useNavigate();

  const regresar = () => {
    navigate("/graficoArtefactosPorVivienda")
  }
  const siguiente = () => {
    navigate("/graficoArtefactosPorVivienda")
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
          <div class="col-sm-9 bg p-3">
            <div className="d-flex justify-content-center align-items-center">
              <img src={require('../Graficos/GraficoPorZonaUrbana.jpeg')} width="80%" height="80%" />
            </div>
            <div class="container">
              <div class="row">
                <div className="col-sm-9  p-3">
                  <p class="text-start">  <button type="button" class="btn btn-light" onClick={regresar}>Regresar
                  </button>
                  </p>

                </div>

              </div>
            </div>
          </div>
          <div class="col-3  p-3 ">
            <h3>Observaciones:</h3>
            <ul>
              <li>En esta gráfica se observa un pronóstico por artefactos totales en la zona urbana del país, del cual claramente se
                 nota cuáles artefactos tecnológicos tendrán un crecimiento 
                 exponencial considerable: teléfono celular, televisor y servicio 
                 de internet en las viviendas. Para el año 2027 estos dispositivos 
                 tendrán un rango de diferencia mínimo, manteniendo así la tendencia
                  de crecimiento simultáneamente. A diferencia del fax o teléfono residencial 
                  se nota un descenso en cada año al punto de llegar a cero unidades, aquí es
                   importante mencionar que a pesar de la línea en cero que sigue en la gráfi
                   ca, este comportamiento se debe a la poca o casi inexistente cantidad de fax que hay por vivienda en el país.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default GraficosArtZonaUrbana;
