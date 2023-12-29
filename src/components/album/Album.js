import React from 'react';

const Album = ({album}) => {
    const {userId, id, title} = album;
    return (
        <div>
            {id} {title}
        </div>
    );
};

export default Album;