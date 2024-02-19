import React from 'react';
import {useLocation} from "react-router-dom";

import {Character} from "../Character";

const Characters = () => {
    const {state} = useLocation();
    return (
        <div>
            {Object.values(state).map((characterLink, index) => <Character key={index} characterLink={characterLink}/>)}
        </div>
    );
};

export {Characters};