import React from "react";
import Contact from "./Contact";

export default function App() {
    const images = [
        "images/felix.png",
        "images/fluffykins.png",
        "images/mr-whiskerson.png",
        "images/pumpkin.png",
    ]

    const names = [
        "Mr. Whiskerson",
        "Fluffykins",
        "Felix",
        "Pumpkin"
    ]

    const phonenumbers = [
        "(212) 555-1234",
        "(212) 555-2345",
        "(212) 555-4567",
        "(0800) CAT KING",
    ]

    const emails=[
        "mr.whiskaz@catnap.meow",
        "fluff@me.com",
        "thecat@hotmail.com",
        "pumpkin@scrimba.com",
    ]

  return (
    <div className="contacts">
   <Contact image={images[0]} name={names[0]} phone={phonenumbers[0]} mail={emails[0]}/>
   <Contact image={images[1]} name={names[1]} phone={phonenumbers[1]} mail={emails[1]}/>
   <Contact image={images[2]} name={names[2]} phone={phonenumbers[2]} mail={emails[2]}/>
   <Contact image={images[3]} name={names[3]} phone={phonenumbers[3]} mail={emails[3]}/>
    </div>

  );
}