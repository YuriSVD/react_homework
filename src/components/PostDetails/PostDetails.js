import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../services";

const PostDetails = () => {
    const {postId} = useParams();
    const [post, setPost] = useState(null);
    useEffect(() => {
        postService.getPostById(postId)
            .then(value => value.data)
            .then(value => setPost(value));
    }, [postId]);
    console.log(post);
    return (<>
            {post &&
            <div>
                <div>UserId: {post.userId}</div>
                <div>Id: {post.id}</div>
                <div>Title: {post.title}</div>
                <div>Body: {post.body}</div>
            </div>}
    </>);
};

export default PostDetails;