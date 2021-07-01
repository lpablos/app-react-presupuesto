import React, { Fragment } from 'react'

const Gasto = ({gasto}) => {
    return (
        <Fragment>
            <li className="gastos">
                <p>
                    {gasto.nombre}
                    <span className="gasto">$ {gasto.cantidad} </span>
                </p>

            </li>
        </Fragment>
    )
}

export default Gasto
