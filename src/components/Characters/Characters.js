import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {Character} from "../Character";
import {episodeActions} from "../../store";

const Characters = () => {
    const {ids} = useParams();
    const {characters} = useSelector(state => state.episodes);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(episodeActions.getCharacters(ids))
    }, [dispatch, ids]);
    return (
        <div>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};