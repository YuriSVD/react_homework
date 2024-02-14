import React, {useEffect, useState} from 'react';

import {commentService} from "../../services";
import Comment from "../Comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        commentService.getAll()
            .then(value => value.data)
            .then(value => setComments(value));
    }, []);
    return (
        <div>
            <h3>Comments</h3>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;