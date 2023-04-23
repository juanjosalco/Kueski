import React from "react";
import Table from "../Components/Table";

import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 80,
  },
  TableContatiner:{
    borderTop: '4px solid black',
    borderLeft: '4px solid black',
  }
}));

function Dashboard() {
    const classes = useStyles()
  return (

    <Box className={classes.container}>
       <Box className={classes.TableContatiner}>
          <Table/>
       </Box>
    </Box>
  );
}

export default Dashboard;