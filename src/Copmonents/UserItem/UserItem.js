import React from 'react';

const UserItem = ({user}) => {
    return (
        <div>
            <h4>{user.name}</h4>
        </div>
    );
};

export default UserItem;