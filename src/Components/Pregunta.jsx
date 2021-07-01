import React, { Fragment, useState} from 'react'
import Error from './Error'

const Pregunta = ({setPresupuesto, setRestante, setMostrarpregunta}) => {
    //Variables
    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)

    // Funciones
    const definirPresupuesto = e =>{
        setCantidad(parseInt(e.target.value))
    }
    const agregarPresupuesto = e =>{
        e.preventDefault()
        // Validar
        if(cantidad < 1 || isNaN(cantidad)){
            setError(true)
            return
        }
        setError(false)
        // QUe hacer si pasa la validacion
        setPresupuesto(cantidad)
        setRestante(cantidad)
        setMostrarpregunta(false)

    }
    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            { error 
                ? <Error mensaje="Presupuesto Incorrecto"/>
                : null
            }
            <form onSubmit={agregarPresupuesto}>
                <input 
                    type="number" 
                    name="" 
                    id=""
                    placeholder="Coloca tu presupuesto"
                    className="u-full-width"
                    onChange={definirPresupuesto}
                />
                <input 
                    type="submit" 
                    value="Definir  Presupuesto"
                    className="button-primary u-full-width"
                />
            </form>
        </Fragment>
    )
}

export default Pregunta
