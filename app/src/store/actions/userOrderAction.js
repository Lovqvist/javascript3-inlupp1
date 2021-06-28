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
    console.log(order)
    return {
        type: actiontypes().userOrder.set,
        payload: order

    }
}

export const placeOrder = ({list, email, price}) => {
    return dispatch => {
        dispatch(loading())
        axios.post('http://localhost:8888/api/order/new', {list, email, price})
        // console.log(list)
        // console.log(email)
        // console.log(price)
        
            return {
      
                type: actiontypes().userOrder.add,
                payload: {list, email, price}
            }
    }
}

export const updateUserOrder = (id, order) => {
    return dispatch => {
        dispatch(loading())
        order.completed = !order.completed
        axios.patch(`http://localhost:8888/api/order/${id}`, order)
        dispatch(updateOrder(order.completed))
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

  export const updateOrder = (completed) => {
    return {
      type: actiontypes().userOrder.update,
      payload: completed
    }
  }