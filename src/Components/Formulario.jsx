import React, { Fragment, useState } from 'react'

const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState(0)
    // Cuando el usuario agrega un gasto
    const agregarGasto = e =>{
        e.preventDefault()
        alert("Tratando de enviar")
        // Validar
        // Construir el gasto
        // Pasar le gasto al componente princial
        // Resetar el formulario
    }
    return (
        <Fragment>
            <form onSubmit={agregarGasto}>
                <h3>Agrega tus gastos aqui</h3>
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

export default Formulario
