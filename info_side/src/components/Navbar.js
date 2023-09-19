import React from "react";
import logo from "../img/react-icon-small.png"

export default function Navbar(){
    return (
        <nav>
            <img src={logo} alt="obrazek" className="nav--icon" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Fun facts</h4>
        </nav>
    )
}