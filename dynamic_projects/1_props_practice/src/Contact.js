import React from "react"

export default function Contact({image, userName, phone, mail}) {
    return (
        <div className="contact-card">
            <img src={image}/>
            <h3>{userName}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>{ mail}</p>
            </div>
        </div>
    )
}