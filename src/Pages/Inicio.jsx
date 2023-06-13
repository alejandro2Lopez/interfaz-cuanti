import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSubtract, faCheck } from '@fortawesome/free-solid-svg-icons'

import { useNavigate } from "react-router-dom";
import '../assets/buttonFile.css'
const Inicio = () => {
  const [rows, setRows] = useState([0]);
  const [rows1, setRows1] = useState([0]);
  const [rows2, setRows2] = useState([0]);
  const navigate = useNavigate();
  const [validar1, setValidar1] = useState(false)
  const [validar2, setValidar2] = useState(false)
  const [validar3, setValidar3] = useState(false)
  const [refresh, setRefresh] = useState(true)
  function comprobar() {

    var pagar = document.getElementById('btn');
    pagar.disabled = true;
    if (validar1 == true && validar2 == true && validar3 == true) {
      pagar.disabled = false;
    }
  }
  useEffect(() => {
    if (refresh) {
      comprobar()
      setRefresh(false);

    };



  }, [refresh, setRows, rows, validar1, setValidar1, setRows1, rows1, setRows1, rows1])

  const aumentar = () => {
    setRefresh(true)
    rows.push("Hola")
  }
  const eliminar = () => {
    setRefresh(true)
    rows.pop()
  }
  const aumentar1 = () => {
    setRefresh(true)
    rows1.push("Hola")
  }
  const eliminar1 = () => {
    setRefresh(true)
    rows1.pop()
  }
  const aumentar2 = () => {
    setRefresh(true)
    rows2.push("Hola")
  }
  const eliminar2 = () => {
    setRefresh(true)
    rows2.pop()
  }
  const grafico1 = () => {
    document.getElementById("Check1").style.display = "block";
    setValidar1(true)
    setRefresh(true)
  }
  const grafico2 = () => {
    document.getElementById("Check2").style.display = "block";
    setValidar2(true)
    setRefresh(true)
  }
  const grafico3 = () => {
    document.getElementById("Check3").style.display = "block";
    setValidar3(true)
    setRefresh(true)
  }
  const irgrafico = () => {
    navigate("/graficoGeneracionDeResiduos")
  }
  const addmore3 = rows2.map(() => {
    return (<> <br /><div class="row g-3 align-items-center " >
      <div class="col-auto">
        <input type="text" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
      </div>
      <div class="col-auto">
        <input type="text" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
      </div>
    </div> </>)
  })
  const addmore2 = rows1.map(() => {
    return (<> <div class="row g-3 align-items-center " >
      <div class="col-auto">
        <input type="text" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
      </div>
      <div class="col-auto">
        <input type="text" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
      </div>
      <div class="col-auto">
        <input type="text" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
      </div>
      <div class="col-auto">
        <input type="text" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
      </div>
    </div> </>)
  })
  const annidir = rows.map(() => {
    return (<>
      <br />
      <div class="row g-3 align-items-center " >

        <div class="col-auto">
          <input type="text" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
        </div>
        <div class="col-auto">
          <input type="text" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
        </div>
        <div class="col-auto">
          <span id="passwordHelpInline" class="form-text">

          </span>
        </div>
      </div>
    </>
    )
  })

  return (
    <>
      <br />
      <div className="d-flex justify-content-center align-items-center">
        <img src={require('../Graficos/Logo.png')} width="90" height="90" /> {/*Acá se sube la imagen con el gráfico*/}
        <h1>GreenTech</h1>


      </div>
      <hr />
      <div className="d-flex justify-content-center align-items-center" ><h3>Volúmenes de generación de residuos electrónicos en Costa Rica </h3></div>
      <hr />
      <div style={{
        margin: "auto 150px"
      }}>

        <div class="row g-3 align-items-center " >
          <div class="col-auto" tyle={{
            margin: "auto 50px"
          }}>

          </div>
          <div className="col-auto" style={{
            margin: "auto 50px"
          }}>
            <label for="inputPassword6" class="col-form-label"></label>
          </div>
          <div class="col-auto" style={{
            margin: "auto 200x"
          }}>
            <label for="inputPassword6" class="col-form-label">Año</label>
          </div>
          <div class="col-auto" style={{
            margin: "auto 170px"
          }}>
            <label for="inputPassword6" class="col-form-label">Cantidad de residuos</label>
          </div>

        </div>
      </div>
      <div style={{
        margin: "auto 300px"
      }}>

        <div class="row g-3 align-items-center " >
          <div class="col-auto">
            <input type="text" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
          </div>
          <div class="col-auto">
            <input type="text" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
          </div>
          <div class="col-auto">
            <span id="passwordHelpInline" class="form-text">
              <button className="button" onClick={aumentar}>
                <FontAwesomeIcon icon={faPlus} size="lg" />
              </button>
              <button className="button" onClick={eliminar}>
                <FontAwesomeIcon icon={faSubtract} size="lg" />
              </button>
            </span>
          </div>



          <div className="col-auto">
            <div class="col-auto">
              <button type="button" class="btn btn-light" onClick={grafico1}>Procesar</button>
            </div>
          </div>
          <div className="col-auto">
            <span class="btn btn-success btn-file">
              Subir archivo excel <input type="file" onChange={grafico1} />
            </span>
          </div>
          <div className="col-auto">
            <p id="Check1" style={{ display: "none" }}><FontAwesomeIcon icon={faCheck} size="lg" color="green" /></p>
          </div>
          {annidir}

        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-center align-items-center">
        <h3>
          Total de viviendas ocupadas, por tenencia de artefactos de tecnologías de información y comunicación
        </h3>
      </div>
      <hr></hr>
      <div style={{
        margin: "auto 100px"
      }}>

        <div class="row g-3 align-items-center " >
          <div class="col-auto" tyle={{
            margin: "auto 20px"
          }}>
            <label for="inputPassword6" class="col-form-label">Año de tenencia de artefactos</label>
          </div>
          <div className="col-auto" style={{
            margin: "auto 20px"
          }}>
            <label for="inputPassword6" class="col-form-label">Zona o región</label>
          </div>
          <div class="col-auto" style={{
            margin: "auto 70px"
          }}>
            <label for="inputPassword6" class="col-form-label">Nombre del artefacto</label>
          </div>
          <div class="col-auto" style={{
            margin: "auto 0px"
          }}>
            <label for="inputPassword6" class="col-form-label">Cantidad de artefactos totales</label>
          </div>


        </div>
        <div class="row g-3 align-items-center " >
          <div class="col-auto">
            <input type="text" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
          </div>
          <div class="col-auto">
            <input type="text" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
          </div>
          <div class="col-auto">
            <input type="text" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
          </div>
          <div class="col-auto">
            <input type="text" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
          </div>
          <div class="col-auto">
            <span id="passwordHelpInline" class="form-text">
              <button className="button" onClick={aumentar1}>
                <FontAwesomeIcon icon={faPlus} size="lg" />
              </button>
              <button className="button" onClick={eliminar1}>
                <FontAwesomeIcon icon={faSubtract} size="lg" />
              </button>
            </span>

          </div>

          <div className="col-auto">
            <div class="col-auto">
              <button type="button" class="btn btn-light" onClick={grafico2}>Procesar</button>
            </div>
          </div>
          <div className="col-auto">
            <span class="btn btn-success btn-file">
              Subir archivo excel <input type="file" onChange={grafico2} />
            </span>
          </div>
          <div className="col-auto">
            <p id="Check2" style={{ display: "none" }}><FontAwesomeIcon icon={faCheck} size="lg" color="green" /></p>
          </div>
          {addmore2}
        </div>
      </div>

      <hr />
      <div className="d-flex justify-content-center align-items-center" ><h3>Valor o peso por artefacto</h3></div>


      <div style={{
        margin: "auto 100px"
      }}>

        <div class="row g-3 align-items-center " >
          <div class="col-auto" tyle={{
            margin: "auto 80px"
          }}>

          </div>
          <div className="col-auto" style={{
            margin: "auto 75px"
          }}>
            <label for="inputPassword6" class="col-form-label"></label>
          </div>
          <div class="col-auto" style={{
            margin: "auto 200x"
          }}>
            <label for="inputPassword6" class="col-form-label">Nombre del artefacto</label>
          </div>
          <div class="col-auto" style={{
            margin: "auto 70px"
          }}>
            <label for="inputPassword6" class="col-form-label">Peso en gramos (g)</label>
          </div>

        </div>
      </div>
      <div style={{
        margin: "auto 300px"
      }}>

        <div class="row g-3 align-items-center " >
          <div class="col-auto">
            <input type="text" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
          </div>
          <div class="col-auto">
            <input type="text" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" />
          </div>
          <div class="col-auto">
            <span id="passwordHelpInline" class="form-text">
              <button className="button" onClick={aumentar2}>
                <FontAwesomeIcon icon={faPlus} size="lg" />
              </button>
              <button className="button" onClick={eliminar2}>
                <FontAwesomeIcon icon={faSubtract} size="lg" />
              </button>
            </span>

          </div>

          <div className="col-auto">
            <div class="col-auto">
              <button type="button" class="btn btn-light" onClick={grafico3}>Procesar</button>
            </div>
          </div>
          <div className="col-auto">
            <span class="btn btn-success btn-file">
              Subir archivo excel <input type="file" onChange={grafico3} />
            </span>
          </div>
          <div className="col-auto">
            <p id="Check3" style={{ display: "none" }}><FontAwesomeIcon icon={faCheck} size="lg" color="green" /></p>
          </div>
        </div>

        <div>
          {addmore3}
        </div>
      </div>
      <hr></hr>
      <div className="d-flex justify-content-center align-items-center" >
        <button id="btn" type="button" class="btn btn-light" onClick={irgrafico} >Generar gráficos</button>
      </div>
    </>
  );
}

export default Inicio;
