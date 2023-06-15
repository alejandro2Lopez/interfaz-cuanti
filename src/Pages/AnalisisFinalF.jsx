import React from "react";
import { useNavigate } from "react-router-dom";

const AnalisisFinalF = () => {
  const navigate = useNavigate();

  const regresar = () => {
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
      <div className="d-flex justify-content-center align-items-center" ><h3>Análisis por peso del artefacto</h3></div>
      <hr />

      <div class="container">

        <div class="row " >
          <div className="col-sm-4  p-0">

            <h4>Dispositivo móvil</h4>
            <div>Se muestran dos casos los cuales serán comparados, los valores utilizados en el peso son de 150 gramos (g) y 200 gramos (g).
              <ul>
                <li>
                  En el análisis optimista 252,3 toneladas de residuos en el 2023 siendo el 0.45% de los residuos que se van a generar.

                </li>
                <li>

                  Igual se presenta un aumento en el 2027 a 369,5 toneladas manteniendo el mismo patrón que la mayoría de los residuos.


                </li>
              </ul>
            </div>
          </div>
          <div className="vr p-0" />
          <div className="col-sm-3  p-3">

            <img src={require('../Graficos/Residuo2.jpg')} width="100%" height="70%" />
          </div>

          <div className="vr p-0" />
          <div className="col-sm-4  p-2">
            <h4>Router de hogar</h4>
            <div>Se muestran dos casos los cuales serán comparados, los valores utilizados en el peso  son de 200 gramos (g) y 500 gramos (g).
              <ul>
                <li>
                  En el análisis optimista los valores resultantes son de 316,6 toneladas representando el 0.57% del volumen de residuos generados en el 2023


                </li>
                <li>

                  En el pesimista los valores resultantes son de 972,7 toneladas siendo el 1.56% de los residuos generados en el 2027


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

        </div>
      </div>




    </>
  );
}

export default AnalisisFinalF;
