import React, {useState} from 'react'
import Pregunta from './Components/Pregunta'
import Formulario from './Components/Formulario'

const App = () => {
  const [presupuesto, setPresupuesto] = useState(0)
  const [restante, setRestante] = useState(0)
  const [mostrarpregunta, setMostrarpregunta] = useState(true)
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
                <Formulario />
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

