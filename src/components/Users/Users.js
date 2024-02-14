import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {userService} from "../../services";
import User from "../User/User";

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