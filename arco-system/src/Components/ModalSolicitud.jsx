import React, { useEffect, useState } from "react";
import { Button, Modal } from "@mui/material";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    modalContent: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        zIndex: "20",
    },
    container: {
        display: "flex",
        flexDirection: "column",
        width: "50%",
        height: "80%",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
    
    },
    column: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "70%",
        height: "70%",
        fontSize: "150%",
        borderRadius: "10px",
    },
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
    title: {
        display: "flex",
        justifyContent: "center",
        height: "10%", 
        backgroundColor: "#E0F1CD",
    },
    button: {
        height: "10%",
        backgroundColor: "#008AD7",
        color: "white",
        "&:hover": {
            backgroundColor: "#3A8CF5", 
        }
    },
    op:{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    },
    cntr:{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    //input type Checkbox
    checkbox: {
        width: "20px",
        height: "20px",
        borderRadius: "5px",
        "&:checked": {
        },
    },
}));    
const ModalSolicitud = function({id, isOpen, handleClose}){
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [comentarios, setComentarios] = useState([]);
    const [oposicion, setOposicion] = useState([]);
    useEffect(() => {
        fetch(`/api/arco/${id}`)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
        data.map((dato) => {
            fetch(`/api/oposicion/${dato.USER_ID}`)
            .then((res) => res.json())
            .then((data) => setOposicion(data))
            .catch((err) => console.log(err));
        })
    }, [id]);
    useEffect(() => {
        fetch(`/api/comentarios/${id}`)
        .then((res) => res.json())
        .then((data) => setComentarios(data))
        .catch((err) => console.log(err));
    }, [id]);
    return(
        <Modal open={isOpen} onClose={handleClose}>
            <div className={classes.modalContent}>
                <div className={classes.container}>
                    <div className={classes.title}>
                        <h1>ARCO</h1>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.column}>
                            <h2>Información</h2>
                            <div>
                                {data.map((dato) =>{
                                    return(
                                        <div>
                                        <p>ARCO_ID: {dato.ARCO_ID}</p>
                                        <p>Nombre:  {dato.F_NAME} {dato.LNAME1} </p>
                                        <p>Email:   {dato.EMAIL}</p>
                                        <p>Derecho: {dato.DERECHO}</p>
                                        {dato.DERECHO === "O" && oposicion.length > 0 ? 
                                        <div>
                                            <p>El usuario ha solicitado oposición a:</p>
                                            {oposicion.map((op) => {
                                                return(
                                                    <div className={classes.op}>
                                                        <div className={classes.cntr}>
                                                        <label for="cbx" className={classes.cbx}>Publicidad</label>
                                                        <input checked={op.PUBLICIDAD} disabled type="checkbox" className={classes.checkbox} id="cbx"/>
                                                        </div>
                                                        <div className={classes.cntr}>
                                                        <label for="cbx" className={classes.cbx}>Estadisticas</label>
                                                        <input checked={op.ESTADISTICAS} disabled type="checkbox" id="cbx" className={classes.checkbox}/>
                                                        </div>
                                                        <div className={classes.cntr}>
                                                        <label for="cbx" className={classes.cbx}>Marketing</label>
                                                        <input checked={op.MARKETING} disabled type="checkbox" id="cbx" className={classes.checkbox}/>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        : null}
                                        <p>Fecha de resolución: {dato.FECHA_RESUELTA.slice(0,10).split("-").reverse().join("/")}</p>
                                        <p>Telefono:    {dato.PHONE_NUMBER}</p>
                                    </div>)
                                })}
                            </div>
                            <div>
                                <h2>Comentarios</h2>
                                {comentarios.length >0 ? comentarios.map((comentario) => {
                                    return(
                                        <div>
                                            <p>Comentario: {comentario.COMENTARIO}</p>
                                        </div>
                                    )
                                }) : <p>No hay comentarios</p>
                                }
                            </div>
                        </div>
                    </div>
                    <button onClick={handleClose} className={classes.button}>Cerrar</button>
                </div>
            </div>
        </Modal>
    )
}

export default ModalSolicitud;
