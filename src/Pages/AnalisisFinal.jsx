import React from "react";
import { useNavigate } from "react-router-dom";

const AnalisisFinal = () => {
  const navigate = useNavigate();

  const regresar = () => {
    navigate("/graficoArtefactosPorZonaRural")

  }
  const siguiente = () => {
    navigate("/analisisFinalF")
  }
  return (
    <>
      <br />
      <div className="d-flex justify-content-center align-items-center">
        <img src={require('../Graficos/Logo.png')} width="90" height="90" />
        <h1>GreenTech</h1>


      </div>
      <hr />
      <div className="d-flex justify-content-center align-items-center" ><h3>Análisis por peso del artefacto</h3></div>
      <hr />

      <div class="container">

        <div class="row " >

          <div className="col-sm-4  p-2">

            <div></div>
            <h4>Televisor</h4>
            <div> Se muestran dos casos los cuales serán comparados, los valores utilizados en el peso son 11 kilos y 15 kilos.
            </div>
            <ul>
              <li>El análisis optimista de 18.125,5 toneladas en el 2023 representa el 32.65% del residuo que generará el país durante el 2023.</li>
              <li>En su contraparte pesimista se generarán 26.656,6 de toneladas en el 2027 representando aproximadamente el 43% del E-waste que producirá el país.</li>
            </ul>
          </div>

          <div className="vr p-0" />
          <div className="col-sm-3  p-3">

            <img src={require('../Graficos/Residuos.jpg')} width="100%" height="100%" />
          </div>

          <div className="vr p-0" />
          <div className="col-sm-4  p-2">

            <h4>Radio</h4>
            <div>Se muestran dos casos los cuales serán comparados, los valores utilizados en el peso son 250 gramos (g) y 800 gramos (g).
              <ul>
                <li>
                  Los resultados del análisis optimista serían de 180,8 toneladas representando el 0.3% del volumen de residuos generados en el 2027.


                </li>
                <li>

                  En el pesimista los valores resultantes son de 643,4 toneladas siendo el 1.16% de los residuos generados en el 2023.

                </li>
              </ul>
            </div>
          </div>



          <div>
            *Nota:
            En los análisis realizados, solo se toman en cuenta dispositivos de TI y solo se cuenta un dispositivo por hogar.
          </div>
        </div>


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




    </>
  );
}

export default AnalisisFinal;
