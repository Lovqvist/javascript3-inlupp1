import actiontypes from "../actiontypes";

const initState = {
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
                userId: action.payload.user._id,
                userEmail: action.payload.user.email,
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

        case actiontypes().auth.update:
            return{
            ...state,
            admin: action.payload.admin
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