import React, {useState, useEffect} from 'react'
import Pregunta from './Components/Pregunta'
import Formulario from './Components/Formulario'
import Listados from './Components/Listados'
import ControlPresupuesto from './Components/ControlPresupuesto'

const App = () => {
  const [presupuesto, setPresupuesto] = useState(0)
  const [restante, setRestante] = useState(0)
  const [mostrarpregunta, setMostrarpregunta] = useState(true)
  const [gastos, setGastos] = useState([])
  const [gasto, setGasto] = useState({})
  const [crearGasto, setCrearGasto] = useState(false)

  //Funciones
  // const agregarNuevoGasto = gasto => {
  //   setGastos([...gastos, gasto])
  // }
  // Use effect que actualiza el Restante
  useEffect(() => {
    if(crearGasto){
      // Agrega al nuevo presupuesto
      setGastos([...gastos, gasto])
      // Resta del presupuesto actual
      const presupuestoRestante = restante-gasto.cantidad;
      setRestante(presupuestoRestante)
      setCrearGasto(false)
    }
  }, [crearGasto, gasto, gastos, restante])
  return (
    <div className="container">
      <header>
        <h1>
          Gasto Semanal
        </h1>
        <div className="contenido-principal contenido">
          {
            mostrarpregunta 
            ?(
              <Pregunta
                setPresupuesto={setPresupuesto}
                setRestante={setRestante}
                setMostrarpregunta={setMostrarpregunta}
              />
            )
            : 
            (
            <div className="row">
              <div className="one-half column">
                <Formulario 
                  setGasto={setGasto}
                  setCrearGasto={setCrearGasto}
                  />
              </div>
              <div className="one-half column">
                <Listados gastos={gastos}/>
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                /> 
              </div>
            </div>
            )
          }
         
        </div>
      </header>
      
           
    </div>
  )
}

export default App

