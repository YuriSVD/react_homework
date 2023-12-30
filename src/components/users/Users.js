import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import User from "../user/User";
import {Outlet} from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        userService.getAll()
            .then(value => value.data)
            .then(value => setUsers(value));
    }, []);
    return (
        <div>
            <h3>Users:</h3>
            {users.map(user => <User key={user.id} user={user}/>)}
            <Outlet/>
        </div>
    );
};

export default Users;