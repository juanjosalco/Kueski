import {React, useEffect} from "react";
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
  side: {
    display: "grid",
    width: "50%",
    height: "100%",
    gap: "32px",
  },
  inputAction: {
    width: "100%",
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

function Rectificacion({ isOpen, handleClose , id}) {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [address_id, setaddress_id] = useState("");
  const [f_name, setf_name] = useState("");
  const [lname1, setlname1] = useState("");
  const [lname2, setlname2] = useState("");
  const [birth_date, setbirth_date] = useState("");
  const [nationality, setnationality] = useState("");
  const [state_born_in, setstate_born_in] = useState("");
  const [occupation, setoccupation] = useState("");
  const [curp, setcurp] = useState("");
  const [gender, setgender] = useState("");
  const [phone_number, setphone_number] = useState("");
  const [email, setemail] = useState("");
  const [rfc, setrfc] = useState("");
  const [is_client, setis_client] = useState("");
  const [id_type, setid_type] = useState("");
  const [id_number, setid_number] = useState("");
  const [country, setcountry] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const [neighborhood, setneighborhood] = useState("");
  const [zip_code, setzip_code] = useState("");
  const [street, setstreet] = useState("");
  const [ext_number, setext_number] = useState("");
  const [int_number, setint_number] = useState("");
  function loadUser(data) {
    data.map((user) => {
      //ID
      setaddress_id(user.ADDRESS_ID);
      //Usuario
      setf_name(user.F_NAME);
      setlname1(user.LNAME1);
      setlname2(user.LNAME2);
      setbirth_date(user.BIRTH_DATE);
      setnationality(user.NATIONALITY);
      setstate_born_in(user.STATE_BORN_IN);
      setoccupation(user.OCCUPATION);
      setcurp(user.CURP);
      setgender(user.GENDER);
      setphone_number(user.PHONE_NUMBER);
      setemail(user.EMAIL);
      setrfc(user.RFC);
      setis_client(user.IS_CLIENT);
      //Identificacion
      setid_type(user.ID_TYPE);
      setid_number(user.ID_NUMBER);
      //Address
      setcountry(user.COUNTRY);
      setstate(user.STATE);
      setcity(user.CITY);
      setneighborhood(user.NEIGHBORHOOD);
      setzip_code(user.ZIP_CODE);
      setstreet(user.STREET);
      setext_number(user.EXT_NUMBER);
      setint_number(user.INT_NUMBER);
    });
  }
  useEffect(() => {
    fetch(`api/users/${id}`)
    .then(res => res.json())
    .then(data =>  loadUser(data))
    .catch(err => {console.log(err)});
  }, [id]);

  function handleClick(){
  const date = new Date();
  const body =  JSON.stringify({
    address_id: address_id,
    f_name: f_name,
    lname1: lname1,
    lname2: lname2,
    //turn birth_date 03-04-08T00:00:00.000Z to 03-04-08
    birth_date: birth_date.slice(0,10), 
    nationality: nationality,
    state_born_in: state_born_in,
    occupation: occupation,
    curp: curp,
    gender: gender,
    phone_number: phone_number,
    email: email,
    rfc: rfc,
    is_client: is_client,
    id_type: id_type,
    id_number: id_number,
    country: country,
    state: state,
    city: city,
    neighborhood: neighborhood,
    zip_code: zip_code,
    street: street,
    ext_number: ext_number,
    int_number: int_number,
  });
  console.log(body);
   
  fetch(`https://kueski.vercel.app/users/${id}`,{
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
      },
    body:body,
    })
.then(res => res.json())
.catch(err => {console.log(err)})
//Log Request
  fetch("/api/arco", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    }, body: JSON.stringify({
        user_id: id,
        derecho: "R",
        fecha_resuelta: date.toISOString().substring(0,10)+" "+date.toTimeString().substring(0,8),
    })
  })
  .then(response => response.json())
  .catch(error => console.error(error));
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
                <h1 className={classes.dataTitle}>Primer Apellido</h1>
                <input
                  value={lname1}
                  onChange={(e) => setlname1(e.target.value)}
                  className={classes.inputAction}
                ></input>
              </section>
              <section className={classes.dataSection}>
                <h1 className={classes.dataTitle}>Segundo Apellido</h1>
                <input
                  value={lname2}
                  onChange={(e) => setlname2(e.target.value)}
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
                <h1 className={classes.dataTitle}>Nacionalidad</h1>
                <input
                  value={nationality}
                  onChange={(e) => setnationality(e.target.value)}
                  className={classes.inputAction}
                ></input>
              </section>
              <section className={classes.dataSection}>
                <h1 className={classes.dataTitle}>Estado</h1>
                <input
                  value={state_born_in}
                  onChange={(e) => setstate_born_in(e.target.value)}
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
                <h1 className={classes.dataTitle}>CURP</h1>
                <input
                  value={curp}
                  onChange={(e) => setcurp(e.target.value)}
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
              <section className={classes.dataSection}>
                <h1 className={classes.dataTitle}>Genero</h1>
                <input
                  value={gender}
                  onChange={(e) => setgender(e.target.value)}
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
              <section className={classes.dataSection}>
                <h1 className={classes.dataTitle}>Email</h1>
                <input
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  className={classes.inputAction}
                ></input>
              </section>
              <Button
                variant="contained"
              >
                Generar Reporte
              </Button>
            </section>
            <section className={classes.side}>
              <section className={classes.dataSection}>
                <h1 className={classes.newSectionTitle}>Dirección</h1>
                <hr className={classes.divisor} />
              </section>
              <section className={classes.dataSection}>
                <h1 className={classes.dataTitle}>País</h1>
                <input
                  value={country}
                  onChange={(e) => setcountry(e.target.value)}
                  className={classes.inputAction}
                ></input>
              </section>
              <section className={classes.dataSection}>
                <h1 className={classes.dataTitle}>Estado</h1>
                <input
                  value={state}
                  onChange={(e) => setstate(e.target.value)}
                  className={classes.inputAction}
                ></input>
              </section>
              <section className={classes.dataSection}>
                <h1 className={classes.dataTitle}>Ciudad</h1>
                <input
                  value={city}
                  onChange={(e) => setcity(e.target.value)}
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
                <h1 className={classes.dataTitle}>Código Postal</h1>
                <input
                  value={zip_code}
                  onChange={(e) => setzip_code(e.target.value)}
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
              <section className={classes.dataSection}>
                <h1 className={classes.dataTitle}>Número Exterior</h1>
                <input
                  value={ext_number}
                  onChange={(e) => setext_number(e.target.value)}
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
              <section className={classes.dataSection}>
                <h1 className={classes.newSectionTitle}>Identificación</h1>
                <hr className={classes.divisor} />
              </section>
              <section className={classes.dataSection}>
                <h1 className={classes.dataTitle}>Tipo de Identificación</h1>
                <input
                  value={id_type}
                  onChange={(e) => setid_type(e.target.value)}
                  className={classes.inputAction}
                ></input>
              </section>
              <section className={classes.dataSection}>
                <h1 className={classes.dataTitle}>Número de Identificación</h1>
                <input
                  value={id_number}
                  onChange={(e) => setid_number(e.target.value)}
                  className={classes.inputAction}
                ></input>
              </section>
            </section>
          </section>
        </section>
      </div>
    </Modal>
  );
}

export default Rectificacion;
