import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";
import {axiosService} from "../../services/axios.service";
import Post from "../post/Post";
import {userService} from "../../services/user.service";

const PostsOfCurrentUser = () => {
    const {userId} = useParams();
    const [postsOfCurrentUser, setPostsOfCurrentUser] = useState([]);
    useEffect(() => {
        userService.getUserPosts(userId)
            .then(value => value.data)
            .then(value => setPostsOfCurrentUser(value))
    }, [userId]);
    return (<div>
        <h3>Posts of current user</h3>
        {postsOfCurrentUser.map(post => <Post key={post.id} post={post}/>)}
        <Outlet/>
    </div>);
};

export default PostsOfCurrentUser;