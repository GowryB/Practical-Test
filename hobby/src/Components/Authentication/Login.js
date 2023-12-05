import React from "react";

function Login() {
  return (
    <div className="dflex">
      <div className="container">
        <form>
          <label>
            UserName:
            <input type="text" />
          </label>

          <label>
            Password:
            <input type="text" />
          </label>
        </form>
      </div>
    </div>
  );
}

export default Login;
