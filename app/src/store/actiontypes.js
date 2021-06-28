const actiontypes = () => {
    return {
        auth: {
            loading: 'LOADING_AUTH',
            success: 'SUCCESS_AUTH',
            failure: 'FAILURE_AUTH',
            logout:  'LOGOUT',
            update: 'UPDATE_USER'
        },
        products: {
            set:    'GET_PRODUCTS'
        },
        product: {
            set:    'GET_ONE_PRODUCT',
            clear:  'CLEAR_PRODUCT'
        },
        cart: {
            add:    'ADD_TO_CART',
            sub:    'SUB_FROM_CART',
            delete: 'DELETE_FROM_CART',
            clear:  'CLEAR_CART'
        },
        userOrder: {
            set:    'GET_USER_ORDER',
            add:    'ADD_USER_ORDER',
            update: 'UPDATE_ORDER',
            clear:  'ORDER_CLEAR',
            loading:'LOADNING_ORDER'
        },
        users: {
            set:    'GET_USERS',
            loading:'LOADING_USERS',
            success:'SUCCESS_USERS',
            failure:'FAILURE_USERS'
            
        },
        orders: {
            set:    'GET_ORDERS',
            loading:'LOADING_ORDERS',
            success:'SUCCESS_ORDERS',
            failure:'FAILURE_ORDERS'
        }
    }
}

export default actiontypes