// import { useState} from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { NavLink } from 'react-router-dom'
import ShoppingCartProduct from '../components/shoppingCart/ShoppingCartProduct'
import { clearOrder, placeOrder } from '../store/actions/userOrderAction'
import { useHistory } from 'react-router-dom'

const CheckOut = () => {

    const dispatch = useDispatch();

    const shoppingCart = useSelector(state => state.cart.shoppingCart )
    const totalCartAmount = useSelector(state => state.cart.totalCartAmount)
    const getTotalQuantity = useSelector(state => state.cart.totalCartQuantity)
    const loggedIn = useSelector(state => state.auth.userEmail);
    const history = useHistory();
    

    const empty = (
        <div>
            <div className=" d-flex justify-content-center align-items-center mb-5">
                Din kundvagn är tom.
            </div>
            <div className="dropdown-divider"></div>
        </div>
                    )

   

    const createOrder = (e) => {
        e.preventDefault()
        
        dispatch(placeOrder({
            cart : shoppingCart,
            email : loggedIn,
            price : totalCartAmount

        })
        
        )
        history.push('/checkout/orderconfirm')
    }

    return (
        <div className="container">
        <article className="card ">
            <h1 className="card-header text-center mt-4"> Din beställning </h1>
            <div className="card-body ">
            {
                shoppingCart.map(product => 
                    <ShoppingCartProduct product={product} shoppingCart={shoppingCart} key={product._id}/>
                    )
            }  

                    {!shoppingCart.length && empty}        
                <div className="d-flex justify-content-end">
                    <h5 className="mx-5">Antal produkter: </h5>
                    <div className="d-flex justify-content-end">
                        <h5> {getTotalQuantity} </h5>
                        <h5 className="mx-1">st</h5>  
                    </div> 
                </div>
                <div className="d-flex justify-content-end">
                    <h5 className="mx-5">Att betala: </h5>
                    <div className="d-flex justify-content-end">
                        <h5> {totalCartAmount} </h5>
                        <h5 className="mx-1">kr</h5>  
                    </div> 
                </div>    
        
                <div className="d-flex justify-content-between align-items-center mt-4">
                    <div>
                        <NavLink to="/products" className="btn" data-abc="true"> <i className="fa fa-chevron-left"></i> Fortsätt handla</NavLink>
                    </div>
                    <div >
                        { !shoppingCart.length
                            ? <button  className="btn btn-grey" disabled>Kundvagn tom </button>
                            : <> 
                            { !loggedIn
                                ? <button className="btn btn-grey" disabled >Logga in för att lägga order</button>
                                : <button className="btn btn-grey" onClick={createOrder}>  Lägg order </button>
                            } 
                            </>
                        }   
                        
                    </div>
                </div>
            </div>
        </article>
    </div>
    )
}

export default CheckOut
