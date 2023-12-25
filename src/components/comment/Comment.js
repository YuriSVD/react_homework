import React from 'react';

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    return (
        <div>
            <h3>{id} {name}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Comment;