import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <h3>Sub page menu</h3>
            <ul>
                <li>
                    <Link to={"comments"}>Comments</Link>
                </li>
                <li>
                    <Link to={"albums"}>Albums</Link>
                </li>
                <li>
                    <Link to={"todos"}>Todos</Link>
                </li>
            </ul>
            <div>
                <h3>Sub view</h3>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;