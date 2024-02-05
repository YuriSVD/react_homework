import React, {useEffect, useState} from 'react';

import Post from "../Post/Post";
import {jsonService} from "../../services/json.service";

const Posts = ({lift}) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        jsonService.getAll().then(value => value.data).then(value => setPosts(value));
    }, []);
    return (
        <div>
            {posts.map(post => <Post post={post} key={post.id} lift={lift}/>)}
        </div>
    );
};

export default Posts;