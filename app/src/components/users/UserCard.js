import React from 'react'

const UserCard = ({user}) => {
    return (
        
        <div className="row py-3 m-auto border-bottom align-items-center">
            <div className="col">{user.firstName} </div>
            <div className="col">{user.lastName} </div>
            <div className="col">{user.email} </div>
            
            <div className="col"><button className="btn">Redigera</button> </div>
            
        
        </div>
    )
}

export default UserCard
