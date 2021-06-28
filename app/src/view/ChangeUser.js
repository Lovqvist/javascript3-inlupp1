import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import { deleteUser, updateUser, getUser} from '../store/actions/userAction'


const ChangeUser = () => {
    const emailId = useParams().email
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(getUser(emailId))
      }, [dispatch, emailId])

      const [firstName, setFirstName] = useState('');
      const [lastName, setLastName] = useState('');
      const [email, setEmail] = useState('');
    
      const user = useSelector(state => state.user.user);

      useEffect(() => {
        if(user) {
          setFirstName(user.firstName);
          setLastName(user.lastName);
          setEmail(user.email);
        }
      }, [user])
    
      const handleSub = (e) => {
        e.preventDefault()
    
        dispatch(updateUser(emailId, {
          firstName,
          lastName,
          email
        }))
    
        history.push('/users')
    
      }
    
      const delUser = () => {
        dispatch(deleteUser(emailId))
        history.push('/users')
      }


    return (
         <div>
            <form className="border p-5 col-6 mx-auto m-5" onSubmit={handleSub}>
                    <h4 className="text-center">Uppdatera kund</h4>

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

                    
                    <button className="btn btn-grey btn-block">Spara</button>
                    <button className="btn btn-grey btn-block btn-danger" onClick={delUser}>Radera kund</button>
                    
                </form>
        </div>
    )
}

export default ChangeUser
