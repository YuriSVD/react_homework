import React from 'react';

const Album = ({album}) => {
    const {id, title} = album;
    return (
        <div>
            {id} {title}
        </div>
    );
};

export default Album;