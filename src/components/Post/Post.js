import React from 'react';

const Post = ({post, lift}) => {
    const {id, title} = post;
    return (
        <div>
            <h2>{id} {title}</h2>
            <button onClick={() => lift(post)}>View all info</button>
        </div>
    );
};

export default Post;