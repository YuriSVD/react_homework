import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import Post from "../Post/Post";
import {postService} from "../../services";

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