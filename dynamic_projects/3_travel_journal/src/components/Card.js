import React from "react";

export default function Card(props) {
  return (
    <div className="row">
      <div id="column1">
        <img src={props.imageUrl} alt="" className="location-pic" />
      </div>
      <div id="column2">
      <div className="location">   <img src="images/location_pin.png" alt="" />
        <div>
          <span id="location-country">&nbsp;{props.location}</span>&nbsp;&nbsp;
          <a
            href={props.googleMapsUrl}
            id="location-link"
            target="_blank"
            rel="noreferrer"
          >
            View on Google Maps
          </a>
        </div>
        </div>

        <p className="location-name">{props.title}</p>
        <p className="date">{props.startDate} - {props.endDate}</p>
        <p className="description">{props.description}</p>
     
      </div>
    </div>
  );
}
