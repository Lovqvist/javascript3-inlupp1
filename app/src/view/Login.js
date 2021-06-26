import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import LogIn from '../components/login/LogIn'
import Register from '../components/login/Register'

const Login = () => {

    const history = useHistory();

    const [login, setLogin] = useState(true);

    const user = useSelector(state => state.auth.userEmail);

    useEffect(() => {
        if(user) {
            try {history.push(history.location.state.from.pathname)}
            catch{history.push('/products')}
        }
    }, [user, history])

    return (
    <div>
        <div className="container mt-5">
            
            { login
            ?<LogIn setLogin={setLogin}/>
            :<Register setLogin={setLogin}/>
            }

        </div>
    </div>
    )
}

export default Login
