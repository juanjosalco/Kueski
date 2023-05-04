// server/index.js
const bodyParser = require("body-parser");
const express = require("express");

require("dotenv").config();
const mysql = require("mysql2");

const DB = process.env.DATABASE_URL;
const connection = mysql.createConnection(DB);

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

const PORT = process.env.PORT || 3001;
const app = express();
const path = require("path");
const cors = require('cors');


app.use(bodyParser.json());
app.get("/api/users", (req, res) => {
  connection.connect(function (err) {
    if (err) throw err;
    const query =
      "SELECT * FROM USERS JOIN ADDRESS ON USERS.ADDRESS_ID = ADDRESS.ADDRESS_ID JOIN IDENTIFICATIONS ON USERS.ID = IDENTIFICATIONS.USER_ID";
    connection.query(query, function (err, result) {
      if (err) throw err;
       console.log(result);
      res.send(result);
    });
  });
});

app.get("/api/users/:id", (req, res) => {
  var query =
    "SELECT * FROM USERS JOIN ADDRESS ON USERS.ADDRESS_ID = ADDRESS.ADDRESS_ID JOIN IDENTIFICATIONS ON USERS.ID = IDENTIFICATIONS.USER_ID WHERE USERS.ID=" +
    req.params.id;
  connection.query(query, function (err, result, fields) {
    if (err) {
      res.send("No existe el usuario");
      throw err;
    }
    res.send(result);
  });
});

app.patch("/users/:id", async (req, res) => {
  const userId = req.params.id;
  const {
    address_id, f_name,
    lname1, lname2,
    birth_date, nationality,
    state_born_in, occupation,
    curp, gender,
    phone_number, email,
    rfc, is_client,
    id_type, id_number,
    country, state,
    city, neighborhood,
    zip_code, street,
    ext_number, int_number,
  } = req.body;
  const updated_at = new Date();
  // Update user in the database
  const userQuery =
    "UPDATE USERS SET ADDRESS_ID = ?, F_NAME = ?, LNAME1 = ?, LNAME2 = ?, BIRTH_DATE = ?, NATIONALITY = ?, STATE_BORN_IN = ?, OCCUPATION = ?, CURP = ?, GENDER = ?, PHONE_NUMBER = ?, EMAIL = ?, RFC = ?, IS_CLIENT = ?, UPDATED_AT = ? WHERE ID = ?";
  const userValues = [
    address_id, f_name,
    lname1, lname2,
    birth_date, nationality,
    state_born_in, occupation,
    curp, gender,
    phone_number, email,
    rfc, is_client,
    updated_at,
    userId,
  ];
  connection.query(userQuery, userValues, function (err, result, fields) {
    if (err) throw err;
  });
  // Update address in the database
  const addressQuery =
    "UPDATE ADDRESS SET COUNTRY = ?, STATE = ?, CITY = ?, NEIGHBORHOOD = ?, ZIP_CODE = ?, STREET = ?, EXT_NUMBER = ?, INT_NUMBER = ? WHERE ADDRESS_ID = ?";
    const addressValues = [
      country, state,
      city, neighborhood,
      zip_code, street,
      ext_number, int_number,
      address_id,
    ];
  connection.query(addressQuery, addressValues, function (err, result, fields) {
    if (err) throw err;
  });
  // Update identification in the database
  const idQuery =
    "UPDATE IDENTIFICATIONS SET ID_TYPE = ?, ID_NUMBER = ? WHERE USER_ID = ?";
  const idValues = [id_type, id_number, userId];
  
  connection.query(idQuery, idValues, function (err, result, fields) {
    if (err) throw err;
  });
  
  res.send({
    message: "User updated successfully",
  });
});


//arco
app.get("/api/arco", (req, res) => {
  var query = "SELECT * FROM SOLICITUD_ARCO JOIN USERS ON SOLICITUD_ARCO.USER_ID = USERS.ID";
  connection.query(query, function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
});

app.get("/api/arco/:id", (req, res) => {
  var query = "SELECT * FROM SOLICITUD_ARCO JOIN USERS ON SOLICITUD_ARCO.USER_ID = USERS.ID WHERE SOLICITUD_ARCO.ARCO_ID=" + req.params.id;
  connection.query(query, function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
});
app.post("/api/arco", (req, res) => {
  const { user_id, derecho, fecha_resuelta } = req.body;
  var query =
    "INSERT INTO SOLICITUD_ARCO (USER_ID, DERECHO, FECHA_RESUELTA) VALUES (" +
    user_id + ", '" + derecho + "', '" + fecha_resuelta + "')";
  connection.query(query, function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
});

app.get("/api/comentarios/:id", (req, res) => {
  var query = "SELECT * FROM COMENTARIOS WHERE ID_SOLICITUD=" + req.params.id;
  connection.query(query, function (err, result, fields) {
    if (err) throw err;  
    res.send(result);
  });
});

app.get("/api/oposicion/:id", (req, res) => {
  var query = "SELECT * FROM OPPOSITION WHERE USER_ID=" + req.params.id;
  connection.query(query, function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
});
app.post("/api/oposicion", (req, res) => {
  const { user_id, marketing,rewards, testimony, services } = req.body;
  var query =
    "INSERT INTO OPPOSITION (USER_ID, MARKETING, REWARDS, TESTIMONY, SERVICES) VALUES (" +  
    user_id + ", " + marketing+ ", " + rewards+ ", " + testimony+ ", " + services+ ")";
  connection.query(query, function (err, result, fields) {
    if (err) throw err;
    res.send(result);
  });
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.use(cors());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
  });
app.use(express.static(path.resolve("arco-system/build")));
app.get("*", (req, res) => {
    res.sendFile(path.resolve("arco-system/build", "index.html"));
});
