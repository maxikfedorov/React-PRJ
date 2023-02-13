import React from 'react';
import Header from "../components/Header";
import PostBoard from "../components/PostBoard";
import Footer from "../components/Footer";

const Posts = () => {
    return (
        <div className="Posts-Main">
            <Header/>
            <PostBoard/>
            <Footer/>
        </div>
    );
};

export default Posts;