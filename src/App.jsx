import React, {useState} from 'react'
import Pregunta from './Components/Pregunta'
import Formulario from './Components/Formulario'

const App = () => {
  const [presupuesto, setPresupuesto] = useState(0)
  const [restante, setRestante] = useState(0)
  const [mostrarpregunta, setMostrarpregunta] = useState(true)
  const [gastos, setGastos] = useState([])

  //Funciones
  const agregarNuevoGasto = gasto => {
    setGastos([...gastos, gasto])
  }
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
                <Formulario agregarNuevoGasto={agregarNuevoGasto}/>
              </div>
              <div className="one-half column">
                2
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

