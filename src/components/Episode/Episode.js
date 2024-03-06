import React from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import css from "./Episode.module.css"
import {episodeActions} from "../../store";

const Episode = ({item}) => {
    const dispatch = useDispatch();
    const {id, name, episode, characters} = item;
    const navigate = useNavigate();
    const getCharacters = () => {
        const ids = characters.map(character => character.split("/").slice(-1)[0]).join(",");
        dispatch(episodeActions.setEpisode(item));
        navigate(`/characters/${ids}`);
    }

    return (
        <div className={css.Episode} onClick={getCharacters}>
            <div>Id: {id}</div>
            <div>name: {name}</div>
            <div>Episode: {episode}</div>
        </div>
    );
};

export {Episode};