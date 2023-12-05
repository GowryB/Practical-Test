import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Hobbies from "./Components/Hobbies/Hobbies";

function Home() {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-sm bg-light navbar-light">
        <div class="container-fluid">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">
                Login
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/hobbies/:id">
                Hobbies
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Users
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <Hobbies />
    </div>
  );
}

export default Home;
