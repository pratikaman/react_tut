import React from 'react';

export default function Form() {
  const [formData, setNameData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",
    isSocial: false,
    favColor: "",
  });
 

  function handleChange(event) {
    const { name, value, checked, type } = event.target;
    setNameData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitForm(event){
    event.preventDefault()
  }


  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="First Name"
          /// this name should match the state object property defined above.
          name="firstName"
          onChange={handleChange}
          /// this doesnt anything visually but it makes the state object single source of truth.
          value={formData.firstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          /// this name should match the state object property defined above.
          name="lastName"
          onChange={handleChange}
          /// this doesnt anything visually but it makes the state object single source of truth.
          value={formData.lastName}
        />
        <input
          type="email"
          placeholder="Email"
          /// this name should match the state object property defined above.
          name="email"
          onChange={handleChange}
          /// this doesnt anything visually but it makes the state object single source of truth.
          value={formData.email}
        />
        <textarea
          /// this name should match the state object property defined above.
          name="comment"
          placeholder="Write comments"
          onChange={handleChange}
          // /// this doesnt anything visually but it makes the state object single source of truth.
          value={formData.comment}
        />
        <label htmlFor="isSocial">Are you social ?</label>
        <input
          type="checkbox"
          id="isSocial"
          /// this name should match the state object property defined above.
          name="isSocial"
          onChange={handleChange}
          /// using checked property instead of value
          /// this doesnt anything visually but it makes the state object single source of truth.
          checked={formData.isSocial}
        />
      </form>

      <fieldset>
        <legend>Current employment status</legend>

        <input
          type="radio"
          id="unemployed"
          name="employment"
          value="unemployed"
          /// this doesnt anything visually but it makes the state object single source of truth.
          checked={formData.employment === "unemployed"}
          onChange={handleChange}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />

        <input
          type="radio"
          id="part-time"
          name="employment"
          value="part-time"
          /// this doesnt anything visually but it makes the state object single source of truth.
          checked={formData.employment === "part-time"}
          onChange={handleChange}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />

        <input
          type="radio"
          id="full-time"
          name="employment"
          value="full-time"
          /// this doesnt anything visually but it makes the state object single source of truth.
          checked={formData.employment === "full-time"}
          onChange={handleChange}
        />
        <label htmlFor="full-time">Full-time</label>
        <br />
      </fieldset>

      <label htmlFor="favColor">What is your favorite color?</label><br />
      <select
        id="favColor"
        /// added by react
        value={formData.favColor}
        onChange={handleChange}
        name="favColor"
      >
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="indigo">Indigo</option>
        <option value="violet">Violet</option>
      </select><br /><br />

      <button onClick={submitForm}>Submit</button>
      <p>{`${formData.firstName} ${formData.lastName}`}</p>
    </div>
  );
}
