import React, {useEffect, useState} from 'react';
import {commentService} from "../../services/json.service";
import Comment from "../comment/Comment";
import CommentForm from "../comment/commentForm";

const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        commentService.getAll()
            .then(value => value.data)
            .then(value => setComments(value));
    }, []);
    return (
        <div>
            <CommentForm comments={comments}/>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;