import './App.css';
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import Users from "./components/users/Users";
import Comments from "./components/comments/Comments";
import Posts from "./components/posts/Posts";
import UserDetails from "./userDetails/UserDetails";
import PostsOfCurrentUser from "./components/postsOfCurrentUser/PostsOfCurrentUser";
import PostDetails from "./components/postDetails/PostDetails";

function App() {
  return (
    <div className="App">
        <div>
            <Header/>
        </div>
        <div>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/users"} element={<Users/>}>
                    <Route path={":userId"} element={<UserDetails/>}>
                        <Route path={"posts"} element={<PostsOfCurrentUser/>}>
                            <Route path={":postId"} element={<PostDetails/>}/>
                        </Route>
                    </Route>
                </Route>
                <Route path={"/posts"} element={<Posts/>}>
                    <Route path={":postId"} element={<PostDetails/>}/>
                </Route>
                <Route path={"/comments"} element={<Comments/>}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;
