// server/index.js
const express = require("express");

require('dotenv').config()
const mysql = require('mysql2')

const DB=process.env.DATABASE_URL
const connection= mysql.createConnection(DB)

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

const PORT = process.env.PORT || 4000;

const app = express();

app.get("/api/users", (req, res) => {
    var query="SELECT * FROM USERS";
    connection.query(query, function (err, result, fields) {
      if (err) throw err;
      res.send(result)
    }
    );
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app;