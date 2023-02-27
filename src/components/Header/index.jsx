import React from "react";
import logo from "../logo.svg";
import "./style.css";

const Header = () => {
    return (
        <header>
            <a href={"/posts"}><img src={logo} alt="logo" /></a>
            <a href="/dynamic">
                <button> TO-DO </button>
            </a>
            <h1 className="header-title">Федоров ИКБО-16-20</h1>
        </header>
    );
};

export default Header;
