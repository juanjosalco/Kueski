import React from 'react'
import { Box, Modal, Typography } from "@mui/material";
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
    dataSection:{
        display: "grid",
        gap: "16px"
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
        width: "50%",
        height: "100%",
        gap: "32px"
    },
    inputAction:{
        width: "100%",
        fontSize: "18px",
        padding: "16px"
    },
    textInputArea:{
        width: "100%",
        height: "200px",
        fontSize: "18px",
        padding: "32px",
        outlineWidth: "0",
        overflowWrap: "break-words",
        appearance: "nonce"
    }
}));

function Rectificacion({isOpen, handleClose}) {
    const classes = useStyles();
  return (
    <Modal open={isOpen} onClose={handleClose} style={{overflow: "scroll"}}>
        <div className={classes.blackBack}>
            <section style={{display: "flex", flexDirection: "column", width:"80%", padding: "64px", backgroundColor: "#ffffff", gap: "48px"}}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <h1 style={{fontSize: "36px"}}>Rectificación</h1>
                    <button style={{height: "50px", backgroundColor: "#ffffff", border: "0"}} onClick={handleClose}>
                            <img src="https://firebasestorage.googleapis.com/v0/b/nolbertocastroweb.appspot.com/o/button.png?alt=media&token=470e1b7a-7a01-454b-9cce-0bfdeaf12681" alt="close"  style={{height: "100%"}}></img>
                    </button>
                </div>
                <section style={{display: "flex", width: "100%", justifyContent: "space-between", gap: "32px"}}>
                    <section className={classes.side}>
                        <section className={classes.dataSection}>
                            <h1 className={classes.dataTitle}>Nombre</h1>
                            <input value="voluptate occaecati iusto" className={classes.inputAction}></input> 
                        </section>
                        <section className={classes.dataSection}>
                            <h1 className={classes.dataTitle}>Primer Apellido</h1>
                            <input value="voluptate occaecati iusto" className={classes.inputAction}></input> 
                        </section>
                        <section className={classes.dataSection}>
                            <h1 className={classes.dataTitle}>Segundo Apellido</h1>
                            <input value="voluptate occaecati iusto" className={classes.inputAction}></input> 
                        </section>
                        <section className={classes.dataSection}>
                            <h1 className={classes.dataTitle}>Fecha de Nacimiento</h1>
                            <input value="voluptate occaecati iusto" className={classes.inputAction}></input> 
                        </section>
                        <section className={classes.dataSection}>
                            <h1 className={classes.dataTitle}>Nacionalidad</h1>
                            <input value="voluptate occaecati iusto" className={classes.inputAction}></input> 
                        </section>
                        <section className={classes.dataSection}>
                            <h1 className={classes.dataTitle}>Estado</h1>
                            <input value="voluptate occaecati iusto" className={classes.inputAction}></input> 
                        </section>
                        <section className={classes.dataSection}>
                            <h1 className={classes.dataTitle}>Actividad Económica</h1>
                            <input value="voluptate occaecati iusto" className={classes.inputAction}></input> 
                        </section>
                        <section className={classes.dataSection}>
                            <h1 className={classes.dataTitle}>CURP</h1>
                            <input value="voluptate occaecati iusto" className={classes.inputAction}></input> 
                        </section>
                        <section className={classes.dataSection}>
                            <h1 className={classes.dataTitle}>RFC</h1>
                            <input value="voluptate occaecati iusto" className={classes.inputAction}></input> 
                        </section>
                        <section className={classes.dataSection}>
                            <h1 className={classes.dataTitle}>Genero</h1>
                            <input value="voluptate occaecati iusto" className={classes.inputAction}></input> 
                        </section>
                        <section className={classes.dataSection}>
                            <h1 className={classes.dataTitle}>Número de Telefono</h1>
                            <input value="voluptate occaecati iusto" className={classes.inputAction}></input> 
                        </section>
                        <section className={classes.dataSection}>
                            <h1 className={classes.dataTitle}>Email</h1>
                            <input value="voluptate occaecati iusto" className={classes.inputAction}></input> 
                        </section>
                        <button style={{maxWidth: "200px", backgroundColor: "#48cd00", fontWeight: "700", color: "#ffffff", fontSize:"18px", padding: "8px", alignSelf: "flex-end"}}>Generar Reporte</button>
                    </section>
                    <section className={classes.side}>
                        <section className={classes.dataSection}>
                            <h1 className={classes.dataTitle}>Otro</h1>
                            <textarea value="Velit recusandae non voluptas earum est aut non. non voluptas earum est aut non. non voluptas earum est aut non." className={classes.textInputArea}/> 
                        </section>
                        <section className={classes.dataSection}>
                            <h1 className={classes.newSectionTitle}>Dirección</h1>
                            <hr className={classes.divisor}/>
                        </section>
                        <section className={classes.dataSection}>
                            <h1 className={classes.dataTitle}>País</h1>
                            <input value="voluptate occaecati iusto" className={classes.inputAction}></input> 
                        </section>
                        <section className={classes.dataSection}>
                            <h1 className={classes.dataTitle}>Estado</h1>
                            <input value="voluptate occaecati iusto" className={classes.inputAction}></input> 
                        </section>
                        <section className={classes.dataSection}>
                            <h1 className={classes.dataTitle}>Ciudad</h1>
                            <input value="voluptate occaecati iusto" className={classes.inputAction}></input> 
                        </section>
                        <section className={classes.dataSection}>
                            <h1 className={classes.dataTitle}>Colonia</h1>
                            <input value="voluptate occaecati iusto" className={classes.inputAction}></input> 
                        </section>
                        <section className={classes.dataSection}>
                            <h1 className={classes.dataTitle}>Código Postal</h1>
                            <input value="voluptate occaecati iusto" className={classes.inputAction}></input> 
                        </section>
                        <section className={classes.dataSection}>
                            <h1 className={classes.dataTitle}>Calle</h1>
                            <input value="voluptate occaecati iusto" className={classes.inputAction}></input> 
                        </section>
                        <section className={classes.dataSection}>
                            <h1 className={classes.dataTitle}>Número Exterior</h1>
                            <input value="voluptate occaecati iusto" className={classes.inputAction}></input> 
                        </section>
                        <section className={classes.dataSection}>
                            <h1 className={classes.dataTitle}>Número Interior</h1>
                            <input value="voluptate occaecati iusto" className={classes.inputAction}></input> 
                        </section>
                        <section className={classes.dataSection}>
                            <h1 className={classes.newSectionTitle}>Identificación</h1>
                            <hr className={classes.divisor} />
                        </section>
                        <section className={classes.dataSection}>
                            <h1 className={classes.dataTitle}>Tipo de Identificación</h1>
                            <input value="voluptate occaecati iusto" className={classes.inputAction}></input> 
                        </section>
                        <section className={classes.dataSection}>
                            <h1 className={classes.dataTitle}>Número de Identificación</h1>
                            <input value="voluptate occaecati iusto" className={classes.inputAction}></input> 
                        </section>
                    </section>
                </section>

            </section>
        </div>
    </Modal>
  )
}

export default Rectificacion