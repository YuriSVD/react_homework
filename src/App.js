import './App.css';
import Cars from "./components/cars/Cars";
import Comments from "./components/comments/Comments";
import Users from "./components/users/Users";

function App() {
    return (
        <div className="App">
            {/*{<Cars/>}*/}
            {/*{<Comments/>}*/}
            <Users/>
        </div>
    );
}

export default App;
