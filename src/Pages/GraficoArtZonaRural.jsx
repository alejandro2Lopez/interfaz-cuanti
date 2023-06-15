import React from "react";
import { useNavigate } from "react-router-dom";

const GraficosArtZonaRural = () => {
  const navigate = useNavigate();

  const regresar = () => {
    navigate("/graficoArtefactosPorZonaUrbana")
  }
  const siguiente = () => {
    navigate("/analisisFinal")
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
              <img src={require('../Graficos/GraficoZonaRural.png')} width="80%" height="80%" />
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
          <div class="col-4  p-1 ">
            <h3>Observaciones:</h3>
            Se puede apreciar también el aumento significativo en el servicio de internet
            como ocurrió en la zona urbana, del mismo modo el teléfono celular ha mostrado
            un crecimiento mínimo en contraste con la zona urbana que duplica esta cantidad.
            Sin embargo, se logra visualizar que el crecimiento de televisores en cada año
            se mantiene constante, es decir no existe un aumento para este pronostico. De igual forma, la televisión de cable se
            mantiene por debajo de los televisores, esto debido en parte por los limitados servicios que se ofrecen en dicha zona.
     
          </div>
        </div>
      </div>
    </>
  );
}

export default GraficosArtZonaRural;
