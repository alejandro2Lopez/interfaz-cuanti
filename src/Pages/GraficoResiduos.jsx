import React from "react";
import { useNavigate } from "react-router-dom";

const GraficoResiduos = () => {
  const navigate = useNavigate();

  const regresar = () => {
    navigate("/inicio")
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
          <div class="col-sm-8 bg p-3">
            <div className="d-flex justify-content-center align-items-center">
              <img src={require('../Graficos/GraResiduos.png')} width="80%" height="80%" />
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

            <div>
              B1 (Slope)= 1,61, lo que indica que el crecimiento por resiudos electrónicos va a ser gradual y sostenido durante los próximos años.
            </div>
            <div>
              Se puede apreciar con claridad los volúmenes de
              generación de residuos electrónicos que tendría el
              país entre los años 2022 a 2032, puntuando qué a
              pesar de ser un pronostico a futuro, se puede ana
              lizar el incremento significativo de desechos
              electrónicos del año 2032, ya que con lo que resp
              ecta al año actual 2023 se puede decir con certeza que
              aumentará la contaminación tecnológica, por lo cual s
              e sugiere considerar acciones que mitiguen estas futuras proyecciones.


            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GraficoResiduos;
