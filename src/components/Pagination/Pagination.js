import React from 'react';
import {useSelector} from "react-redux";

import {usePageQuery} from "../../hooks";
import css from "./Pagination.module.css"

const Pagination = ({setQuery}) => {
    const {totalPages} = useSelector(state => state.episodes);

    const {page, prevPage, nextPage} = usePageQuery();

    return (
        <div className={css.Pagination}>
            <button disabled={+page === 1} onClick={prevPage}>prev</button>
            <div>{page}</div>
            <button disabled={+page === totalPages} onClick={nextPage}>next</button>
        </div>
    );
};

export {Pagination};