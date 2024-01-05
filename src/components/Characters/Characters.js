import React from 'react';
import {useAppReducer} from "../../hooks/useAppReducer";
import Character from "../Character/Character";

const Characters = () => {
    const [{characters, episodeName}] = useAppReducer(state => state.episodes);
    return (
        <div>
            <h3>Episode: {episodeName}</h3>
            <h4>Starring:</h4>
            {characters.map((characterLink, index) => <Character key={index} characterLink={characterLink}/>)}
        </div>
    );
};
export default Characters;