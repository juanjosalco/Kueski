import React from "react";

import { Box, Button, Modal, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { Tooltip, Alert } from "@mui/material";
import ConfirmationModal from './ConfirmationModal';

const useStyles = makeStyles((theme) => ({
  blackBack: {
    display: "flex",
    width: "100vw",
    minHeight: "100vh",
    background: "rgba(0, 0, 0, .5)",
    position: "absolute",
    justifyContent: "center",
    zIndex: "20",
    padding: "64px",
  },
  element: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
  check: {
    width: "15px",
    height: "15px",
    outlineWidth: "4px",
    outlineColor: "#000000",
    border: "0",
    paddingRight: "5px",
  },
  optionText: {
    fontSize: "16px",
    fontWeight: "500",
    marginBlock: 8,
  },
  button: {
    display: "flex",
    maxWidth: "300px",
    backgroundColor: "#48cd00",
    fontWeight: "700",
    color: "#ffffff",
    fontSize: "18px",
    padding: "8px",
    justifySelf: "end",
    border: "0",
  },
  subtitle: {
    marginBlock: 16,
  },
}));

function Oposicion({ isOpen, handleClose, user }) {
  const classes = useStyles();

  const date = new Date();

  const [checkboxes, setCheckboxes] = useState([
    {
      id: 1,
      isChecked: false,
      label:
        "Fines mercado técnicos, publicitarios y/o de prospección comercial.",
    },
    {
      id: 2,
      isChecked: false,
      label:
        "Otorgamiento de estímulos o reconocimientos a clientes, cuando participen en nuestras campañas publicitarias, mercadológicas o comerciales.",
    },
    {
      id: 3,
      isChecked: false,
      label:
        "Uso de imágenes y testimonios de clientes y/o usuarios para fines publicitarios y de ofertas comerciales referentes a productos y/o servicios ofrecidos o relacionados con productos y/o servicios contratados",
    },
    {
      id: 4,
      isChecked: false,
      label: "Mejoras en el servicio de atención y trato con el cliente.",
    },
  ]);

  const handleCheckboxChange = (event, checkboxId) => {
    const updatedCheckboxes = checkboxes.map((checkbox) =>
      checkbox.id === checkboxId
        ? { ...checkbox, isChecked: event.target.checked }
        : checkbox
    );
    setCheckboxes(updatedCheckboxes);
  };

  const handlePostRequest = () => {
    fetch("/api/arco", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.row.ID,
        derecho: "O",
        fecha_resuelta:
          date.toISOString().substring(0, 10) +
          " " +
          date.toTimeString().substring(0, 8),
      }),
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
    fetch("/api/oposicion", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.row.ID,
        marketing: Number(checkboxes[0].isChecked),
        rewards: Number(checkboxes[1].isChecked),
        testimony: Number(checkboxes[2].isChecked),
        services: Number(checkboxes[3].isChecked),
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    handleClose();
  };

  const [showModal, setShowModal] = useState(false);

    function handleClick() {
        setShowModal(true);
    }

    function handleConfirm() {
        console.log("User confirmed the operation");
        setShowModal(false);
        handlePostRequest();
      }

    function handleCancel() {
        setShowModal(false);
    }



  return (
    <Modal open={isOpen} onClose={handleClose} style={{ overflow: "scroll" }}>
      <div className={classes.blackBack}>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
            padding: "64px",
            backgroundColor: "#ffffff",
            gap: "15px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "0",
            }}
          >
            <h1 style={{ fontSize: "36px" }}>Oposición</h1>
            <button
              style={{
                height: "50px",
                backgroundColor: "#ffffff",
                border: "0",
              }}
              onClick={handleClose}
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/nolbertocastroweb.appspot.com/o/button.png?alt=media&token=470e1b7a-7a01-454b-9cce-0bfdeaf12681"
                alt="close"
                style={{ height: "100%" }}
              ></img>
            </button>
          </div>
          <p style={{ fontSize: "18px" }}>
            Selecciona las razones por la que {user.row.F_NAME}{" "}
            {user.row.LNAME1} {user.row.LNAME2} desea oponerse al uso de sus
            datos personales.
          </p>
          <section
            style={{ display: "grid", gap: "15px", paddingBottom: "5px" }}
          >
            <section style={{ justifyContent: "left" }}>
              <Box className={classes.subtitle}>
                <h2 style={{ fontSize: "20px", paddingBottom: "5px" }}>
                  Razones Primarias de Oposición{" "}
                </h2>
                <Tooltip
                  title={
                    <Alert severity="info">
                      Solo se puede aplicar si el usuario no es cliente.
                    </Alert>
                  }
                  arrow
                  placement="top"
                >
                  <p style={{ fontSize: "16px" }}>
                    Finalidad de uso de datos: prestación de servicios.
                  </p>
                </Tooltip>
              </Box>
              <section style={{ gap: "20px" }}>
                <div className={classes.element}>
                  <input
                    type="checkbox"
                    id="myCheckBox"
                    className={classes.check}
                    disabled={user.row.IS_CLIENT ? true : false}
                  />
                  <label for="html" className={classes.optionText}>
                    {" "}
                    Identificación del solicitante y/o cliente, según sea el
                    caso.
                  </label>
                </div>
                <div className={classes.element}>
                  <input
                    type="checkbox"
                    id="myCheckBox"
                    className={classes.check}
                    disabled={user.row.IS_CLIENT ? true : false}
                  />
                  <label for="html" className={classes.optionText}>
                    Integración del expediente de información de nuestro
                    cliente.
                  </label>
                </div>
                <div className={classes.element}>
                  <input
                    type="checkbox"
                    id="myCheckBox"
                    className={classes.check}
                    disabled={user.row.IS_CLIENT ? true : false}
                  />
                  <label for="html" className={classes.optionText}>
                    Prestación de los servicios y/o comercialización de los
                    bienes de que se trate.
                  </label>
                </div>
                <div className={classes.element}>
                  <input
                    type="checkbox"
                    id="myCheckBox"
                    className={classes.check}
                    disabled={user.row.IS_CLIENT ? true : false}
                  />
                  <label for="html" className={classes.optionText}>
                    Gestión, control, administración y procesamiento de las
                    solicitudes del solicitante y/o cliente.
                  </label>
                </div>
                <div className={classes.element}>
                  <input
                    type="checkbox"
                    id="myCheckBox"
                    className={classes.check}
                    disabled={user.row.IS_CLIENT ? true : false}
                  />
                  <label for="html" className={classes.optionText}>
                    Gestión, control y administración de la cobranza
                    administrativa (a través de cualquier medio de contacto
                    otorgado en la solicitud), extrajudicial y, en su caso,
                    judicial derivada de los servicios proporcionados por
                    Kueski.
                  </label>
                </div>
                <div className={classes.element}>
                  <input
                    type="checkbox"
                    id="myCheckBox"
                    className={classes.check}
                    disabled={user.row.IS_CLIENT ? true : false}
                  />
                  <label for="html" className={classes.optionText}>
                    Investigación de cambios en el perfil transaccional del
                    cliente.
                  </label>
                </div>
                <div className={classes.element}>
                  <input
                    type="checkbox"
                    id="myCheckBox"
                    className={classes.check}
                    disabled={user.row.IS_CLIENT ? true : false}
                  />
                  <label for="html" className={classes.optionText}>
                    Cumplimiento a obligaciones de carácter fiscal o comercial.
                  </label>
                </div>
                <div className={classes.element}>
                  <input
                    type="checkbox"
                    id="myCheckBox"
                    className={classes.check}
                    disabled={user.row.IS_CLIENT ? true : false}
                  />
                  <label for="html" className={classes.optionText}>
                    Atención de consultas, dudas, aclaraciones o quejas del
                    cliente.
                  </label>
                </div>
                <div className={classes.element}>
                  <input
                    type="checkbox"
                    id="myCheckBox"
                    className={classes.check}
                    disabled={user.row.IS_CLIENT ? true : false}
                  />
                  <label for="html" className={classes.optionText}>
                    Estadística y registro histórico de usuarios y clientes.
                  </label>
                </div>
                <div className={classes.element}>
                  <input
                    type="checkbox"
                    id="myCheckBox"
                    className={classes.check}
                    disabled={user.row.IS_CLIENT ? true : false}
                  />
                  <label for="html" className={classes.optionText}>
                    Creación, mantenimiento y entrenamiento de los modelos de
                    riesgo predictivos de Kueski.
                  </label>
                </div>
                <div className={classes.element}>
                  <input
                    type="checkbox"
                    id="myCheckBox"
                    className={classes.check}
                    disabled={user.row.IS_CLIENT ? true : false}
                  />
                  <label for="html" className={classes.optionText}>
                    Mantener la seguridad de la información y de la operación.
                  </label>
                </div>
              </section>
              <Box className={classes.subtitle}>
                <h2 style={{ fontSize: "20px", paddingBottom: "5px" }}>
                  Razones Secundarias de Oposición{" "}
                </h2>
                <Tooltip
                  title={
                    <Alert severity="info">
                      Información que siempre se debe dejar de usar en caso de
                      que el cliente lo solicite.
                    </Alert>
                  }
                  arrow
                  placement="top"
                >
                  <p style={{ fontSize: "16px", paddingBottom: "5px" }}>
                    Finalidad de uso de datos: comercial, marketing,
                    testimonial.
                  </p>
                </Tooltip>
              </Box>
              <section style={{ justifyContent: "space-between" }}>
                {checkboxes.map((checkbox) => (
                  <div key={checkbox.id} className={classes.element}>
                    <input
                      type="checkbox"
                      className={classes.check}
                      checked={checkbox.isChecked}
                      onChange={(event) =>
                        handleCheckboxChange(event, checkbox.id)
                      }
                    />
                    <label className={classes.optionText} htmlFor="html">
                      {checkbox.label}
                    </label>
                  </div>
                ))}
              </section>
              <section
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "20px",
                  paddingTop: "15px",
                }}
              >
                {" "}
              </section>
              <Button
                variant="contained"
                onClick={() => {
                  handleClick()
                }}
              >
                Registrar Oposición
              </Button>
              <ConfirmationModal
                        open={showModal}
                        onClose={handleCancel}
                        onConfirm={handleConfirm}
                        message="¿Estás seguro de que quieres realizar la oposición?"
                    />
            </section>
          </section>
        </section>
      </div>
    </Modal>
  );
}

export default Oposicion;
