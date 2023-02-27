import React from "react";
import Posts from "./pages/Posts";
import {Route, Routes} from "react-router-dom";
import About from "./pages/About";
import ToDoList from "./pages/ToDoList";

function App() {

    return (

            <Routes>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/dynamic" element={<ToDoList/>}/>
            </Routes>

    );
}

export default App;
