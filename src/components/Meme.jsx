import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme(props) {

    /**
     * Challenge: save random URL in state
     * -Create new state called `memeImage` with an empty string as default
     * When the getMemeImage function is called, update the 'memeImage' state
     * to be the random chosen image URL
     * Below the div.form, add an <img /> and set the source to the new `memeImage
     * state you created.
    *
    */

   const [memeImage, setMemeImage] = useState('');


        // let url
        function getMemeImage(){
            const memesArray = memesData.data.memes
            const randomNumber = Math.floor(Math.random() * memesArray.length)
            setMemeImage(memesArray[randomNumber].url)
            // const url = memesArray[randomNumber].url
            // console.log(url)
        }

    return (
        <main>
            <div className="form" >
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
            <img className="meme--image" src={memeImage} alt="" />

        </main>
    )

}
