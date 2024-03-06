import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./Layout";
import {CharactersPage, EpisodesPage} from "./Pages";

const router = createBrowserRouter([
    {
        path: "", element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={"episodes"}/>
            },
            {
                path: "episodes", element: <EpisodesPage/>
            },
            {
                path: "/characters/:ids", element: <CharactersPage/>
            }
        ]
    }
])

export {
    router
};