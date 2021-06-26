import actiontypes from "../actiontypes";

const initState = {
    order: null,
    cart: [],
    email: null,
    price: null,
    completed: null,
    loading: false
}

const userOrderReducer = (state = initState, action) => {
    switch(action.type) {
        case actiontypes().userOrder.loading:
        return {
          ...state,
          loading: true
        }
        case actiontypes().userOrder.set:
            return {
                    ...state,
                    order: action.payload
            }
        case actiontypes().userOrder.add:
            return{
                ...state,
                cart: action.payload.cart,
                email: action.payload.email,
                price: action.payload.price,
            }    
        
        case actiontypes().userOrder.clear:
            return {
                ...state,
                order: null,
                cart: [],
                email: null,
                price: null,
                completed: false,
            }
        default:
            return state
    }
}


export default userOrderReducer