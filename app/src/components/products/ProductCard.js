import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCard = ({product}) => {
    return (
        <div className="col text-dark" >
            <NavLink exact activeClassName="active" to={`/products/${product._id}`} className="card p-3 my-3 text-dark card-product">
                <img src={product.image} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{ product.name }</h5>
                    <p className="card-text lh-sm fw-light">{ product.short }</p>
                    <div className="d-flex justify-content-center mb-2"> 
                        <h4 className="my-auto text-dark">{ product.price } kr</h4>  
                        
                    </div> 
                </div>
            </NavLink>  
        </div>
    )
}

export default ProductCard
