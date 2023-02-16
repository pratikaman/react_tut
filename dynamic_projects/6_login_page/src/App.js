import React , { useState } from 'react';



export default function App() {

  const [loginData, setLoginData] = useState({
    userEmail: "",
    password: "",
    confirmPassword: "",
    subscribeNewsletter: false,
  });



  // console.log(loginData)

  function handleChange(event) {
    const { name, value, checked, type } = event.target;
    setLoginData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }


  function handleSubmit(event) {
    event.preventDefault();
    if (loginData.password === loginData.confirmPassword) {
      alert(
        `Successfully signed up. `
      );
    } else {
      alert("passwords to not match");
    }
  }

  return (
    <div className="form-container">
    <form className="form" 
      onSubmit={handleSubmit} 
      >
        <input
          type="email"
          name="userEmail"
          placeholder="Email address"
          className="form--input"
          onChange={handleChange}
          value={loginData.userEmail}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form--input"
          onChange={handleChange}
          value={loginData.password}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          className="form--input"
          onChange={handleChange}
          value={loginData.confirmPassword}
        />

        <div className="form--marketing">
          <input
            type="checkbox"
            name="subscribeNewsletter"
            onChange={handleChange}
            checked={loginData.subscribeNewsletter}
          />
          <label htmlFor="okayToEmail">I want to join the newsletter</label>
        </div>
        <button className="form--submit">
          Sign up
        </button>
      </form>
    </div>
  );
}





