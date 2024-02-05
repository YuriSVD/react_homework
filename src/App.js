import {useState} from "react";

import './App.css';
import Posts from "./components/Posts/Posts";
import ChosenPost from "./components/ChosenPost/ChosenPost";
import Launches from "./components/Launches/Launches";

function App() {
    const [chosenPost, setChosenPost] = useState(null);
    const lift = (obj) => {
        setChosenPost({...obj});
    };
    return (
        <div className="App">
            <div>
                {chosenPost && <div>
                    <ChosenPost chosenPost={chosenPost}/>
                    <hr/>
                </div>}
                <Posts lift={lift}/>
            </div>
            <div>
                <Launches/>
            </div>
        </div>
    );
}

export default App;
