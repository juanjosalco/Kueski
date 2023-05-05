import React, { useEffect, useState } from "react";
import { Button, Modal } from "@mui/material";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  modalContent: {
    paddingTop: "50px",
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
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    padding: "50px",
    gap: "50px",
  },
  column: {
    display: "grid",
    gridTemplateColumns: "50% 50%",
    width: "100%",
    fontSize: "150%",
    borderRadius: "10px",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "10%",
  },
  button: {
    height: "10%",
    backgroundColor: "#008AD7",
    color: "white",
    "&:hover": {
      backgroundColor: "#3A8CF5",
    },
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
}));
const ModalSolicitud = function ({ id, isOpen, handleClose }) {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [comentarios, setComentarios] = useState([]);
  const [oposicion, setOposicion] = useState([]);

  useEffect(() => {
    fetch(`/api/arco/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .then(() => Oposition(data[0].USER_ID))
      .catch((err) => console.log(err));
  }, [data]);
  function Oposition(id){
    fetch(`/api/oposicion/${id}`)
    .then((res) => res.json())
    .then((data) => setOposicion(data))
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetch(`/api/comentarios/${id}`)
      .then((res) => res.json())
      .then((data) => setComentarios(data))
      .catch((err) => console.log(err));
  }, [comentarios]);

  const [page, setPage] = useState(1);
  const itemsPerPage = 1; // Número de elementos por página
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = oposicion.slice(startIndex, endIndex);
  const totalPages = Math.ceil(oposicion.length / itemsPerPage);
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <div className={classes.modalContent}>
        <div className={classes.container}>
          <div className={classes.title}>
            <h1 style={{ fontSize: "36px" }}>Solicitud ARCO</h1>
            <Button onClick={handleClose} variant="outlined">
              Cerrar
            </Button>
          </div>
          <div className={classes.row}>
            {data.map((dato) => {
              return (
                <div className={classes.column}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "32px",
                    }}
                  >
                    <section className={classes.dataSection}>
                      <h1 className={classes.dataTitle}>ARCO_ID</h1>
                      <p className={classes.data}>{dato.ARCO_ID}</p>
                    </section>
                    <section className={classes.dataSection}>
                      <h1 className={classes.dataTitle}>Nombre</h1>
                      <p className={classes.data}>
                        {dato.F_NAME} {dato.LNAME1}
                      </p>
                    </section>
                    <section className={classes.dataSection}>
                      <h1 className={classes.dataTitle}>Email</h1>
                      <p className={classes.data}>{dato.EMAIL}</p>
                    </section>
                    <section className={classes.dataSection}>
                      <h1 className={classes.dataTitle}>Fecha de resolución</h1>
                      <p className={classes.data}>
                        {dato.FECHA_RESUELTA.slice(0, 10)
                          .split("-")
                          .reverse()
                          .join("/")}
                      </p>
                    </section>
                    <section className={classes.dataSection}>
                      <h1 className={classes.dataTitle}>Telefono</h1>
                      <p className={classes.data}>{dato.PHONE_NUMBER}</p>
                    </section>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "32px",
                    }}
                  >
                    <section className={classes.dataSection}>
                      <h1 className={classes.dataTitle}>Comentario</h1>
                      {comentarios.length > 0 ? (
                        comentarios.map((comentario) => {
                          return (
                            <p className={classes.data}>
                              {comentario.COMENTARIO}
                            </p>
                          );
                        })
                      ) : (
                        <p className={classes.data}>sin comentarios</p>
                      )}
                    </section>
                    <section className={classes.dataSection}>
                      <h1 className={classes.dataTitle}>Derecho</h1>
                      <p className={classes.data}>{dato.DERECHO}</p>
                      {dato.DERECHO === "O" ? (
                        <div>
                          <h1 className={classes.dataTitle}>Oposición</h1>
                          {itemsToShow.map((oposicion) => {
                            return (
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "10px",
                                }}
                              >
                                <div style={{ gap: "5px" }}>
                                  <p className={classes.data}>
                                    Oposition ID: {oposicion.OPPOSITION_ID}
                                  </p>
                                  {Object.keys(oposicion)
                                    .filter(
                                      (key) =>
                                        key !== "USER_ID" &&
                                        key !== "OPPOSITION_ID"
                                    )
                                    .map((key) => (
                                      <div
                                        style={{
                                          display: "flex",
                                          flexDirection: "row",
                                          justifyContent: "space-between",
                                        }}
                                      >
                                        <p className={classes.data}>{key}</p>
                                        <input
                                          type="checkbox"
                                          checked={oposicion[key]}
                                          disabled
                                          style={{
                                            width: "20px",
                                            height: "20px",
                                            backgroundColor: "white",
                                            border: "1px solid #008AD7",
                                          }}
                                        />
                                      </div>
                                    ))}
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: "10px",
                                  }}
                                >
                                  {Array.from(
                                    { length: totalPages },
                                    (_, index) => (
                                      <button
                                        key={index}
                                        onClick={() => setPage(index + 1)}
                                        style={{
                                          backgroundColor:
                                            index + 1 === page
                                              ? "#008AD7"
                                              : "white",
                                          padding: "8px",
                                          borderRadius: "10px",
                                          border: "1px solid #008AD7",
                                          color:
                                            index + 1 === page
                                              ? "white"
                                              : "#008AD7",
                                        }}
                                      >
                                        {index + 1}
                                      </button>
                                    )
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : null}
                    </section>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalSolicitud;
