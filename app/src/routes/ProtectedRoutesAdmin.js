import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const ProtectedRoutesAdmin = ({component: Component, ...rest}) => {
     const admin = useSelector(state => state.auth.admin);

    return (
        <Route {...rest} render={props => {
            if(admin){
                return <Component {...props} />
            } else {
                return <Redirect to={{pathname: '/login', state: { from: props.loaction}}} />
            }
        }} />
    )
}
