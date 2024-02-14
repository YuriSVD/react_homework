import React, {useEffect, useState} from 'react';

import Comment from "../Comment/Comment";
import {postService} from "../../services";

const PostDetails = ({postDetails}) => {
    const {userId, id, title, body} = postDetails;
    const [commentsToPost, setCommentsToPost] = useState([])
    useEffect(() => {
        postService.getCommentsToPost(id)
            .then(value => value.data)
            .then(value => setCommentsToPost(value));
    }, [id]);
    return (
        <div>
            <h3>Details of Selected Post:</h3>
            <div>UserId: {userId}</div>
            <div>Id: {id}</div>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
            <h3>Comments to Current Post:</h3>
            {commentsToPost.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default PostDetails;