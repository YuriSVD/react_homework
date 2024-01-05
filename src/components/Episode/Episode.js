import React from 'react';
import {useNavigate} from "react-router-dom";
import {useAppReducer} from "../../hooks/useAppReducer";
import {episodeActions} from "../../reducers/episode.reducer";

const Episode = ({episode}) => {
    const [, dispatch] = useAppReducer(state => state.episodes);
    const navigate = useNavigate();
    return (
        //<Link to={"/characters"}>
            <div>
                {episode.id}. {episode.name}
                <button onClick={() => {
                    dispatch(episodeActions.setEpisodeCharacters(episode.characters));
                    dispatch(episodeActions.setEpisodeName(episode.name));
                    navigate("/characters");
                }}>Details</button>
            </div>
        //</Link>
    );
};

export default Episode;