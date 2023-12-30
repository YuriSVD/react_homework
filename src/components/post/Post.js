import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <Link to={id.toString()} state={{...post}}>
            <div>{id}. {title}</div>
        </Link>
    );
};

export default Post;