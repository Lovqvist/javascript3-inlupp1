import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { updateUserOrder } from '../../store/actions/userOrderAction'

const OrderCard = ({order}) => {
    
    const admin = useSelector(state => state.auth.admin);
    // const orderStatus = useSelector (state => state.userOrder.completed);
    let history = useHistory()
    const dispatch = useDispatch()
    const created = order.created.split('T')
    const date = created[0]
    const time = (created[1].split('.'))[0]
    const list = order.list

    
   
    const updateOrder = () => {
        dispatch(updateUserOrder(order._id, order))  
        history.push('/orders')  
     }

    return (
        <div className="row py-3 m-auto border-bottom align-items-center">
            <div className="col">{date} {time}</div>
            <div className="col">{order._id} <br />{order.email} </div>
            <div className="col"> 
            {
             list && list.map(product => (
                  
                    <div key={product._id}>
                        {product.quantity}st {product.name}  
                    </div>
                 
                 
            ))
            
            }
            </div>
            <div className="col">
                { admin 
                ?   <>
                { order.completed
                    ?<button className="btn bg-success" onClick={updateOrder} >Skickad</button> 
                    :<button className="btn" onClick={updateOrder} >Order skapad</button> 
                }
                    </> 
                :   <>
                { order.completed
                    ?<p className="" >Skickad</p> 
                    :<p className="" >Order skapad</p> 
                }
                    </> 
                }
            </div>
            

            
            
        </div> 
        
        
    )
}

export default OrderCard