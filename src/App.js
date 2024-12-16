import {Routes, Route} from "react-router-dom";

import Home from "./pages/home";
import Experience from "./pages/experience";
import Connect from "./pages/connect";
import NotFound404 from "./pages/404";

import "./app.css";

function App() {

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/experience" element={<Experience/>}/>
                <Route path="/connect" element={<Connect/>}/>
                <Route path="*" element={<NotFound404/>}/>
            </Routes>

        </div>
    );
}

export default App;
