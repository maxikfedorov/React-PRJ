import React from "react";
import logo from "./logo.svg";
import "../styles/style.css";

const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo" />
            <h1 className="header-title">Федоров ИКБО-16-20</h1>
        </header>
    );
};

export default Header;
