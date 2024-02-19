import React, {useState} from 'react';

import css from "./Pagination.module.css"

const Pagination = ({pagination, setSelectedPage}) => {
    let [currentPage, setCurrentPage] = useState(1);
    const {next, prev} = pagination;
    return (
        <div className={css.Pagination}>
            <button disabled={!prev} onClick={()=> {
                setSelectedPage(prev);
                setCurrentPage(--currentPage);
            }}>prev</button>
            <div>{currentPage}</div>
            <button disabled={!next} onClick={() => {
                setSelectedPage(next);
                setCurrentPage(++currentPage);
            }}>next</button>
        </div>
    );
};

export {Pagination};