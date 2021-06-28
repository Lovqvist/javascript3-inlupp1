import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const ProtectedRoutesUser = ({component: Component, ...rest}) => {
    const loggedIn = useSelector(state => state.auth.userEmail);
    const admin = useSelector(state => state.auth.admin);

    return (
        <Route {...rest} render={props => {
            if(loggedIn){
                return <Component {...props} />
            } else {
                return <Redirect to={{pathname: '/login', state: { from: props.loaction}}} />
            }
        }} />
    )
}
