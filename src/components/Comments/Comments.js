import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import Comment from "../Comment/Comment";
import {commentService} from "../../services";

const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        commentService.getAll()
            .then(value => value.data)
            .then(value => setComments(value))
    }, []);
    return (
        <div>
            <div>
                <h3>Post Details</h3>
                <Outlet/>
            </div>
            <div>
                <h3>All Comments</h3>
                {comments.map(comment => <Comment comment={comment} key={comment.id}/>)}
            </div>
        </div>
    );
};

export default Comments;