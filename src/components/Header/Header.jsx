import React from "react";
import "./header.css";

const Header = () => {
    return (
        <header className="header">
            <a href="/" className="logo">MyLogo</a>
            <nav className="nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/courses">Courses</a></li>
                    <li><a href="/about">About Me</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;