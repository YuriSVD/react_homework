import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post.service";
import Post from "../post/Post";
import {Outlet} from "react-router-dom";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        postService.getAll()
            .then(value => value.data)
            .then(value => setPosts(value));
    }, []);
    return (
        <div>
            <h3>Posts:</h3>
            {posts.map(post => <Post key={post.id} post={post}/>)}
            <Outlet/>
        </div>
    );
};

export default Posts;