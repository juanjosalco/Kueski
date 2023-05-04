import { React, useEffect } from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  blackBack: {
    display: "flex",
    width: "100vw",
    minHeight: "100vh",
    background: "rgba(0, 0, 0, .5)",
    position: "absolute",
    justifyContent: "center",
    zIndex: "20",
    padding: "64px",
  },
  dataSection: {
    display: "grid",
    gap: "16px",
    width: "100%",
    heigth:  "100%"
  },
  dataTitle: {
    fontSize: "24px",
  },
  data: {
    fontSize: "18px",
  },
  newSectionTitle: {
    fontSize: "30px",
  },
  divisor: {
    marginTop: "16px",
    marginBottom: "16px",
    height: "4px",
    borderTopWidth: "0",
    backgroundColor: "#000000",
  },
  side:{
    display: "grid",
    width: "33%",
    height: "50%",
    gap: "32px"
  },
  side2:{
      display: "grid",
      width: "50%",
      height: "100%",
      gap: "32px"
  },
  columns: {
      display: "flex",
      justifyContent: "space-between",
  },
  inputAction: {
    width: "90%",
    fontSize: "18px",
    padding: "16px",
  },
  textInputArea: {
    width: "100%",
    height: "200px",
    fontSize: "18px",
    padding: "32px",
    outlineWidth: "0",
    overflowWrap: "break-words",
    appearance: "nonce",
  },
}));

function Rectificacion({ isOpen, handleClose, user }) {
  const classes = useStyles();
  const [address_id, setaddress_id] = useState(user.row.ADDRESS_ID);
  const [f_name, setf_name] = useState(user.row.F_NAME);
  const [lname1, setlname1] = useState(user.row.LNAME1);
  const [lname2, setlname2] = useState(user.row.LNAME2);
  const [birth_date, setbirth_date] = useState(user.row.BIRTH_DATE.slice(0, 10));
  const [nationality, setnationality] = useState(user.row.NATIONALITY);
  const [state_born_in, setstate_born_in] = useState(user.row.STATE_BORN_IN);
  const [occupation, setoccupation] = useState(user.row.OCCUPATION);
  const [curp, setcurp] = useState(user.row.CURP);
  const [gender, setgender] = useState(user.row.GENDER);
  const [phone_number, setphone_number] = useState(user.row.PHONE_NUMBER);
  const [email, setemail] = useState(user.row.EMAIL);
  const [rfc, setrfc] = useState(user.row.RFC);
  const [is_client, setis_client] = useState(user.row.IS_CLIENT);
  const [country, setcountry] = useState(user.row.COUNTRY);
  const [state, setstate] = useState(user.row.STATE);
  const [city, setcity] = useState(user.row.CITY);
  const [neighborhood, setneighborhood] = useState(user.row.NEIGHBORHOOD);
  const [zip_code, setzip_code] = useState(user.row.ZIP_CODE);
  const [street, setstreet] = useState(user.row.STREET);
  const [ext_number, setext_number] = useState(user.row.EXT_NUMBER);
  const [int_number, setint_number] = useState(user.row.INT_NUMBER);  
  const[identification_data, setidentification_data] = useState(user.row.IDENTIFICATION_DATA);
  console.log(user.row.IDENTIFICATION_DATA)
  function handleClick() {
    const date = new Date();
    const body = JSON.stringify({
      address_id: address_id,
      f_name: f_name,
      lname1: lname1,
      lname2: lname2,
      birth_date: birth_date.slice(0, 10),
      nationality: nationality,
      state_born_in: state_born_in,
      occupation: occupation,
      curp: curp,
      gender: gender,
      phone_number: phone_number,
      email: email,
      rfc: rfc,
      is_client: is_client,
      country: country,
      state: state,
      city: city,
      neighborhood: neighborhood,
      zip_code: zip_code,
      street: street,
      ext_number: ext_number,
      int_number: int_number,
      deleted_at: '0001-01-01'
    });
    
    fetch(`https://kueski.vercel.app/users/${user.row.ID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
    },
    body: body,
  });
  //Log Request
  fetch("/api/arco", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: user.row.ID,
      derecho: "R",
      fecha_resuelta:
      date.toISOString().substring(0, 10) +
        " " +
        date.toTimeString().substring(0, 8),
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
    handleClose();
  }
    return (
      <Modal open={isOpen} onClose={handleClose} style={{ overflow: "scroll" }}>
      <div className={classes.blackBack}>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
            padding: "64px",
            backgroundColor: "#ffffff",
            gap: "48px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h1 style={{ fontSize: "36px" }}>Rectificación</h1>
            <button
              style={{
                height: "50px",
                backgroundColor: "#ffffff",
                border: "0",
              }}
              onClick={handleClose}
            >       
              <img
                src="https://firebasestorage.googleapis.com/v0/b/nolbertocastroweb.appspot.com/o/button.png?alt=media&token=470e1b7a-7a01-454b-9cce-0bfdeaf12681"
                alt="close"
                style={{ height: "100%" }}
              ></img>
            </button>
          </div>
          <section
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              gap: "32px",
            }}
          >
              <section className={classes.dataSection}>
                <h1 className={classes.newSectionTitle}>Información del usuario</h1>
                <hr className={classes.divisor}/>
                <section className={classes.columns}> 
                  <section className={classes.side}>
                    <section className={classes.dataSection}>
                      <h1 className={classes.dataTitle}>Nombre</h1>
                      <input
                        value={f_name}
                        onChange={(e) => setf_name(e.target.value)}
                        className={classes.inputAction}
                      ></input>
                    </section>
                    <section className={classes.dataSection}>
                    <h1 className={classes.dataTitle}>Fecha de Nacimiento</h1>
                    <input
                      value={birth_date}
                      onChange={(e) => setbirth_date(e.target.value)}
                      className={classes.inputAction}
                    ></input>
                    </section>
                    <section className={classes.dataSection}>
                      <h1 className={classes.dataTitle}>Estado de Nacimiento</h1>
                      <input
                        value={state_born_in}
                        onChange={(e) => setstate_born_in(e.target.value)}
                        className={classes.inputAction}
                      ></input>
                    </section>
                    <section className={classes.dataSection}>
                      <h1 className={classes.dataTitle}>RFC</h1>
                      <input
                        value={rfc}
                        onChange={(e) => setrfc(e.target.value)}
                        className={classes.inputAction}
                      ></input>
                    </section>
                  </section>
                  <section className={classes.side}>
                      <section className={classes.dataSection}>
                      <h1 className={classes.dataTitle}>Primer Apellido</h1>
                      <input
                        value={lname1}
                        onChange={(e) => setlname1(e.target.value)}
                        className={classes.inputAction}
                      ></input>
                      </section>
                      <section className={classes.dataSection}>
                        <h1 className={classes.dataTitle}>Nacionalidad</h1>
                        <input
                          value={nationality}
                          onChange={(e) => setnationality(e.target.value)}
                          className={classes.inputAction}
                        ></input>
                      </section>
                      <section className={classes.dataSection}>
                        <h1 className={classes.dataTitle}>Actividad Económica</h1>
                        <input
                          value={occupation}
                          onChange={(e) => setoccupation(e.target.value)}
                          className={classes.inputAction}
                        ></input>
                      </section>
                      <section className={classes.dataSection}>
                        <h1 className={classes.dataTitle}>Número de Telefono</h1>
                        <input
                          value={phone_number}
                          onChange={(e) => setphone_number(e.target.value)}
                          className={classes.inputAction}
                        ></input>
                      </section>
                  </section>
                  <section className={classes.side}>
                      <section className={classes.dataSection}>
                      <h1 className={classes.dataTitle}>Segundo Apellido</h1>
                      <input
                        value={lname2}
                        onChange={(e) => setlname2(e.target.value)}
                        className={classes.inputAction}
                      ></input>
                      </section>
                      <section className={classes.dataSection}>
                        <h1 className={classes.dataTitle}>Género</h1>
                        <input
                          value={gender}
                          onChange={(e) => setgender(e.target.value)}
                          className={classes.inputAction}
                        ></input>
                      </section>
                      <section className={classes.dataSection}>
                        <h1 className={classes.dataTitle}>CURP</h1>
                        <input
                          value={curp}
                          onChange={(e) => setcurp(e.target.value)}
                          className={classes.inputAction}
                        ></input>
                      </section>
                      <section className={classes.dataSection}>
                        <h1 className={classes.dataTitle}>Email</h1>
                        <input
                          value={email}
                          onChange={(e) => setemail(e.target.value)}
                          className={classes.inputAction}
                        ></input>
                      </section>
                  </section>
                </section>
                <h1 className={classes.newSectionTitle}>Dirección del usuario</h1>
                <hr className={classes.divisor}/>
                <section className={classes.columns}>
                  <section className={classes.side}>
                    <section className={classes.dataSection}>
                      <h1 className={classes.dataTitle}>País</h1>
                      <input
                        value={country}
                        onChange={(e) => setcountry(e.target.value)}
                        className={classes.inputAction}
                      ></input>
                    </section>
                    <section className={classes.dataSection}>
                      <h1 className={classes.dataTitle}>Colonia</h1>
                      <input
                        value={neighborhood}
                        onChange={(e) => setneighborhood(e.target.value)}
                        className={classes.inputAction}
                      ></input>
                    </section>
                    <section className={classes.dataSection}>
                      <h1 className={classes.dataTitle}>Número Exterior</h1>
                      <input
                        value={ext_number}
                        onChange={(e) => setext_number(e.target.value)}
                        className={classes.inputAction}
                      ></input>
                    </section>
                  </section>
                  <section className={classes.side}>
                      <section className={classes.dataSection}>
                      <h1 className={classes.dataTitle}>Estado</h1>
                      <input
                        value={state}
                        onChange={(e) => setstate(e.target.value)}
                        className={classes.inputAction}
                      ></input>
                      </section>
                      <section className={classes.dataSection}>
                        <h1 className={classes.dataTitle}>Código Postal</h1>
                        <input
                          value={zip_code}
                          onChange={(e) => setzip_code(e.target.value)}
                          className={classes.inputAction}
                        ></input>
                      </section>
                      <section className={classes.dataSection}>
                        <h1 className={classes.dataTitle}>Número Interior</h1>
                        <input
                          value={int_number}
                          onChange={(e) => setint_number(e.target.value)}
                          className={classes.inputAction}
                        ></input>
                      </section>
                  </section>
                  <section className={classes.side}>
                  <section className={classes.dataSection}>
                      <h1 className={classes.dataTitle}>Ciudad</h1>
                      <input
                        value={city}
                        onChange={(e) => setcity(e.target.value)}
                        className={classes.inputAction}
                      ></input>
                  </section>
                  <section className={classes.dataSection}>
                      <h1 className={classes.dataTitle}>Calle</h1>
                      <input
                        value={street}
                        onChange={(e) => setstreet(e.target.value)}
                        className={classes.inputAction}
                      ></input>
                    </section>
                  </section>
                </section>
                  <h1 className={classes.newSectionTitle}>Identificaciones del usuario</h1>
                  {/* IDENTIFICATION_DATA: "INE: 264885096, Pasaporte: 264885096" */}
                  <hr className={classes.divisor}/>

                  <section>
                  <Button variant="contained" onClick={handleClick} >
                    Generar Reporte
                  </Button>
                </section>
            
              </section>
            </section>
          </section>
      </div>
    </Modal>
  );
}

export default Rectificacion;
