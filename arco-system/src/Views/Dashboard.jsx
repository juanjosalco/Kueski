import React, { useState } from "react";
import Table from "../Components/Table";
import ARCO from "../Components/ARCO";

import { makeStyles } from "@mui/styles";
import { AppBar, Toolbar, Button, Typography, Container } from "@mui/material";
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop:80,
    paddingSide: 80,
  },
}));

function Dashboard() {
    const classes = useStyles()
    const [view, setView] = useState("Users");

    const handleView = (selectedView) =>{
      setView(selectedView)
    }
  return (
    <div maxWidth='xxl' style={{minWidth: '1450px'}}>
      <AppBar sx={{ backgroundColor: "#2A3852" }}>
        <Toolbar>
          <Typography>Arco System</Typography>
          <Button
            sx={{ marginLeft: "auto" }}
            variant="contained"
            onClick={() => handleView("Users")}
          >
            Users{" "}
          </Button>
          <Button
            sx={{ marginLeft: "10px" }}
            variant="contained"
            onClick={() => handleView("Logs")}
          >
            Logs{" "}
          </Button>
        </Toolbar>
      </AppBar>
      {view === "Users" && (
        <Box className={classes.container}>
          <Table />
        </Box>
      )}
      {view === "Logs" && (<Box className={classes.container}>
        <ARCO />
      </Box>)}
    </div>
  );
}

export default Dashboard;