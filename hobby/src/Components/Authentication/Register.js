import React from "react";
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  // States for registration
  const [UserName, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Home, setHome] = useState("");
  const navigate = useNavigate();

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handleMobile = (e) => {
    setMobile(e.target.value);
    setSubmitted(false);
  };
  // Handling the password change
  const handleHome = (e) => {
    setHome(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      UserName === "" ||
      Password === "" ||
      Email === "" ||
      Mobile === "" ||
      Home === ""
    ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {UserName} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  const register = () => {
    Axios.post("http://localhost:3000/register", {
      UserName: UserName,
      Password: Password,
    }).then((response) => {
      console.log(response);
      navigate("/");
    });
  };

  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>

      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <label className="label">UserName</label>
        <input
          onChange={handleName}
          className="input"
          value={UserName}
          type="text"
        />

        <label className="label">Password</label>
        <input
          onChange={handlePassword}
          className="input"
          value={Password}
          type="password"
        />

        <label className="label">Email</label>
        <input
          onChange={handleEmail}
          className="input"
          value={Email}
          type="email"
        />

        <label className="label">Mobile</label>
        <input
          onChange={handleMobile}
          className="input"
          value={Mobile}
          type="text"
        />
        <label className="label">Home</label>
        <input
          onChange={handleHome}
          className="input"
          value={Home}
          type="text"
        />

        <button onClick={register} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
