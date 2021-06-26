import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart, deleteProduct } from '../../store/actions/cartActions'

const ShoppingCartProduct = ({product}) => {

    const dispatch = useDispatch()


    const add = e => {
        e.stopPropagation()
        dispatch(addToCart(product))
    }

    const sub = e => {
        e.stopPropagation()
        dispatch(removeFromCart(product))
    }

    const del = e => {
        e.stopPropagation()
        dispatch(deleteProduct(product._id))
    }


    return (
        <div>
            <div v-if="item.quantity > 0" className="cart-item">
                <div className="py-2 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        <img src={product.image} alt="" className="img-fluid image-width"/>
                        <div className="m-2"><strong>{product.name }</strong>
                            <div><small>{product.price}kr x {product.quantity}st</small></div>
                        </div>
                    </div>
                    <div >
                        <div className="btn-group btn-group-sm me-2" role="group">
                            <button className="btn btn-grey" onClick={sub} >-</button>
                            <button className="btn btn-grey" onClick={add}>+</button>
                        </div>
                            <button className="btn text-danger btn-sm" onClick={del} ><i className="far fa-trash-alt"></i></button>
                        </div>
                    </div>
                <div className="dropdown-divider"></div>
            </div>
        </div>
    )
}

export default ShoppingCartProduct
