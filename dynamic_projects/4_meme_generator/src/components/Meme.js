import React from "react";
// import { memes } from "../memesData";

export default function Meme() {

    ///  meme state
    const [meme, changeMeme] = React.useState({
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg",
    });


  /// database state
  const [allMemes, setAllMemes] = React.useState([]);



  /// this will populate "allMemes" with list of memes objects
  /// like this-
  //   {
  //     "id": "181913649",
  //     "name": "Drake Hotline Bling",
  //     "url": "https://i.imgflip.com/30b1gx.jpg",
  //     "width": 1200,
  //     "height": 1200,
  //     "box_count": 2
  // },

  React.useEffect(()=>{
      fetch("https://api.imgflip.com/get_memes")
      .then((res)=>{
          return res.json()
      })
      .then((memesData)=>{
          return setAllMemes(memesData.data.memes)
        }
      )
    },[])



  function getMemeImage() {
    const memesArray = allMemes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    changeMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: memesArray[randomNumber].url,
      };
    });
  }

  function updateText(event){
    changeMeme(
      (prev) =>{
        return{
          ...prev,
          [event.target.name]:event.target.value
        }
      }
    )
  }



  return (
    <main>
      <div action="" className="form">
        <input 
        type="text" 
        placeholder="Top Text" 
        className="form--input" 
          name="topText"
          onChange={updateText}
          value={meme.topText}
        />


        <input 
        type="text" 
        placeholder="Bottom Text" 
        className="form--input" 
          name="bottomText"
          onChange={updateText}
          value={meme.bottomText}
        />

        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img className="meme--image" src={meme.randomImage} alt="" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
