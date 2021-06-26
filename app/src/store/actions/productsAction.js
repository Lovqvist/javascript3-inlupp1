import actiontypes from "../actiontypes";
import axios from 'axios';

// Hämta alla produkter

export const getProducts = () => {
    return async dispatch => {
        const res = await axios.get('http://localhost:8888/api/products')
        dispatch(setProducts(res.data))
    }
}

export const setProducts = products => {
    return {
        type: actiontypes().products.set,
        payload: products
    }
}

// Hämta en produkt

export const getOneProduct = id => {
    return async dispatch => {
        const res = await axios.get(`http://localhost:8888/api/products/${id}`)
        dispatch(setOneProduct(res.data))
    }
}

export const setOneProduct = product => {
    return {
        type: actiontypes().product.set,
        payload: product
    }
}

export const clearProduct = () => {
    return {
        type: actiontypes().product.clear
    }
}