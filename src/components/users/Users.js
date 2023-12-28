import React, {useEffect, useState} from 'react';
import {userService} from "../../services/json.service";
import User from "../user/User";
import UserForm from "../user/UserForm";

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        userService.getAll().then(value => value.data).then(value => setUsers(value));
    }, []);
    return (
        <div>
            <UserForm/>
            {users.map(user => <User user={user} key={user.id}/>)}
        </div>
    );
};

export default Users;