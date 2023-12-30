import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post.service";
import {useParams} from "react-router-dom";
import Comment from "../comment/Comment";

const PostDetails = () => {
    const {postId} = useParams();
    console.log(postId);
    const [post, setPost] = useState(null);
    const [commentsToPost, setCommentsToPost] = useState([])
    useEffect(() => {
        postService.getPostById(postId)
            .then(value => value.data)
            .then(value => setPost(value));
        postService.getCommentsToPost(postId)
            .then(value => value.data)
            .then(value => setCommentsToPost(value));
    }, [postId]);
    console.log(post);
    console.log(commentsToPost);
    return (
        <>
            {post &&
                <div>
                    <h3>Details of Selected Post</h3>
                    <div>UserId: {post.userId}</div>
                    <div>Id: {post.id}</div>
                    <div>Title: {post.title}</div>
                    <div>Body: {post.body}</div>
                    <h3>Comments to current post</h3>
                    {commentsToPost.map(comment => <Comment key={comment.id} comment={comment}/>)}
                </div>
            }
        </>
    );
};

export default PostDetails;