import React from 'react';
import {Link} from "react-router-dom";

import css from "./Header.module.css";

const Header = () => {
    return (
        <div className={css.Header}>
            <Link to={"/comments"}>Comments</Link>
            <Link to={"/todos"}>Todos</Link>
            <Link to={"/albums"}>Albums</Link>
        </div>
    );
};

export {Header};