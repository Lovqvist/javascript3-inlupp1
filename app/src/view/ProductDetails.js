import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { clearProduct, getOneProduct } from '../store/actions/productsAction'
import { addToCart } from '../store/actions/cartActions'


const ProductDetails = () => {
    
    const id = useParams().id
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOneProduct(id))

        return () => {
            dispatch(clearProduct())
        }
    }, [dispatch, id])
    

    const product = useSelector(state => state.product.product)
    
    return (
    <div className="container my-3 py-5">
        {product ?
        <div className="text-center">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <img src={product.image} alt="..." className="img-fluid" />
                </div>

                <div className="col-lg-6 text-center text-lg-start">
                    <h3 className="fw-bold"> { product.name }</h3>
                    <h4 className="fw-lighter fst-italic"> { product.price } kr</h4>
                    <p> { product.desc }</p>
                    <div className="input-group m-auto justify-content-center justify-content-lg-start align-items-center">
                        {/* <input type="number" className="text-center form-control" min="1" v-model="quantity" aria-label="Quantity" aria-describedby="button-addon2"/> */}
                        <button className="btn" type="button" 
                        onClick={() => {dispatch(addToCart(product))}}>
                            <i className="text-dark fas fa-shopping-cart" ></i> Lägg i varukorgen</button>
                    </div>
                </div>
            </div>
            <button to="/" className="btn mt-2" data-abc="true"> <i className="fa fa-chevron-left"></i> Tillbaka</button>
        </div>
        : <h3>Loading ...</h3>
        }       
    </div>
    )
}

export default ProductDetails
