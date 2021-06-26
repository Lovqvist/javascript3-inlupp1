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