import React from "react";
import {memes} from "../memesData"

export default function Meme() {

    const handleOnClick = ()=>{
       const memesList = memes.data.memes;
       let randomIndex = Math.floor(Math.random()*memesList.length)
       return alert(memesList[randomIndex].url)
    }
  return (
    <main>
      <div action="" className="form">
        <input type="text" placeholder="Top Text" className="form--input" />
        <input type="text" placeholder="Bottom Text" className="form--input" />

        <button className="form--button" onClick={handleOnClick}>Get a new meme image 🖼</button>
      </div>
    </main>
  );
}
