import React from 'react'

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
    fontSize: "18px",
    padding: "32px",
    outlineWidth: "0",
    overflowWrap: "break-word",
    appearance: "none"

  }
}));

function Oposicion({isOpen, handleClose}) {
  const classes = useStyles();
  return (
    <Modal open={isOpen} onClose={handleClose}>
        <div className={classes.blackBack}>
            <section style={{display: "flex", flexDirection: "column", width:"80%", padding: "64px", backgroundColor: "#ffffff", gap: "48px"}}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <h1 style={{fontSize: "36px"}}>Oposición</h1>
                    <button style={{height: "50px", backgroundColor: "#ffffff", border: "0"}} onClick={handleClose}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/nolbertocastroweb.appspot.com/o/button.png?alt=media&token=470e1b7a-7a01-454b-9cce-0bfdeaf12681" alt="close"  style={{height: "100%"}}></img>
                    </button>
                </div>
                <section style={{display: "grid", gap:"32px"}}>
                    <p style={{fontSize: "18px"}}>Velit recusandae non voluptas earum est aut non. Laborum illum reprehenderit ratione sunt natus qui a dolorem eaque architecto rem. Officia beatae voluptatum impedit ut rem dicta suscipit. Et modi et doloribus qui non at animi sed quia et. Aut itaque sit rerum excepturi sit facilis odit eius eveniet aperiam suscipit aliquam enim.</p>
                    <h1 style={{fontSize: "30px"}}>¿Cuál es la oposición?</h1>
                    <section style={{display: "flex", justifyContent: "space-between"}}>
                        <div className={classes.element}>
                            <input type="checkbox" id="html" className={classes.check}/>
                            <label for="html" className={classes.optionText}>HTML</label>
                        </div>
                        <div className={classes.element}>
                            <input type="checkbox" id="html" className={classes.check}/>
                            <label for="html" className={classes.optionText}>HTML</label>
                        </div>
                        <div className={classes.element}>
                            <input type="checkbox" id="html" className={classes.check}/>
                            <label for="html" className={classes.optionText}>HTML</label>
                        </div>
                        <div className={classes.element}>
                            <input type="checkbox" id="html" className={classes.check}/>
                            <label for="html" className={classes.optionText}>HTML</label>
                        </div>
                        <div className={classes.element}>
                            <input type="checkbox" id="html" className={classes.check}/>
                            <label for="html" className={classes.optionText}>HTML</label>
                        </div>
                    </section>
                    <textarea value="Velit recusandae non voluptas earum est aut non." className={classes.textAreas}/>
                    <h1 style={{fontSize: "30px"}}>¿Porque se realiza la oposición?</h1>
                    <section style={{display: "flex", justifyContent: "space-between"}}>
                        <div className={classes.element}>
                            <input type="checkbox" id="html" className={classes.check}/>
                            <label for="html" className={classes.optionText}>HTML</label>
                        </div>
                        <div className={classes.element}>
                            <input type="checkbox" id="html" className={classes.check}/>
                            <label for="html" className={classes.optionText}>HTML</label>
                        </div>
                        <div className={classes.element}>
                            <input type="checkbox" id="html" className={classes.check}/>
                            <label for="html" className={classes.optionText}>HTML</label>
                        </div>
                        <div className={classes.element}>
                            <input type="checkbox" id="html" className={classes.check}/>
                            <label for="html" className={classes.optionText}>HTML</label>
                        </div>
                        <div className={classes.element}>
                            <input type="checkbox" id="html" className={classes.check}/>
                            <label for="html" className={classes.optionText}>HTML</label>
                        </div>
                    </section>
                    <textarea value="Velit recusandae non voluptas earum est aut non." className={classes.textAreas}/>
                    <button style={{display: "flex", maxWidth: "300px", backgroundColor: "#48cd00", fontWeight: "700", color: "#ffffff", fontSize: "18px", padding: "8px", justifySelf: "end", border: "0"}}>Registrar Cancelación</button>
                </section>
            </section>
        </div>
    </Modal>
  )
}

export default Oposicion