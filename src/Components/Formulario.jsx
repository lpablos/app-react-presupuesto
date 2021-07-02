import React, { Fragment, useState } from 'react'
import Error from './Error'
import shortid from 'shortid'
import PropTypes from 'prop-types'

const Formulario = ({setGasto, setCrearGasto}) => {
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)
    // Cuando el usuario agrega un gasto
    const agregarGasto = e =>{
        e.preventDefault()
        // Validar
        if(cantidad < 1 || isNaN(cantidad)){
            setError(true)
            return
        }
        setError(false)
        // Construir el gasto con los valores del state
        const gasto = {
            id: shortid.generate(),
            nombre,
            cantidad
        }
        // Pasar le gasto al componente princial
        setGasto(gasto)
        setCrearGasto(true)
        // Resetar el formulario
        setNombre('')
        setCantidad(0)
    }
    return (
        <Fragment>
            <form onSubmit={agregarGasto}>
                <h3>Agrega tus gastos aqui</h3>
                {   error 
                    ? <Error mensaje="Ambos campos son obligatorios o el presupuesto es incorrecto"/>
                    : null
                }
                <div className="campo">
                    <label htmlFor="">Nombre del gasto</label>
                    <input 
                        type="text" 
                        name="" 
                        id="" 
                        className="u-full-width"
                        placeholder="Ejemplo Transporte"
                        value={nombre}
                        onChange={e=>setNombre(e.target.value)}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="">Cantidad del gasto</label>
                    <input 
                        type="number" 
                        name="" 
                        id="" 
                        className="u-full-width"
                        placeholder="Ej. 300"
                        value={cantidad}
                        onChange={e=> setCantidad(parseInt(e.target.value, 10))}
                    />
                </div>
                <input 
                    className="btn button-primary u-full-width"
                    type="submit" 
                    value="Agregar Gasto"/>
            </form>
        </Fragment>
    )
}

Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCrearGasto: PropTypes.func.isRequired
}

export default Formulario
