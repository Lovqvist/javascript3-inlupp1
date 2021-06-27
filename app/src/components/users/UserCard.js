import React from 'react'
import { useDispatch } from 'react-redux';
import { updateUserAdmin } from '../../store/actions/authActions';
import { useHistory } from 'react-router-dom'


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
            { !admin
            ? <div className="col"><button className="btn" onClick={changeAdmin}>Kund</button> </div>
            : <div className="col"><button className="btn" onClick={changeAdmin}>Admin</button> </div>
            }
        </div>
    )
}

export default UserCard
