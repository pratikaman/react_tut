import React from "react";
import {memes} from "../memesData"

export default function Meme() {


    /// database state
    const [allMemeImages, changeMemeDatabase] = React.useState(memes)

    ///  meme state
    const [meme, changeMeme] = React.useState({
      topText:"",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    function getMemeImage() {
      const memesArray = memes.data.memes
      const randomNumber = Math.floor(Math.random() * memesArray.length)
      changeMeme((prevMeme)=>{
        return {
          ...prevMeme,
          randomImage: allMemeImages.data.memes[randomNumber].url
        }
      })
      
  }

     
  return (
    <main>
      <div action="" className="form">
        <input type="text" placeholder="Top Text" className="form--input" />
        <input type="text" placeholder="Bottom Text" className="form--input" />

        <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>

      <img className="meme--image" src={meme.randomImage} alt="" />
    </main>
  );
}
