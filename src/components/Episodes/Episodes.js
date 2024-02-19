import {useEffect, useState} from "react";

import {Episode} from "../Episode";
import css from "./Episodes.module.css"
import axios from "axios";
import {baseURL} from "../../configs";
import {Pagination} from "../Pagination";

const Episodes = () => {
    const [selectedPage, setSelectedPage] = useState(baseURL);

    const [apiResponse, setApiResponse] = useState({prev: null, next: null, episodes: []});

    useEffect(() => {
        axios.create({baseURL: selectedPage}).get()
            .then(value => value.data)
            .then(value => {
                setApiResponse({prev: value.info.prev, next: value.info.next, episodes: value.results})
            });
    }, [selectedPage]);
    return (
        <div>
            <div className={css.Episodes}>
                {apiResponse.episodes.map(episode => <Episode key={episode.id} item={episode}/>)}
            </div>
            <Pagination setSelectedPage={setSelectedPage} pagination={apiResponse}/>
        </div>
    );
};

export {Episodes};