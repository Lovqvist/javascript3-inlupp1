import actiontypes from "../actiontypes";

const initState = {
    list: [],
    loading: false,
    error: undefined
}

const ordersReducer = (state = initState, action) => {
    switch(action.type) {
  
      case actiontypes().orders.loading:
        return {
          ...state,
          loading: true
        }
  
      case actiontypes().orders.success:
        return {
          ...state,
          loading: false,
          list: action.payload
        }
  
      case actiontypes().orders.failure:
        return {
          ...state,
          loading: false,
          error: action.payload
        }

      
  
      default:
        return state
    }
  }

  export default ordersReducer;