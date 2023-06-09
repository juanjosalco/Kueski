import React from 'react'
import { Box, Button, Modal, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState, useEffect } from 'react';
import AccesoPDF from "./AccesoPDF";
import { PDFDownloadLink} from '@react-pdf/renderer'
import ConfirmationModal from './ConfirmationModal';

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
    dataSection:{
        display: "grid",
        gap: "16px",
        width: "100%",
        heigth:  "100%"
    },
    dataTitle:{
        fontSize: "24px",
    },
    data:{
        fontSize: "18px"
    },
    newSectionTitle:{
        fontSize: "30px",
    },
    divisor:{
        marginTop: "16px",
        marginBottom: "16px",
        height: "4px",
        borderTopWidth: "0",
        backgroundColor: "#000000"
    },
    side:{
        display: "grid",
        width: "33%",
        height: "50%",
        gap: "32px",
    },
    side2:{
        display: "grid",
        width: "50%",
        height: "100%",
        gap: "32px",
        paddingBottom: "16px"
    },
    columns: {
        display: "flex",
    }
}));

function Acceso({isOpen, handleClose, user}) {
    const classes = useStyles();
    const date = new Date();
    const ids = user.row.IDENTIFICATION_DATA;
    const dataPairs = ids.split(", ");
    const identifications = [];

    dataPairs.forEach(pair => {
        const [identificationType, identificationId] = pair.split(": ");
        
        // Store the extracted data as an object in the identifications array
        identifications.push({ type: identificationType, id: identificationId });
    });
    
    const handlePostRequest = () => {
        fetch("/api/arco", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({
                user_id: user.row.ID,
                derecho: "A",
                fecha_resuelta: date.toISOString().substring(0,10)+" "+date.toTimeString().substring(0,8),
            })
        })
        .then(response => response.json())
        .catch(error => console.error(error));
    }

    const [showModal, setShowModal] = useState(false);

    function handleClick() {
        setShowModal(true);
    }

    function handleConfirm() {
        // perform some action
        console.log("User confirmed the operation");
        // call callback function passed as prop
        setShowModal(false);
        handlePostRequest()
        /* return (
            <PDFDownloadLink document={<AccesoPDF user={user.row} />} fileName= {'ReporteUser'+user.row.ID+".pdf"}></PDFDownloadLink> 
            ) */
      }
    
    function handleCancel() {
        setShowModal(false);
    }

    return (
        <Modal open={isOpen} onClose={handleClose} style={{overflow: "scroll"}}>
        <div className={classes.blackBack}>
            <section style={{display: "flex", flexDirection: "column", width:"80%", padding: "64px", backgroundColor: "#ffffff", gap: "48px"}}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <h1 style={{fontSize: "36px"}}>Acceso</h1>
                    <button style={{height: "50px", backgroundColor: "#ffffff", border: "0"}} onClick={handleClose}>
                            <img src="https://firebasestorage.googleapis.com/v0/b/nolbertocastroweb.appspot.com/o/button.png?alt=media&token=470e1b7a-7a01-454b-9cce-0bfdeaf12681" alt="close"  style={{height: "100%"}}></img>
                    </button>
                </div>
                <section style={{display: "flex", width: "100%", justifyContent: "space-between", gap: "32px"}}>
                   <section className={classes.dataSection}>
                        <h1 className={classes.newSectionTitle}>Información del usuario</h1>
                        <hr className={classes.divisor}/>
                        <section className={classes.columns}>
                            <section className={classes.side}>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Nombre</h1>
                                    <p className={classes.data}>{user.row.F_NAME}</p>
                                </section>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Fecha de Nacimiento</h1>
                                    <p className={classes.data}>{user.row.BIRTH_DATE.substring(0,10) }</p>
                                </section>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Estado de Nacimiento</h1>
                                    <p className={classes.data}>{user.row.STATE_BORN_IN}</p>
                                </section>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>RFC</h1>
                                    <p className={classes.data}>{user.row.RFC}</p>
                                </section>
                            </section>
                            <section className={classes.side}>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Primer Apellido</h1>
                                    <p className={classes.data}>{user.row.LNAME1}</p>
                                </section>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Nacionalidad</h1>
                                    <p className={classes.data}>{user.row.NATIONALITY}</p>
                                </section>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Actividad Económica</h1>
                                    <p className={classes.data}>{user.row.OCCUPATION}</p>
                                </section>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Número de Telefono</h1>
                                    <p className={classes.data}>{user.row.PHONE_NUMBER}</p>
                                </section>
                            </section>
                            <section className={classes.side}>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Segundo Apellido</h1>
                                    <p className={classes.data}>{user.row.LNAME2}</p>
                                </section>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Género</h1>
                                    <p className={classes.data}>{user.row.GENDER}</p>
                                </section>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>CURP</h1>
                                    <p className={classes.data}>{user.row.CURP}</p>
                                </section>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Email</h1>
                                    <p className={classes.data}>{user.row.EMAIL}</p>
                                </section>
                            </section>
                        </section>
                        <h1 className={classes.newSectionTitle}>Direccción del usuario</h1>
                        <hr className={classes.divisor}/>
                        <section className={classes.columns}>
                            <section className={classes.side}>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>País</h1>
                                    <p className={classes.data}>{user.row.COUNTRY}</p>
                                </section>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Colonia</h1>
                                    <p className={classes.data}>{user.row.NEIGHBORHOOD}</p>
                                </section>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Número Exterior</h1>
                                    <p className={classes.data}>{user.row.EXT_NUMBER}</p>
                                </section>
                            </section>
                            <section className={classes.side}>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Estado</h1>
                                    <p className={classes.data}>{user.row.STATE}</p>
                                </section>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Código Postal</h1>
                                    <p className={classes.data}>{user.row.ZIP_CODE}</p>
                                </section>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Número Interior</h1>
                                    <p className={classes.data}>{user.row.INT_NUMBER}</p>
                                </section>
                            </section>
                            <section className={classes.side}>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Ciudad</h1>
                                    <p className={classes.data}>{user.row.CITY}</p>
                                </section>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Calle</h1>
                                    <p className={classes.data}>{user.row.STREET}</p>
                                </section>
                            </section>
                        </section>
                        <h1 className={classes.newSectionTitle}>Identificaciones del usuario</h1>
                        <hr className={classes.divisor}/>
                        <section>
                            {  identifications.map((identification, index) => {
                                 return (
                                        <section className={classes.columns} key={index}>
                                            <section className={classes.side2}>
                                                <section className={classes.dataSection}>
                                                    <h1 className={classes.dataTitle}>Tipo de Identificación</h1>
                                                    <p className={classes.data}>{identification.type.split(":")[1]}</p>
                                                </section>
                                            </section>
                                            <section className={classes.side2}>
                                                <section className={classes.dataSection}>
                                                    <h1 className={classes.dataTitle}>Número de Identificación</h1>
                                                    <p className={classes.data}>{identification.type.split(":")[2]}</p>
                                                </section>
                                            </section>
                                        </section>
                                  );
                            })
                            }
                        </section>
                    </section>
                </section>
                    <PDFDownloadLink document={<AccesoPDF user={user.row} />} fileName= {'ReporteUser'+user.row.ID+".pdf"}>
                        <Button variant="contained" onClick={()=>handlePostRequest()}>Generar Reporte</Button>
                    </PDFDownloadLink> 
                <section>
                </section>
            </section> 
        </div>
    </Modal>
  )
}

export default Acceso;