import React, {Fragment} from 'react'
import Gasto from './Gasto'

const Listados = ({gastos}) => {
    return (
        <Fragment>
            <div className="gastos-realizados">
                <h2>Listado</h2>
                {
                    gastos.map( gasto=>(
                        <Gasto key={gasto.id} gasto={gasto}/>
                    ))
                }
            </div>
        </Fragment>
    )
}

export default Listados
