import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Episode} from "../Episode";
import css from "./Episodes.module.css"
import {usePageQuery} from "../../hooks";
import {Pagination} from "../Pagination";
import {episodeActions} from "../../store";

const Episodes = () => {

    const {episodes} = useSelector(state => state.episodes);

    const dispatch = useDispatch();

    const {page} = usePageQuery();

    useEffect(() => {
        dispatch(episodeActions.getAll(page));
    }, [dispatch, page]);
    return (
        <div>
            <div className={css.Episodes}>
                {episodes.map(episode => <Episode key={episode.id} item={episode}/>)}
            </div>
            <Pagination/>
        </div>
    );
};

export {Episodes};