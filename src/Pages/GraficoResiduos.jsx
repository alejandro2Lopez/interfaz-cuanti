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
          <div class="col-sm-9 bg p-3">
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
          <div class="col-3  p-3 ">
            <h3>Observaciones:</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default GraficoResiduos;
