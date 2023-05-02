import React from 'react'
import { Box, Modal, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState, useEffect } from 'react';


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
        fontSize: "24px"
    },
    data:{
        fontSize: "18px"
    },
    newSectionTitle:{
        fontSize: "30px"
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
        height: "100%",
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
    }
}));

function Acceso({isOpen, handleClose, id}) {
    const classes = useStyles();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`/api/users/${id}`)
          .then((res) => res.json())
          .then((data) => setData(data))
          .catch((err) => console.log(err));
      }, [id]);
    console.log(data); console.log(id);
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
                  (data ?   <section className={classes.dataSection}>
                        <h1 className={classes.newSectionTitle}>Información del usuario</h1>
                        <hr className={classes.divisor}/>
                        <section className={classes.columns}>
                            <section className={classes.side}>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Nombre</h1>
                                    <p className={classes.data}>{data[0].F_NAME}</p>
                                </section>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Fecha de Nacimiento</h1>
                                    <p className={classes.data}>{data[0].BIRTH_DATE.substring(0,10) }</p>
                                </section>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Estado de Nacimiento</h1>
                                    <p className={classes.data}>{data[0].STATE_BORN_IN}</p>
                                </section>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>RFC</h1>
                                    <p className={classes.data}>{data[0].RFC}</p>
                                </section>
                            </section>
                            <section className={classes.side}>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Primer Apellido</h1>
                                    <p className={classes.data}>{data[0].LNAME1}</p>
                                </section>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Nacionalidad</h1>
                                    <p className={classes.data}>{data[0].NATIONALITY}</p>
                                </section>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Actividad Económica</h1>
                                    <p className={classes.data}>{data[0].OCCUPATION}</p>
                                </section>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Número de Telefono</h1>
                                    <p className={classes.data}>{data[0].PHONE_NUMBER}</p>
                                </section>
                            </section>
                            <section className={classes.side}>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Segundo Apellido</h1>
                                    <p className={classes.data}>{data[0].LNAME2}</p>
                                </section>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Género</h1>
                                    <p className={classes.data}>{data[0].GENDER}</p>
                                </section>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>CURP</h1>
                                    <p className={classes.data}>{data[0].CURP}</p>
                                </section>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Email</h1>
                                    <p className={classes.data}>{data[0].EMAIL}</p>
                                </section>
                            </section>
                        </section>

                        <h1 className={classes.newSectionTitle}>Direccción del usuario</h1>
                        <hr className={classes.divisor}/>
                        <section className={classes.columns}>
                            <section className={classes.side}>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>País</h1>
                                    <p className={classes.data}>{data[0].COUNTRY}</p>
                                </section>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Colonia</h1>
                                    <p className={classes.data}>{data[0].NEIGHBORHOOD}</p>
                                </section>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Número Exterior</h1>
                                    <p className={classes.data}>{data[0].EXT_NUMBER}</p>
                                </section>

                            </section>
                            <section className={classes.side}>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Estado</h1>
                                    <p className={classes.data}>{data[0].STATE}</p>
                                </section>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Código Postal</h1>
                                    <p className={classes.data}>{data[0].ZIP_CODE}</p>
                                </section>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Número Interior</h1>
                                    <p className={classes.data}>{data[0].INT_NUMBER}</p>
                                </section>
                            </section>
                            <section className={classes.side}>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Ciudad</h1>
                                    <p className={classes.data}>{data[0].CITY}</p>
                                </section>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Calle</h1>
                                    <p className={classes.data}>{data[0].STREET}</p>
                                </section>
                            </section>
                        </section>
                        <h1 className={classes.newSectionTitle}>Identificaciones del usuario</h1>
                        <hr className={classes.divisor}/>
                        <section className={classes.columns}>
                            <section className={classes.side2}>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Tipo de Identificación</h1>
                                    <p className={classes.data}>{data[0].ID_NUMBER}</p>
                                </section>
                            </section>
                            <section className={classes.side2}>
                                <section className={classes.dataSection}>
                                    <h1 className={classes.dataTitle}>Número de Identificación</h1>
                                    <p className={classes.data}>{data[0].ID_TYPE}</p>
                                </section>
                            </section>
                        </section>

                    </section> : <p>Loading </p> );
                </section>
                <button style={{maxWidth: "200px", backgroundColor: "#48cd00", fontWeight: "700", color: "#ffffff", fontSize:"18px", padding: "8px", alignSelf: "flex-end"}}>Generar Reporte</button>
            </section>
        </div>
    </Modal>
  )
}

export default Acceso;