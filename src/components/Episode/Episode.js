import React from 'react';

import css from "./Episode.module.css"
import {Link} from "react-router-dom";
import {useAppContext} from "../../hooks";

const Episode = ({item}) => {
    const {id, name, episode, characters} = item;
    const {setEpisodeTitle} = useAppContext();

    return (
        <Link to={`/episode/${id}/characters`} state={{...characters}} onClick={() => setEpisodeTitle(name)} className={css.Episode}>
            <div>Id: {id}</div>
            <div>name: {name}</div>
            <div>Episode: {episode}</div>
        </Link>
    );
};

export {Episode};