import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useNavigate, useParams} from "react-router-dom";
import {userService} from "../services/user.service";

const UserDetails = () => {
    const {userId} = useParams();
    const [user, setUser] = useState(null);
    useEffect(() => {
        userService.getUserById(userId)
            .then(value => value.data)
            .then(value => setUser(value));
    }, [userId]);
    console.log(user);
    const navigate = useNavigate();
    return (
        <>
            {user &&
                <div>
                    <div>
                        <h3>User Details:</h3>
                        <div>Name: {user.name}</div>
                        <div>Username: {user.username}</div>
                        <div>Email: {user.email}</div>
                        <div>Phone: {user.phone}</div>
                        <div>Website: {user.website}</div>
                        <button onClick={() => {
                            navigate("posts");
                        }}>Posts of current user
                        </button>
                    </div>
                    <div>
                        <Outlet/>
                    </div>
                </div>
            }
        </>
    );
};

export default UserDetails;