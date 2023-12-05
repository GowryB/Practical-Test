import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

import "./style.css";

export default function Login() {
  const [UserName, setUserName] = useState("");

  const [Password, setPassword] = useState("");

  function validateForm() {
    return UserName.length > 0 && Password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>UserName</Form.Label>

          <Form.Control
            autoFocus
            type="UserName"
            value={UserName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>

          <Form.Control
            type="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}
