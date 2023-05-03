import { makeStyles } from "@mui/styles";
import { Button, Modal } from "@mui/material";

const useStyles = makeStyles((theme) => ({
    DDOption:{
      display: "grid",
      width: "90%",
      gap: "50px",
      gridTemplateColumns: "15% 85%",
      justifyContent: "left",
      alignItems: "center",
    },
  }));

function Actions({isOpen, handleClose,setOpenOP, setOpenCN,setOpenAC,setOpenRN}) {
    const classes = useStyles()
    function HandleOposicion(e){
      e.preventDefault();
      handleClose();
      setOpenOP(true);
    }
    function HandleCancelacion(e){
      e.preventDefault();
      handleClose();
      setOpenCN(true);
    }
    function HandleAcceso(e){
      e.preventDefault();
      handleClose();
      setOpenAC(true);
    }
    function HandleRectificacion(e){
      e.preventDefault();
      handleClose();
      setOpenRN(true);
    }
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <section style={{display: "flex", width: "100%", height: "100vh" , flexDirection: "column", justifyContent: "center", alignItems: "center", position: "absolute", marginTop: "4px", zIndex: "9999", background: "rgba(0, 0, 0, .5)"}}>
          <section style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "50px" ,width: "80%",backgroundColor: "#ffffff", padding: "50px"}}>
              
              <section style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
                <h3 style={{}}>¿Qué Acción ARCO te gustaría realizar?</h3>
                <button style={{height: "50px", backgroundColor: "#ffffff", border: "0", cursor: "pointer"}} onClick={handleClose}>
                  <img src="https://firebasestorage.googleapis.com/v0/b/nolbertocastroweb.appspot.com/o/button.png?alt=media&token=470e1b7a-7a01-454b-9cce-0bfdeaf12681" alt="close"  style={{height: "100%"}}></img>
                </button>
              </section>
              <section style={{display: "flex", flexDirection: "column", gap: "50px" }}>
              <div className={classes.DDOption}>
                  <Button variant="contained" onClick={(e) => HandleAcceso(e)}>Acceso</Button>
                  <p>Es la facultad de solicitar el acceso a los datos
                  personales que se encuentran en las bases de datos, sistemas, archivos,
                  registros o expedientes de la SFP, que los almacena o utiliza, así como
                  conocer la información relacionada con las condiciones y
                  generalidades del tratamiento que se les da. 
                  </p>
              </div>
              <div className={classes.DDOption}>
                  <Button variant="contained" onClick={(e) => HandleRectificacion(e)}>Rectificación</Button>
                  <p>Es la facultad de solicitar a la SFP la corrección
                  de los datos personales en su posesión, cuando éstos sean inexactos o
                  incompletos o no se encuentren actualizados. 
                  </p>
              </div>
              <div className={classes.DDOption}>
                  <Button variant="contained" onClick={(e) => HandleCancelacion(e)}>Cancelación</Button>
                  <p>Es la facultad de solicitar que los datos
                  personales sean suprimidos o eliminados de los archivos, registros,
                  expedientes, sistemas, bases de datos de la SFP y dejen de ser tratados
                  por esta última. 
                  </p>
              </div>
              <div className={classes.DDOption}>
                  <Button variant="contained" onClick={(e) => HandleOposicion(e)}>Oposición</Button>
                  <p>Es la facultad de solicitar a la SFP que se
                  abstenga de utilizar información personal para ciertos fines, por
                  ejemplo, la publicación de datos personales en alguna fuente de acceso
                  público, o de requerir que se concluya el uso de los mismos a fin de
                  evitar un daño o afectación a su persona. 
                  </p>
              </div>
              </section>
          </section>
      </section>
    </Modal>
  )
}

export default Actions