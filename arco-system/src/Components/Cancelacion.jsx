import {React, useEffect} from "react";
import { Box, Button, Modal, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    blackBack:{
        display: "flex",
        width: "100vw",
        minHeight: "100vh",
        background: "rgba(0, 0, 0, .5)",
        position: "absolute",
        justifyContent: "center",
        zIndex: "20",
        padding: "64px"
      },
      element:{
        display: "flex",
        minHeight: "100px",
        alignItems: "center",
        gap: "20px"
      },
      check:{
        width: "30px",
        height: "30px",
        outlineWidth: "4px",
        outlineColor: "#000000",
        border: "0",
      },
      optionText:{
        fontSize: "24px", 
        fontWeight: "500"
      },
      textAreas:{
        width: "100%",
        height: "250px",
        fontSize: "18px",
        padding: "32px",
        outlineWidth: "0",
        overflowWrap: "break-word",
        appearance: "none"
      }
}));


function Cancelacion({ isOpen, handleClose, user }) {
      const classes = useStyles();
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
          setbirth_date(user.BIRTH_DATE.slice(0, 10));
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

      console.log(user);

      useEffect(() => {
        fetch(`api/users/${user.row.ID}`)
          .then((res) => res.json())
          .then((data) => loadUser(data))
          .catch((err) => {
            console.log(err);
          });
      }, [isOpen]);
    
    function handleClick() {
      console.log("Cancelacion");
      setf_name(".");
      const date = new Date();
      const body = JSON.stringify({
        address_id: address_id,
        f_name: '',
        lname1: '',
        lname2: '',
        birth_date: '0001-01-01',
        nationality: '',
        state_born_in: '',
        occupation: '',
        curp: '',
        gender: '',
        phone_number: '',
        email: '',
        rfc: '',
        is_client: '',
        id_type: '',
        id_number: '',
        country: '',
        state: '',
        city: '',
        neighborhood: '',
        zip_code: '',
        street: '',
        ext_number: 0,
        int_number: 0,
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
          derecho: "C",
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
        <Modal open={isOpen} onClose={handleClose} style={{overflow: "scroll"}}>
        <div className={classes.blackBack}>

            <section style={{display: "flex", flexDirection: "column", width:"80%", padding: "64px", backgroundColor: "#ffffff", gap: "48px"}}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <h1 style={{fontSize: "36px"}}>Cancelación</h1>
                    <button style={{height: "50px", backgroundColor: "#ffffff", border: "0"}} onClick={handleClose}>
                            <img src="https://firebasestorage.googleapis.com/v0/b/nolbertocastroweb.appspot.com/o/button.png?alt=media&token=470e1b7a-7a01-454b-9cce-0bfdeaf12681" alt="close"  style={{height: "100%"}}></img>
                    </button>
                </div>
                <section style={{display: "grid", gap:"32px"}}>
                    <p style={{fontSize: "18px"}}>Por medio del presente y en atención a los derechos ARCO con los que cuenta el usuario<b> {user.row.F_NAME} {user.row.LNAME1} {user.row.LNAME2} </b>
                     solicita la cancelación en el tratamiento de sus datos personales.</p>
                    <p style={{fontSize: "18px"}}>Motivo por el que el usuario solicita la cancelación:</p>
                    <Button variant="contained"onClick={handleClick}>Confirmar cancelacion</Button>
                </section>
            </section>
        </div>
    </Modal>
  )
}

export default Cancelacion