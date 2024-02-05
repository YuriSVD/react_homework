import React from 'react';

const ChosenPost = ({chosenPost}) => {
    const {id, title, body} = chosenPost;
    return (
        <div>
            <h2>{id} {title}</h2>
            <p>{body}</p>
        </div>
    );
};

export default ChosenPost;