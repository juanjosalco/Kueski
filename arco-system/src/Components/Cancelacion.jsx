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


function Cancelacion({ isOpen, handleClose, id, user }) {
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

      useEffect(() => {
        fetch(`api/users/${id}`)
          .then((res) => res.json())
          .then((data) => loadUser(data))
          .catch((err) => {
            console.log(err);
          });
      }, [id, isOpen]);
    
    function handleClick() {
      console.log("Cancelacion");
      setf_name(".");
      const date = new Date();
      const value = ".";
      const body = JSON.stringify({
        // address_id: null,
        // f_name: null,
        // lname1: null,
        // lname2: null,
        // birth_date: null,
        // nationality: null,
        // state_born_in: null,
        // occupation: null,
        // curp: null,
        // gender: null,
        // phone_number: null,
        // email: null,
        // rfc: null,
        // is_client: null,
        // id_type: null,
        // id_number: null,
        // country: null,
        // state: null,
        // city: null,
        // neighborhood: null,
        // zip_code: null,
        // street: null,
        // ext_number: null,
        // int_number: null,
        // deleted_at: '0001-01-01'
        address_id: address_id,
        f_name: f_name,
        lname1: lname1, 
        // ' '
        lname2: lname2,
        birth_date: birth_date.slice(0, 10),
        nationality: null,
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
        deleted_at: '0001-01-01'
      });
      
      fetch(`https://kueski.vercel.app/users/${id}`, {
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
            user_id: id,
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
        // función asíncrona para llamar a Cancelacion
  function handleCancelacion() {
    console.log("Cancelacion");
    setf_name(".");
  };

      
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
                    {/* <textarea value={cancelText} onChange={(e) => setCancelText(e.target.value)} className={classes.textAreas}/> */}
                    <Button variant="contained"onClick={handleClick}>Confirmar cancelacion</Button>
                    {console.log(user.NATIONALITY)}
                    <Button variant="contained"    
                        // onClick={handleCancelacion}     
                        onClick={handleClick}     

                    // value={"."}
                    > 
                      Cambiar Null </Button>                    
                    
                </section>
            </section>
        </div>
    </Modal>
  )
}

export default Cancelacion