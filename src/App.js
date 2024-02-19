import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Episodes from "./components/Episodes/Episodes";
import Characters from "./components/Characters/Characters";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={"/"} element={<MainLayout/>}>
                <Route index element={<Navigate to={"episodes"}/>}/>
                <Route path={"episodes"} element={<Episodes/>}/>
                <Route path={"characters"} element={<Characters/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export default App;
