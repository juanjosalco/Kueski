import React from 'react'
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

function Cancelacion({isOpen, handleClose,user}){
    const [id_Solicitud, setid_Solicitud] = useState("");
    const classes = useStyles();
    const [cancelText, setCancelText] = useState('');
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
    const identification_data_array = identification_data.split(", ");//"100:INE: 264885096, 200:Pasaporte: 264885096"
    for(let i = 0; i < identification_data_array.length; i++){
        identification_data_array[i]=[identification_data_array[i].split(":")[0], identification_data_array[i].split(":")[1], identification_data_array[i].split(":")[2]];
    }  
    const [identificationDataArray, setIdentificationDataArray] = useState(identification_data_array);
    function changeIdentificationDataArray(index, value, index2){
      const newArray = [...identificationDataArray];
      newArray[index][index2] = value;
      
      setIdentificationDataArray(newArray);
    }
    function handleClick() {
      if(is_client === 1){
        console.log("ISCLIENT")
      }else{
      let date = new Date();
      
      date = date.toISOString().substring(0, 10);
      for(let i = 0; i < identificationDataArray.length; i++){
        changeIdentificationDataArray(i, identificationDataArray[i][0], 0);
        changeIdentificationDataArray(i,"", 1);
        changeIdentificationDataArray(i, "", 2);
      }
      const body = JSON.stringify({
        address_id: address_id,
        f_name: "",
        lname1: "",
        lname2: "",
        birth_date: "0001-01-01",
        nationality: "",
        state_born_in: "",
        occupation: "",
        curp: "",
        gender: "",
        phone_number: "",
        email: "",
        rfc: "",
        is_client: is_client,
        country: "",
        state: "",
        city: "",
        neighborhood: "",
        zip_code: "",
        street: "",
        ext_number: 0,
        int_number: 0,
        deleted_at: date,
        identification_data_array: identificationDataArray,
      });
      
      fetch(`https://kueski.vercel.app/users/${user.row.ID}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
      },
      body: body,
    });
    //Log Request
    fetch("https://kueski.vercel.app/api/arco", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.row.ID,
        derecho: "C",
        fecha_resuelta:date
      }),
    })
      .then((response) => console.log(response))
      .then((data) => {
        setid_Solicitud(data.id);
      })
      .catch((error) => console.error(error));
      //console.log(id_Solicitud)
      fetch("https://kueski.vercel.app/api/comentarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_solicitud : id_Solicitud, 
          comentario : cancelText,
        }),
      })
        .catch((error) => console.error(error));
      handleClose();
    }
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
                    <textarea value={cancelText} onChange={(e) => setCancelText(e.target.value)} className={classes.textAreas}/>
                    <Button variant="contained" onClick={handleClick}>Registrar Cancelación</Button>
                </section>
            </section>
        </div>
    </Modal>
  )
}

export default Cancelacion