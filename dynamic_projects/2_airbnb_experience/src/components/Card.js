import React from "react";

export default function Card(props) {

  let badgeText
  if (props.openSpots===0){
    badgeText = "SOLD OUT"
  }
  else if(props.location === "Online"){
    badgeText = "ONLINE"
  }
  return (
    <div className="card">
    {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`images/${props.coverImg}`} alt="pic" className="card--image" />
      <div className="card--stats">
        <img src="images/star.png" alt="star" className="card--star"/>
        <span >{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • {props.location}</span>
      </div>
      <p id="tagline" className="card--title">{props.title}</p>
      <p id="price" className="card--price">
        <span >From ${props.price}</span> / person
      </p>
    </div>
  );
}
