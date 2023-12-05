const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hobby",
});

app.get("/", (req, res) => {
  return res.json("From Backend Side");
});

app.get("/users", (req, res) => {
  const sql = "SELECT * from users";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8081, () => {
  console.log("listening");
});

//For Registraion
app.post("/users", (req, res) => {
  const sql =
    "INSERT INTO users ('UserName', 'Password', 'Email', 'Mobile', 'Home') VALUES (?)";
  const values = [
    req.body.UserName,
    req.body.Password,
    req.body.Email,
    req.body.Mobile,
    req.body.Home,
  ];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});

//for add Hobbies
app.post("/records", (req, res) => {
  const sql = "INSERT INTO records ('HobbyName', 'Type') VALUES (?)";
  const values = [req.body.HobbyName, req.body.Type];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
});
