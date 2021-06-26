import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../store/actions/productsAction'

import ProductCard from '../components/products/ProductCard'

const Products = () => {

    const dispatch = useDispatch()
    const products = useSelector(state => state.products)
    

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])


    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
           {
               products.map(product => (
                   <ProductCard product={product} key={product._id}/>
               ))
           } 
        </div>
    )
}

export default Products
