import css from "./Pagination.module.css"
import React, {useState} from 'react';

const PaginationPage = ({pagination, setSelectedPage}) => {
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

export default PaginationPage;