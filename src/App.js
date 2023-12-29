import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./components/home/Home";
import Layout from "./components/layout/Layout";
import About from "./components/about/About";
import Comments from "./components/comments/Comments";
import Albums from "./components/albums/Albums";
import Todos from "./components/todos/Todos";
import PostDetails from "./components/postDetails/PostDetails";

function App() {
    return (
        <div className="App">
            <div>
                <h3>Menu:</h3>
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/layout"}>Layout</Link>
                    </li>
                    <li>
                        <Link to={"/about"}>About</Link>
                    </li>
                </ul>
            </div>
            <div>
                <h3>View</h3>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/layout"} element={<Layout/>}>
                        <Route path={"comments"} element={<Comments/>}>
                            <Route path={":postId"} element={<PostDetails/>}/>
                        </Route>
                        <Route path={"albums"} element={<Albums/>}/>
                        <Route path={"todos"} element={<Todos/>}/>
                    </Route>
                    <Route path={"/about"} element={<About/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
