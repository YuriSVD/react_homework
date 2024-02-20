import {useEffect, useState} from "react";

import {Episode} from "../Episode";
import css from "./Episodes.module.css"
import {Pagination} from "../Pagination";
import {rickAndMortyService} from "../../services";
import {useSearchParams} from "react-router-dom";

const Episodes = () => {

    const [apiResponse, setApiResponse] = useState({pages: null, episodes: []});

    const [query, setQuery] = useSearchParams({page: "1"});

    useEffect(() => {
        rickAndMortyService.getAllEpisodes(query.get("page")).then(value => value.data)
            .then(value => setApiResponse({episodes: value.results, pages: value.info.pages}))
    }, [query.get("page")]);
    return (
        <div>
            <div className={css.Episodes}>
                {apiResponse.episodes.map(episode => <Episode key={episode.id} item={episode}/>)}
            </div>
            <Pagination totalPages={apiResponse.pages} setQuery={setQuery}/>
        </div>
    );
};

export {Episodes};