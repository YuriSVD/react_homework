import React from 'react';
import {useLoaderData} from "react-router-dom";

import UserDetails from "../components/UserDetails/UserDetails";

const UserDetailsPage = () => {
    const {data} = useLoaderData();
    return (
        <div>
            <UserDetails userDetails={data}/>
        </div>
    );
};

export {UserDetailsPage};