import React from "react";
import logo from "../logo.svg";
import "./style.css";
import "./script"

const Header = () => {

    return (
        <header>
            <a href={"/"}><img src={logo} alt="logo" /></a>

            <h1 className="header-title">Федоров ИКБО-16-20</h1>

            <a href={"/dynamic"}>
                <button className="button">TO DO</button>
            </a>

            <a href={"/posts"}>
                <button className="button">POSTS</button>
            </a>

        </header>
    );
};

export default Header;
