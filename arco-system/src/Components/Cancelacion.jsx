import React, { useEffect, useState } from "react";
import { Box, Modal, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

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

function Cancelacion({isOpen, handleClose, user}) {
    const classes = useStyles();
    const [cancelText, setCancelText] = useState('');

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
                    <button style={{display: "flex", maxWidth: "300px", backgroundColor: "#48cd00", fontWeight: "700", color: "#ffffff", fontSize: "18px", padding: "8px", justifySelf: "end", border: "0"}}>Registrar Cancelación</button>
                </section>
            </section>
        </div>
    </Modal>
  )
}

export default Cancelacion