import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//For rounting
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Components/Authentication/Register";
import Login from "./Components/Authentication/Login";
import Home from "./Home";
import Hobbies from "./Components/Hobbies/Hobbies";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/hobbies" exact component={Hobbies} />
        </Routes>
      </BrowserRouter>
      <Home />
    </div>
  );
}

export default App;
