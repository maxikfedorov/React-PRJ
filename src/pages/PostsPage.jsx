import React from 'react';
import Header from "../components/Header";

import Footer from "../components/Footer";
import PostBoard from "../components/PostBoard";


const PostsPage = () => {
    return (
        <div className="div-page">
            <Header/>
            <PostBoard/>
            <Footer/>
        </div>
    );
};

export default PostsPage;