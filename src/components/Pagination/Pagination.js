import React from 'react';
import {useAppReducer} from "../../hooks/useAppReducer";
import {episodeActions} from "../../reducers/episode.reducer";

const Pagination = () => {
    const [{prev, next}, dispatch] = useAppReducer(state => state.episodes);
    return (
        <div>
            <button disabled={!prev} onClick={() => {
                dispatch(episodeActions.setPageLink(prev));
            }}>prev</button>
            <button disabled={!next} onClick={() => {
                dispatch(episodeActions.setPageLink(next));
            }}>next</button>
        </div>
    );
};

export default Pagination;