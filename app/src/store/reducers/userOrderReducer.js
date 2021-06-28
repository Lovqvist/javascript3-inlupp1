import actiontypes from "../actiontypes";

const initState = {
    order: null,
    list: [],
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
                list: action.payload.list,
                email: action.payload.email,
                price: action.payload.price,
            }   
        
        case actiontypes().userOrder.update:
        return{
        ...state,
        completed: action.payload.completed
        }     
        
        case actiontypes().userOrder.clear:
            return {
                ...state,
                order: null,
                list: [],
                email: null,
                price: null,
                completed: false,
            }
        default:
            return state
    }
}


export default userOrderReducer