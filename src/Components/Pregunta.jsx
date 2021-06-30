import React, { Fragment } from 'react'

const Pregunta = () => {
    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            <form action="">
                <input 
                    type="number" 
                    name="" 
                    id=""
                    placeholder="Coloca tu presupuesto"
                    className="u-full-width"
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
