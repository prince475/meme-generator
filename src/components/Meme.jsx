import React from "react";
import memesData from "../memesData";

export default function Meme(props) {

    function handleClick() {

        // let url
        function getMemeImage(){
            const memesArray = memesData.data.memes
            const randomNumber = Math.floor(Math.random() * memesArray.length)
            const url = memesArray[randomNumber].url
            console.log(url)
        }
    return (
        <main>
            {/* <p>{}</p> */}
            <div className="form">
                <input
                type="text"
                className="form--inputs"
                placeholder="Top text"
                />
                <input
                type="text"
                className="form--inputs"
                placeholder="Bottom text"
                />

                <button
                 className="form--button"
                 onClick={getMemeImage}
                 >
                Get a new meme image
                </button>
            </div>

        </main>
    )
  }

}
