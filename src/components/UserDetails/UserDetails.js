import React from 'react';
import {Outlet, useNavigate} from "react-router-dom";

const UserDetails = ({userDetails}) => {
    const {name, username, email, phone, website} = userDetails;
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <h3>User Details:</h3>
                <div>Name: {name}</div>
                <div>Username: {username}</div>
                <div>Email: {email}</div>
                <div>Phone: {phone}</div>
                <div>Website: {website}</div>
                <button onClick={() => {
                    navigate("posts");
                }}>Posts of current user
                </button>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default UserDetails;