import axios from 'axios'
import actiontypes from '../actiontypes'
import { getUsers } from './usersAction'

export const getUser = email => {
    return dispatch => {
      dispatch(loading())
      axios.get(`http://localhost:8888/api/users/${email}`)
      .then(res => dispatch(success(res.data)))
      .catch(err => dispatch(failure(err.message)))
    }
  }
  
  export const updateUserAdmin = (email, user) => {
    return dispatch => {
      dispatch(loading())
      user.admin = !user.admin 
      axios.patch(`http://localhost:8888/api/users/${email}`, user) 
      .then(() => {
        dispatch(getUsers())
      })
      .catch(err => dispatch(failure(err.message)))
    }
    }
  
    export const updateUser = (email, user) => {
      return dispatch => {
        dispatch(loading())
        axios.patch(`http://localhost:8888/api/users/${email}`, user)
        .then(() => dispatch(getUsers()))
        .catch(err => dispatch(failure(err.message)))
      }
    }
  
    export const deleteUser = email => {
      return dispatch => {
        dispatch(loading())
        axios.delete(`http://localhost:8888/api/users/${email}`)
        .then(() => dispatch(getUsers()))
        .catch(err => dispatch(failure(err.message)))
      }
    }

    export const loading = () => {
        return {
          type: actiontypes().user.loading
        }
      }
      
      export const success = (user) => {
        console.log(user)
        return {
          type: actiontypes().user.success,
          payload: user
        }
      }
      
      export const failure = (error) => {
        return {
          type: actiontypes().user.failure,
          payload: error
        }
      }
  