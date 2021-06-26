import React from 'react'
import { NavLink } from 'react-router-dom'

const OrderConfirm = () => {
    return (
        <div>
            <p className="mt-3 h1">Tack för din beställning!</p>
            <p className="h3">Vi uppdaterar din order när den skickats från oss</p>

            <NavLink to="/OrderHistory" className="btn btn-grey mt-5 "> Orderhistorik </NavLink>
        </div>
    )
}

export default OrderConfirm
