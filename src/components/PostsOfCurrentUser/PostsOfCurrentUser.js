import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import Post from "../Post/Post";
import {userService} from "../../services";

const PostsOfCurrentUser = () => {
    const {userId} = useParams();
    const [postsOfCurrentUser, setPostsOfCurrentUser] = useState([]);
    useEffect(() => {
        userService.getUserPosts(userId)
            .then(value => value.data)
            .then(value => setPostsOfCurrentUser(value))
    }, [userId]);
    return (<div>
        <h3>Posts of Current User:</h3>
        {postsOfCurrentUser.map(post => <Post key={post.id} post={post}/>)}
        <Outlet/>
    </div>);
};

export default PostsOfCurrentUser;