import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { clearOrder } from '../store/actions/userOrderAction'
import { useSelector } from 'react-redux'



const OrderConfirm = () => {
    const email = useSelector(state => state.auth.userEmail);
    const totalCartAmount = useSelector(state => state.cart.totalCartAmount)

    useEffect(() => {

    
        clearOrder()
        
    })



    return (
        <div>
            <p className="mt-3 h1">Tack för din beställning!</p>
            <p className="h3">Vi uppdaterar din order när den skickats från oss</p>

            <NavLink to={`/order/${email}`} className="btn btn-grey mt-5 "> Orderhistorik </NavLink>
        </div>
    )
}

export default OrderConfirm
