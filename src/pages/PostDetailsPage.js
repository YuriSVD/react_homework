import React from 'react';
import {useLoaderData} from "react-router-dom";

import PostDetails from "../components/PostDetails/PostDetails";

const PostDetailsPage = () => {
    const {data} = useLoaderData();
    return (
        <div>
            <PostDetails postDetails={data}/>
        </div>
    );
};

export {PostDetailsPage};