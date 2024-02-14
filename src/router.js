import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {UsersPage, CommentsPage, PostsPage, PostDetailsPage, UserDetailsPage} from "./pages";
import {postService, userService} from "./services";
import PostsOfCurrentUserPage from "./pages/PostsOfCurrentUserPage";

const router = createBrowserRouter([
    {
        path: "", element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={"users"}/>
            },
            {
                path: "users", element: <UsersPage/>, children: [
                    {
                        path: ":userId",
                        element: <UserDetailsPage/>,
                        loader: ({params: {userId}}) => userService.getUserById(userId),
                        children: [
                            {
                                path: "posts", element: <PostsOfCurrentUserPage/>, children: [
                                    {
                                        path: ":postId",
                                        element: <PostDetailsPage/>,
                                        loader: ({params: {postId}}) => postService.getPostById(postId)
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                path: "comments", element: <CommentsPage/>
            },
            {
                path: "posts", element: <PostsPage/>, children: [
                    {
                        path: ":postId", element: <PostDetailsPage/>,
                        loader: ({params: {postId}}) => postService.getPostById(postId)
                    }
                ]
            }
        ]
    }
]);

export {router};