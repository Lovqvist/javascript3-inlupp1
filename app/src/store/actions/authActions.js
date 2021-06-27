import actiontypes from '../actiontypes';
import axios from 'axios'



export const login = user => {
  return dispatch => {
    const email = user.email
    dispatch(loading())
    axios.post('http://localhost:8888/api/users/login', user)
    // console.log(email)
    axios.get(`http://localhost:8888/api/users/${email}`)
    
    .then(res => {
      
      dispatch(success({user, admin: res.data.admin}))
      console.log(user) 
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


export const updateUserAdmin = (email, user) => {
  return dispatch => {
    dispatch(loading())
    user.admin = !user.admin 
    axios.patch(`http://localhost:8888/api/users/${email}`, user) 
    dispatch(updateUser(user.admin)) 
  }
  }



export const logout = () => {
  return {
    type: actiontypes().auth.logout
  }
}




export const success = ({user, admin}) => {
  console.log(user)
  return {
    
    type: actiontypes().auth.success,
    payload: {user, admin}
  }
}

export const updateUser = (admin) => {
  return {
    type: actiontypes().auth.update,
    payload: admin
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

  