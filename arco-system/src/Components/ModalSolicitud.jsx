import React, { useEffect, useState } from "react";

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
        width: "80%",
        height: "80%",
        backgroundColor: "rgba(0, 0, 0, .1)",
    },
    column: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        width: "50%",
        height: "50%",
        backgroundColor: "white",
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

}));

function ModalSolicitud({id}){
    const classes = useStyles();
    const [data, setData] = useState([]);
    const [comentarios, setComentarios] = useState([]);
    useEffect(() => {
        fetch(`/api/arco/${id}`)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));

        fetch(`/api/comentarios/${id}`)
        .then((res) => res.json())
        .then((data) => setComentarios(data))
        .catch((err) => console.log(err));
    }, []);
    return (
        <div className={classes.modalContent}>
            <div className={classes.container}>
            <h1>ModalSolicitud</h1>
            <div className="column">
                <div className="row">
                    <p>ARCO_ID</p>
                    <p>{data.ARCO_ID}</p>
                    <p>DERECHO</p>
                    <p>{data.DERECHO}</p>
                    <p>FECHA_RESUELTA</p>
                    <p>{data.FECHA_RESUELTA}</p>
                    <p>F_NAME</p>
                    <p>{data.F_NAME}</p>
                    <p>LNAME1</p>
                    <p>{data.LNAME1}</p>
                    <p>PHONE_NUMBER</p>
                    <p>{data.PHONE_NUMBER}</p>
                    <p>EMAIL</p>
                    <p>{data.EMAIL}</p>                    
                </div>
            </div>
            <div>
                <h2>Comentarios</h2>
                {comentarios.map((comentario) => (
                    <div key={comentario.COMENTARIO_ID}>
                        <h1>Comentarios</h1>
                        <p>{comentario.COMENTARIO}</p>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
}

export default ModalSolicitud;
