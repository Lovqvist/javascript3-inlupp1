import actiontypes from "../actiontypes";

const initState = []

const productsReducer = (state = initState, action) => {
    switch(action.type){
        case actiontypes().products.set:
            state = action.payload
            return state
        
        default:
            return state
    }
}

export default productsReducer;