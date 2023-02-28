import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PostBoard from "../components/PostBoard";
import AuthForm from "../components/Auth";


const HomePage = () => {
    return (
        <div className="div-page">
            <Header/>
            <AuthForm/>
            <PostBoard/>
            <Footer/>
        </div>
    );
};

export default HomePage;