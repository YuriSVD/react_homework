import React, {useEffect, useState} from 'react';
import Post from "../post/Post";

const Posts = ({lift}) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(value => value.json())
            .then(value => setPosts(value))
    }, []);
    return (
        <div>
            {posts.map(post => <Post post={post} key={post.id} lift={lift}/>)}
        </div>
    );
};

export default Posts;