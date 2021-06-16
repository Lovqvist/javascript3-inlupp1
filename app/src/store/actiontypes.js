const actiontypes = () => {
    return {
        auth: {
            login: 'LOGIN',
            logout: 'LOGOUT'
        },
        products: {
            getProducts: 'GET_PRODUCTS'
        }
    }
}

export default actiontypes