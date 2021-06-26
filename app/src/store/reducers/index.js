import { combineReducers } from 'redux'


import productsReducer from './productsReducers'
import productReducer from './productReducer'
import cartReducer from './cartReducer'
import userOrderReducer from './userOrderReducer'
import authReducer from './authReducer'
import usersReducer from './usersReducer'
import ordersReducer from './ordersReducer'


export default combineReducers({
    auth: authReducer,
    products: productsReducer,
    product: productReducer,
    cart: cartReducer,
    userOrder: userOrderReducer,
    users: usersReducer,
    orders: ordersReducer

})