import React from 'react';
import Header from "../components/Header";
import Dynamic from "../components/Dynamic";
import Footer from "../components/Footer";

const ToDoListPage = () => {
    return (
        <div className={"div-page"}>
            <Header/>
            <Dynamic/>
            <Footer/>
        </div>
    );
};

export default ToDoListPage;