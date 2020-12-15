const { request, response } = require("express");
const express = require("express");
const { Pool } = require("pg");

const secrets = require("./secrets.json");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: secrets.password,
  port: 5432,
});
const app = express();
//Get message
app.get("/message", (request, response) => {
  response.send("hola");
});
// const zaquiel = (request, response) => {
//   response.send("hola");
// };

const GetFromDataBase = (request, response) => {
  pool.query("select * from hotels", (error, result) => {
    response.send(result.rows);
  });
};
app.get("/getFromDB", GetFromDataBase);

app.listen(4001, () => {
  console.log("welcomed");
});
