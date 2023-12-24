import './App.css';
import Posts from "./components/posts/Posts";
import {useState} from "react";
import ChosenPost from "./components/post/ChosenPost";
import Launches from "./components/launches/Launches";

function App() {
    const [chosenPost, setChosenPost] = useState(null);
    const lift = (obj) => {
        setChosenPost({...obj});
    };
    return (
        <div className="App">
            <div>
                {chosenPost && <ChosenPost chosenPost={chosenPost}/>}
                <Posts lift={lift}/>
            </div>
            <div>
                <Launches/>
            </div>
        </div>
    );
}

export default App;
