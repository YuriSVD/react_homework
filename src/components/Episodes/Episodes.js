import React, {useEffect} from 'react';
import {useAppReducer} from "../../hooks/useAppReducer";
import {episodeService} from "../../services/episode.service";
import {episodeActions} from "../../reducers/episode.reducer";
import Episode from "../Episode/Episode";
import Pagination from "../Pagination/Pagination";

const Episodes = () => {
    const [{pageLink, episodes}, dispatch] = useAppReducer((state) => state.episodes);
    useEffect(() => {
        episodeService.getAll(pageLink)
            .then(value => value.data)
            .then(value => {
                dispatch(episodeActions.setEpisodes(value.results));
                dispatch(episodeActions.setPrevPage(value.info.prev));
                dispatch(episodeActions.setNextPage(value.info.next));
            })
    }, [dispatch, pageLink]);
    return (
        <div>
            {episodes.map((episode, index) => <Episode key={index} episode={episode}/>)}
            <Pagination/>
        </div>
    );
};

export default Episodes;