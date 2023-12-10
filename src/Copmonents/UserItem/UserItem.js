import React from 'react';

const UserItem = ({user}) => {
    return (
        <div className={"col-4"}>
            <div className={"box"}>
                <img src={user.avatar} alt={user.name}/>
                <h4>{user.name}</h4>
                <p>{user.birthdate.slice(0, 10)}</p>
            </div>
        </div>
    );
};

export default UserItem;