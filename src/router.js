import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {AlbumsPage, CommentsPage, PostDetailsPage, TodosPage} from "./pages";

const router = createBrowserRouter([
    {
        path: "", element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={"comments"}/>
            },
            {
                path: "comments", element: <CommentsPage/>, children: [
                    {
                        path: ":postId", element: <PostDetailsPage/>
                    }
                ]
            },
            {
                path: "todos", element: <TodosPage/>
            },
            {
                path: "albums", element: <AlbumsPage/>
            }
        ]
    }
]);

export {router};