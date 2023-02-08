import React from 'react'

export default function ProfilePic() {
  return (
    <div>
      <img src="profile_pic.jpeg" alt="pic" className="profile-pic" />
      <div className="brief">
        <p className="user-name">Minako Sabella</p>
        <p className="job">Frontend Developer</p>
        <p className="site-link">rosalia.website</p>
      </div>
    </div>
  );
}
