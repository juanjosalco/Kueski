import React, { useState } from "react";
import Table from "../Components/Table";
import ARCO from "../Components/ARCO";

import { AppBar, Toolbar, Button, Typography, Container } from "@mui/material";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Actions from "../Components/Actions";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "80px",
    display: "flex",
    justifyContent: "center",
  },
}));

function Dashboard() {
    const classes = useStyles()
    const [view, setView] = useState("Users");

    const handleView = (selectedView) =>{
      setView(selectedView)
    }
  return (
    <div style={{width: "90%", margin: 'auto'}}>
      <AppBar sx={{ backgroundColor: "#ffffff", padding:"10px"}}>
        <Toolbar>
          <img src="https://firebasestorage.googleapis.com/v0/b/nolbertocastroweb.appspot.com/o/kueskilogo.png?alt=media&token=c6bdb00b-1ce0-4346-a618-c5f7c69a00c7" alt="kueski Logo" style={{width: "200px"}}/>
          <Typography>Arco System</Typography>
          <Button
            sx={{ marginLeft: "auto" }}
            variant="outlined"
            onClick={() => handleView("Users")}
          >
            Usuarios{" "}
          </Button>
          <Button
            sx={{ marginLeft: "10px" }}
            variant="outlined"
            onClick={() => handleView("Logs")}
          >
            Solicitudes{" "}
          </Button>
        </Toolbar>
      </AppBar>
      {view === "Users" && (
        <Box className={classes.container}>
          {/* <Actions/> */}
          <Table/>
        </Box>
      )}
      {view === "Logs" && (
        <Box className={classes.container}>
        <ARCO />
      </Box>
      )}
    </div>
  );
}

export default Dashboard;