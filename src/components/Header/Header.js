import React from 'react';
import {Link} from "react-router-dom";

import css from "./Header.module.css";
const Header = () => {
    return (
        <div className={css.Header}>
            <div>
                <Link to={"/users"}>Users</Link>
            </div>
            <div>
                <Link to={"/posts"}>Posts</Link>
            </div>
            <div>
                <Link to={"/comments"}>Comments</Link>
            </div>
        </div>
    );
};

export default Header;