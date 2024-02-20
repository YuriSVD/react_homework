import React, {useState} from 'react';

import css from "./Pagination.module.css"

const Pagination = ({setQuery, totalPages}) => {
    let [currentPage, setCurrentPage] = useState(1);
    return (
        <div className={css.Pagination}>
            <button disabled={currentPage === 1} onClick={()=> {
                setQuery(prev => {prev.set("page", (--currentPage).toString())})
                setCurrentPage(currentPage);
            }}>prev</button>
            <div>{currentPage}</div>
            <button disabled={currentPage === totalPages} onClick={() => {
                setQuery(prev => {prev.set("page", (++currentPage).toString())})
                setCurrentPage(currentPage);
            }}>next</button>
        </div>
    );
};

export {Pagination};