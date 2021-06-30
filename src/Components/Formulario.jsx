import React, { Fragment } from 'react'

const Formulario = () => {
    return (
        <Fragment>
            <h3>Agrega tus gastos aqui</h3>
            <div className="campo">
                <label htmlFor="">Nombre del gasto</label>
                <input 
                    type="text" 
                    name="" 
                    id="" 
                    className="u-full-width"
                    placeholder="Ejemplo Transporte"
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
                />
            </div>
            <input 
                className="btn button-primary u-full-width"
                type="submit" 
                value="Agregar Gasto"/>
        </Fragment>
    )
}

export default Formulario
