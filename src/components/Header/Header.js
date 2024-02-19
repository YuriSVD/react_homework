import React from 'react';
import {useAppContext} from "../../hooks";

const Header = () => {
    const {episodeTitle} = useAppContext();
    return (
        <div>
            <h2>Rick and Morty</h2>
            {episodeTitle && <h2>Episode: {episodeTitle}</h2>}
        </div>
    );
};

export {Header};