import React, {useEffect, useState} from 'react';

const PaginationPage = ({pagination, setSelectedPage}) => {
    let [currentPage, setCurrentPage] = useState(1);
    const {next, prev} = pagination;
    return (
        <div>
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