import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../store/actions/authActions';


const LogIn = ({setLogin}) => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSub = (e) => {
        e.preventDefault();
        dispatch(login({email, password}))
    } 

    return (
        <div>
            <form className="border p-5 col-6 mx-auto" onSubmit={onSub}>
            <h4 className="text-center">Logga In</h4>
            <div className="mb-4">
                <label htmlFor="email" className="form-label ">Email</label>
                <input type="email" id="email" className="form-control" value={email} onChange={ e => setEmail(e.target.value)} />
                    
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label ">Lösenord</label>
                <input type="password" id="password" className="form-control" value={password} onChange={ e => setPassword(e.target.value)} />
            </div>
            {/* <h6 className="text-danger" >Felmeddelande</h6> */}
            <button className="btn btn-grey btn-block">Logga in</button>

            <div className="text-center">
                <small>Saknar du konto? <span to="/register" className="register-link click" onClick={() => setLogin(false)}>Registrera</span> </small>
            </div>
            </form>
        </div>
    )
}

export default LogIn
