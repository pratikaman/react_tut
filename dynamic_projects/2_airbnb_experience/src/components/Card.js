import React from "react";

export default function Card() {
  return (
    <div className="card">
      <img src="katie-zaferes.png" alt="pic" className="card--image" />
      <div className="card--stats">
        <img src="star.png" alt="star" className="card--star"/>
        <span >5.0</span>
        <span className="gray">(6) • USA</span>
      </div>
      <p id="tagline">Life Lessons with Katie Zaferes</p>
      <p id="price">
        <span >From $136</span> / person
      </p>
    </div>
  );
}
