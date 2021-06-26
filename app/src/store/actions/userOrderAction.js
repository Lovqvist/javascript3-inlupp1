import actiontypes from "../actiontypes";
import axios from 'axios';

export const getUserOrders = email => {
    return async dispatch => {
        dispatch(loading())
        const res = await axios.get(`http://localhost:8888/api/order/${email}`)
        dispatch(setUserOrder(res.data))
        
    }
}

export const setUserOrder = order => {
    // console.log(order)
    return {
        type: actiontypes().userOrder.set,
        payload: order

    }
}

export const placeOrder = ({cart, email, price}) => {
    return dispatch => {
        dispatch(loading())
        axios.post('http://localhost:8888/api/order/new', {cart, email, price})
        console.log(cart)
        console.log(email)
        console.log(price)
        
            return {
      
                type: actiontypes().userOrder.add,
                payload: {cart, email, price}
              }
       
    }
}

export const clearOrder = () => {
    return {
        type: actiontypes().userOrder.clear
    }
}

export const loading = () => {
    return {
      type: actiontypes().userOrder.loading
    }
  }

 

  export const failure = error => {
    return {
      type: actiontypes().userOrder.failure,
      payload: error
    }
  }