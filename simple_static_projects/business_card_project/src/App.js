import React from "react";
import ProfilePic from "./components/ProfilePic";
import Buttons from "./components/Buttons";
import About from "./components/About"
import Interests from "./components/Interests"

export default function App() {
  return (
    <div className="card">
    <ProfilePic />
    <Buttons />
    <About />
    <Interests />
    </div>
  );
}
