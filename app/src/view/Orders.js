import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrders } from '../store/actions/ordersAction'
import OrderCard from '../components/users/OrderCard'

const Order = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getOrders())
    }, [dispatch])

    const orders = useSelector(state => state.orders.list)

    return (

    <div className="container mt-3 ">
        <h2>Ordrar</h2>
        <div className="mt-5 " >
            <div className="row font-weight-bold py-3 m-auto border-bottom align-items-center">
                <div className="col">Skapad</div>
                <div className="col">Order id / Email</div>
                <div className="col">Artiklar</div>
                <div className="col">Status</div>
        </div>
        <div>
            {
                orders.map(order => (
                    <OrderCard key={order._id} order={order} />
                ))
            }
                
            </div>
        </div>
    </div> 
    )
}

export default Order
