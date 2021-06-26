import React from 'react'
import { useSelector } from 'react-redux'


const OrderCard = ({order}) => {
    
    const admin = useSelector(state => state.auth.admin);
    // const orderStatus = useSelector (state => state.userOrder.completed);
    
    
    const created = order.created.split('T')
    const date = created[0]
    const time = (created[1].split('.'))[0]
    const list = order.list


   
    return (
        <div className="row py-3 m-auto border-bottom align-items-center">
            <div className="col">{date} {time}</div>
            <div className="col">{order._id} </div>
            <div className="col"> 
            {
             list && list.map(product => (
                  
                    <div key={product.product._id}>
                        {product.quantity}st {product.product.name}  
                    </div>
                 
                 
            ))
            
            }
            </div>
            <div className="col">
                { admin 
                ?   <>
                { order.completed
                    ?<button className="btn bg-success" >Skickad</button> 
                    :<button className="btn" >Plockas</button> 
                }
                    </> 
                :   <>
                { order.completed
                    ?<p className="" >Skickad</p> 
                    :<p className="" >Plockas</p> 
                }
                    </> 
                }
            </div>
            

            
            
        </div> 
        
        
    )
}

export default OrderCard