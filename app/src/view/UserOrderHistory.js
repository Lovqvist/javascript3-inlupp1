import { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getUserOrders} from '../store/actions/userOrderAction'
import OrderCard from '../components/users/OrderCard'

const UserOrderHistory = () => {
    
    const email = useParams().email
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getUserOrders(email))
    }, [dispatch, email])
    
    const orders = useSelector(state => state.userOrder.order)

    
    
    return (
    <div className="container my-3 py-5">
        <h2>Dina ordrar</h2>
        <div className="mt-5 " >
            <div className="row font-weight-bold m-auto">
                <div className="col">Skapad</div>
                <div className="col">Id / Email</div>
                <div className="col">Artiklar</div>
                <div className="col">Status</div>
        </div>

        {orders ?
        <>
            {
               orders && orders.map(order => (
                   <OrderCard key={order._id} order={order} />
               ))
           } 
        </>
        : <h3>Loading...</h3>
    }
        </div>     
    </div>
    )
}

export default UserOrderHistory
