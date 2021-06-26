import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../store/actions/usersAction'
import UserCard from '../components/users/UserCard'


const Users = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    const users = useSelector(state => state.users.list)


    return (
        <div className="container mt-3">
        <h2>Kunder</h2>
        <div className="mt-5 " >
            <div className="row font-weight-bold m-auto">
                <div className="col">Förnamn</div>
                <div className="col">Efternamn</div>
                <div className="col">Email</div>
                <div className="col"></div>

        </div>
        <div>
        {
              users.map(user => (
                     <UserCard key={user._id} user={user} />
                 ))
            }
                
            </div>
        </div>
    </div> 
        
        
     
    )
}

export default Users
