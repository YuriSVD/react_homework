import React from 'react';
import {useSelector} from "react-redux";
const Header = () => {
    const {selectedEpisode} = useSelector(state => state.episodes);
    return (
        <div>
            <h2>Rick and Morty</h2>
            {selectedEpisode && <h2>Episode: {selectedEpisode.name}</h2>}
        </div>
    );
};

export {Header};