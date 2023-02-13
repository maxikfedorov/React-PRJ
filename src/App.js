import React from "react";
import './styles/style.css'
import Posts from "./pages/Posts";
import {Route, Routes} from "react-router-dom";
import About from "./pages/About";

function App() {

    return (

        <Routes>
            <Route path="/posts" element={<Posts/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>

    );
}

export default App;
