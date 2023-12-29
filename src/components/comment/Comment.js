import React from 'react';
import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    return (
        <Link to={postId.toString()} state={{...postId}}>
            <div>
                {id}. {name}
            </div>
        </Link>
    );
};

export default Comment;