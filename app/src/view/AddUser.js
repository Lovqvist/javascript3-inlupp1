import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/actions/authActions'
import { useHistory } from 'react-router'

const AddUser = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSub = (e) => {
        e.preventDefault()
        dispatch(addUser({
            firstName,
            lastName,
            email,
            password
        }))
        history.push('/users')
    }
    return (
        <div>
            <form className="border p-5 col-6 mx-auto m-5" onSubmit={handleSub}>
                    <h4 className="text-center">Registrera kund</h4>

                    <div className="row">
                        <div className="col">
                                <div className="mb-4">
                                    <label htmlFor="firstName" className="form-label ">Förnamn</label>
                                    <input type="firstName" id="firstName" className="form-control" value={firstName} onChange={ e => setFirstName(e.target.value)} />
                                </div>
                        </div>

                        <div className="col">
                                <div className="mb-4">
                                    <label htmlFor="lastName" className="form-label ">Efternamn</label>
                                    <input type="lastName" id="lastName" className="form-control" value={lastName} onChange={ e => setLastName(e.target.value)} />
                                </div>
                        </div>
                    </div>


                    <div className="mb-4">
                        <label htmlFor="email" className="form-label ">Email</label>
                        <input type="email" id="email" className="form-control" value={email} onChange={ e => setEmail(e.target.value)} />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="form-label ">Lösenord</label>
                        <input type="password" id="password" className="form-control" value={password} onChange={ e => setPassword(e.target.value)} />
                    </div>
                    <button className="btn btn-grey btn-block">Skapa konto</button>

                    
                </form>
        </div>
    )
}

export default AddUser
