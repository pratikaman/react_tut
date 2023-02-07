import React from "react";

export default function App() {
  return (
    <div className="card">
      <img src="profile_pic.jpeg" alt="pic" className="profile-pic" />
      <div className="brief">
        <p className="user-name">Minako Sabella</p>
        <p className="job">Data Scientist</p>
        <p className="site-link">rosalia.website</p>
      </div>
      <div className="social">
      <button className="social-buttons" id="email"> <img src="email.png" alt="" /> Email</button>
      <button className="social-buttons" id="linkedin"><img src="linkedin.png" alt="" /> LinkedIn</button>
      </div>
    </div>
  );
}
