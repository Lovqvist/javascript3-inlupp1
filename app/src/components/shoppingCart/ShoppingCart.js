import React from 'react'
import { useSelector } from 'react-redux'
import ShoppingCartProduct from './ShoppingCartProduct'
import { NavLink } from 'react-router-dom'

const ShoppingCart = () => {

    const shoppingCart = useSelector(state => state.cart.shoppingCart )
    const totalCartAmount = useSelector(state => state.cart.totalCartAmount)


    const empty = (
        <div>
            <div className="p-2 d-flex justify-content-center align-items-center">
                Din kundvagn är tom.
            </div>
            <div className="dropdown-divider"></div>
        </div>
                    )


    return (
        <div>
            <div className="container border border-4 rounded">
                <div className="my-2 shopping-card">
                    <h5>Varukorg</h5>
                    {
                        shoppingCart.map(product => 
                            <ShoppingCartProduct product={product} shoppingCart={shoppingCart} key={product._id}/>
                            )
                    }  

                    {!shoppingCart.length && empty}        
                               
                </div>
                <div className="dropdown-divider"></div>
                <div>
                    <div className="d-flex justify-content-between">
                        <h5>Total summa:</h5>
                        <h5> {totalCartAmount}  SEK</h5>
                    </div>
                    <div className="d-grid my-3">
                        <NavLink className="btn btn-grey" to="/checkout" exact >Till Kassan</NavLink>
                    </div>
                    <div className="d-grid my-3">                            
                        <NavLink className="btn" to="/products">Fortsätt handla</NavLink>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default ShoppingCart
