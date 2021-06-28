import React from 'react'
import { useDispatch } from 'react-redux';
import { updateUserAdmin } from '../../store/actions/userAction';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom';


const UserCard = ({user}) => {
    let history = useHistory()
    const dispatch = useDispatch()
    let admin = user.admin
    console.log(user.admin)
    
    
    const changeAdmin = () => {
       dispatch(updateUserAdmin(user.email, user))  
       history.push('/users')  
    }
    return (
        
        <div className="row py-3 m-auto border-bottom align-items-center">
            <div className="col">{user.firstName} </div>
            <div className="col">{user.lastName} </div>
            <div className="col">{user.email} </div>
            <div className="col ">
            <Link to={`/users/change-user/${user.email}`}className="btn me-2">Redigera</Link>
            { !admin
            ? <button className="btn" onClick={changeAdmin}>Kund</button> 
            : <button className="btn btn-success" onClick={changeAdmin}>Admin</button> 
            }
            
            </div>
        </div>
    )
}

export default UserCard
