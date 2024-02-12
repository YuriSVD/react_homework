import React from 'react';
import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    const {postId, id, name} = comment;
    return (
        <Link to={postId.toString()}>
            <div>
                {id}. {name}
            </div>
        </Link>
    );
};

export default Comment;