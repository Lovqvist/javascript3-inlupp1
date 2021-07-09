import jwt from "jsonwebtoken";
import actiontypes from "../actiontypes";

const initState = {
    userId: null,
    userToken: null,
    userEmail: '',
    loading: false,
    error: undefined,
    admin: false,
    
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case actiontypes().auth.loading:
            return {
                ...state,
                loading: true
            }
        
        case actiontypes().auth.success:
            return {
                ...state,
                userId: jwt.decode(action.payload.token).id,
                userToken: action.payload.token,
                userEmail: action.payload.email,
                admin: action.payload.admin,
                loading: false,
                error: undefined
            }

        case actiontypes().auth.failure:
             return {
                 ...state,
                 loading: false,
                 error: action.payload
             }   

        case actiontypes().auth.logout:
               return {
                ...initState
               }  
        default:
            return state
    }
}

export default authReducer;