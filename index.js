// server/index.js
const bodyParser = require("body-parser");
const express = require("express");
const bodyParser = require('body-parser');

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
app.use(bodyParser.json());

app.get("/api/users", (req, res) => {
  var query="SELECT * FROM USERS JOIN ADDRESS ON USERS.ADDRESS_ID = ADDRESS.ADDRESS_ID JOIN IDENTIFICATIONS ON USERS.ID = IDENTIFICATIONS.USER_ID";
  connection.query(query, function (err, result) {
    if (err) throw err;
    res.send(result)
  }
  );
});

app.get("/api/users/:sort", (req, res) => {
  var query="SELECT * FROM USERS JOIN ADDRESS ON USERS.ADDRESS_ID = ADDRESS.ADDRESS_ID JOIN IDENTIFICATIONS ON USERS.ID = IDENTIFICATIONS.USER_ID ORDER BY "+req.params.sort;
  connection.query(query, function (err, result, fields) {
    if (err) throw err;
    res.send(result)
  }
  );
});

app.get("/api/users/:id", (req, res) => {
  var query="SELECT * FROM USERS JOIN ADDRESS ON USERS.ADDRESS_ID = ADDRESS.ADDRESS_ID JOIN IDENTIFICATIONS ON USERS.ID = IDENTIFICATIONS.USER_ID WHERE USERS.ID="+req.params.id;
  connection.query(query, function (err, result, fields) {
    if (err){
      res.send("No existe el usuario")
      throw err;
    }
    res.send(result)
  }
  );
});

app.put('/users/:id', async (req, res) => {
  const userId = req.params.id;
  const { address_id, f_name, lname1, lname2, birth_date, nationality, state_born_in, occupation, curp, gender, phone_number, email, rfc, is_client, id_type, id_number } = req.body;

  // Update user in the database
  const userQuery = 'UPDATE USERS SET ADDRESS_ID = ?, F_NAME = ?, LNAME1 = ?, LNAME2 = ?, BIRTH_DATE = ?, NATIONALITY = ?, STATE_BORN_IN = ?, OCCUPATION = ?, CURP = ?, GENDER = ?, PHONE_NUMBER = ?, EMAIL = ?, RFC = ?, IS_CLIENT = ? WHERE ID = ?';
  const userValues = [address_id, f_name, lname1, lname2, birth_date, nationality, state_born_in, occupation, curp, gender, phone_number, email, rfc, is_client, userId];
  const userResult = await pool.query(userQuery, userValues);

  // Update address in the database
  const addressQuery = 'UPDATE ADDRESS SET COUNTRY = ?, STATE = ?, CITY = ?, NEIGHBORHOOD = ?, ZIP_CODE = ?, STREET = ?, EXT_NUMBER = ?, INT_NUMBER = ? WHERE ADDRESS_ID = ?';
  const addressValues = [req.body.country, req.body.state, req.body.city, req.body.neighborhood, req.body.zip_code, req.body.street, req.body.ext_number, req.body.int_number, address_id];
  const addressResult = await pool.query(addressQuery, addressValues);

  // Update identification in the database
  const idQuery = 'UPDATE IDENTIFICATIONS SET ID_TYPE = ?, ID_NUMBER = ? WHERE USER_ID = ?';
  const idValues = [id_type, id_number, userId];
  const idResult = await pool.query(idQuery, idValues);

  res.status(200).send('User updated successfully');
});
  

//arco
app.get("/api/arco", (req, res) => {
  var query="SELECT * FROM SOLICITUD_ARCO";
  connection.query(query, function (err, result, fields) {
    if (err) throw err;
    res.send(result)
  });
});

app.get("/api/arco/:id", (req, res) => {
  var query="SELECT * FROM SOLICITUD_ARCO WHERE ID="+req.params.id;
  connection.query(query, function (err, result, fields) {
    if (err) throw err;
    res.send(result)
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app;