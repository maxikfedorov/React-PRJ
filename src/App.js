import React, {useState} from "react";
import './styles/style.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import PostBoard from "./components/PostBoard";

function App() {

    return (
        <div className="App">
            <Header/>
            <PostBoard/>
            <Footer/>
        </div>
    );
}

export default App;
