import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../../redux/Actions/UserAction";
import UserItem from "../../Copmonents/UserItem/UserItem";

const UserPage = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.user.users);
    useEffect(() => {
        dispatch(getUser())
    }, [dispatch])
    return (
        <div className={"container"}>
            <div className={"row"}>
                {
                    users.map((user) => (
                        <UserItem key={user.id} user={user} />
                    ))
                }
            </div>
        </div>
    );
};

export default UserPage;