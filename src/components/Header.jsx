import React from "react"
import logo from "../images/troll-face-png-19697.png"

export default function Header() {

    function handleOnMouseOver() {
        console.log("MouseOver")
    }
    return(

            <header className="header">
                <img className="header--img" onMouseOver={handleOnMouseOver} src={logo}/>
                <h2 className="header--title"> Meme Generator</h2>
                <h4 className="header--project">React Course - Project 3</h4>
            </header>

    )
}
