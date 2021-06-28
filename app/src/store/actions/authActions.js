import actiontypes from '../actiontypes';
import axios from 'axios'
import { getUsers } from './usersAction';



export const login = user => {
  return dispatch => {
    const email = user.email
    dispatch(loading())
    axios.post('http://localhost:8888/api/users/login', user)
    // console.log(email)
    axios.get(`http://localhost:8888/api/users/${email}`)
    
    .then(res => {
      dispatch(success({user, admin: res.data.admin}))
    })
    
    .catch(err => {
      dispatch(failure(err.message))
    })
  }
}


export const register = (user) => {
    return dispatch => {
        dispatch(loading())
        axios.post('http://localhost:8888/api/users/register', user)
        const email = user.email
        // console.log(email)
        axios.get(`http://localhost:8888/api/users/${email}`)
        
        .then(res => { 
          dispatch(success({user, admin: user.admin}))
    })  
        .catch(err => {
          dispatch(failure(err.message))
        })
    }
}

export const addUser = (user) => {
  return dispatch => {
    dispatch(loading())
        axios.post('http://localhost:8888/api/users/register', user)
        .then(() => {
          dispatch(getUsers())
        })
        .catch(err => dispatch(failure(err.message)))
  }
}



export const logout = () => {
  return {
    type: actiontypes().auth.logout
  }
}




export const success = ({user, admin}) => {
  
  return {
    
    type: actiontypes().auth.success,
    payload: {user, admin}
  }
}




export const loading = () => {
    return {
      type: actiontypes().auth.loading
      
    }
  }
  

  
  export const failure = error => {
    return {
      type: actiontypes().auth.failure,
      payload: error
    }
  }

  