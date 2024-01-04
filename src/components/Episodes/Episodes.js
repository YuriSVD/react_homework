import "./Episodes.css"
import React, {useEffect, useState} from 'react';
import Episode from "../Episode/Episode";
import PaginationPage from "../PaginationPage/PaginationPage";
import {startURL} from "../../configs";
const Episodes = () => {
    const [pagination, setPagination] = useState({prev: null, next: null, episodes: []});
    const [selectedPage, setSelectedPage] = useState(startURL);
    useEffect(() => {
        fetch(selectedPage)
            .then(value => value.json())
            .then(value => {
                setPagination({prev: value.info.prev, next: value.info.next, episodes: value.results});
            });
    }, [selectedPage]);
    return (
        <div>
            <div className={"Episodes"}>
                {pagination.episodes.map(episode => <Episode key={episode.id} item={episode}/>)}
            </div>
            <PaginationPage pagination={pagination} setSelectedPage={setSelectedPage}/>
        </div>
    );
};

export default Episodes;