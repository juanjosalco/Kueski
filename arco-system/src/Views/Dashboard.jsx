import React from "react";
import Table from "../Components/Table";

import { makeStyles } from "@mui/styles";
<<<<<<< HEAD
=======
import { AppBar, Toolbar, Button, Typography, Container } from "@mui/material";
>>>>>>> 7ecca6c (Added new Styles and Merged With Branch 3)
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: 80,
    border: '3px solid black',
    borderBottom: '0px solid black'
  },
}));

function Dashboard() {
    const classes = useStyles()
  return (
    <Container maxWidth='xxl' style={{minWidth: '1550px'}}>
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
      {view === "Logs" && <Box className={classes.container}></Box>}
    </Container>
  );
}

export default Dashboard;