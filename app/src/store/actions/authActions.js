import actiontypes from '../actiontypes';
import jwt  from 'jsonwebtoken';
import axios from 'axios'
import { getUsers } from './usersAction';


const apiCall = (url, data, dispatch) => {
  axios.post(url, data)
  .then(res => {
    console.log(res.data)
    dispatch(checkAdmin(res.data.token))
  })
  .catch(err => {
    dispatch(failure(err.message))
  })
}

export const login = user => {
  return dispatch => {
    dispatch(loading())
    apiCall('http://localhost:8888/api/users/login', user, dispatch)
  }
}

export const checkAdmin = token => {
  return dispatch => {
    localStorage.setItem('token', token)
    const id = jwt.decode(token).id; 
    axios.get(`http://localhost:8888/api/users/${id}`)
    
    .then(res => { 
      dispatch(success({token, admin: res.data.admin, email: res.data.email}))
    })
  }
}

export const register = (user) => {
    return dispatch => {
        dispatch(loading())
        apiCall('http://localhost:8888/api/users/register', user, dispatch)
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




export const success = ({token, admin, email}) => {
  return {

    type: actiontypes().auth.success,
    payload: {token, admin, email}
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

  