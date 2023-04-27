import React, { useState } from "react";
import Table from "../Components/Table";

import { AppBar, Toolbar, Button, Typography, Container } from "@mui/material";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Actions from "../Components/Actions";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 80,
  }
}));

function Dashboard() {
    const classes = useStyles()
    const [view, setView] = useState("Users");

    const handleView = (selectedView) =>{
      setView(selectedView)
    }
  return (
    <Container maxWidth='xxl' style={{minWidth: '1450px'}}>
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
          {/* <Actions/> */}
          <Table/>
        </Box>
      )}
      {view === "Logs" && <Box className={classes.container}></Box>}
    </Container>
  );
}

export default Dashboard;