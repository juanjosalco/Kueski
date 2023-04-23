import React, { useEffect, useState } from "react";

import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  fatherContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    flex: 1
  },
  smallItem: {
    flex: 1,
    textAlign: 'center',
    padding: 15
  },
  item: {
    flex: 2,
    textAlign: 'center',
    padding: 15
  },
  bigItem: {
    flex: 3,
    textAlign: 'center',
    padding: 15
  },
  Arco:{
    backgroundColor: "#008ad8",
    color: "#ffffff",
    borderBottom: '3px solid black',
    fontWeight: "bold"
  },
  Arco2: {
    borderBottom: '3px solid black',
    '&:hover': {
      background: "#A5ECFF",
   },
  },
  DataType:{
    borderRight: '3px solid black',
    borderBottom: '3px solid black',
  },
  Highlighted: {
    backgroundColor: '#008ad8',
    color: '#FFF',
    fontWeight: "bold"
  },
  Data:{
    display: '-webkit-box',
    overflow: 'hidden',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 1
  }
}));

function Table() {
  const classes = useStyles();

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Box className={classes.fatherContainer}>
        <Box className={[classes.smallItem, classes.DataType, classes.Highlighted]}>
          <Typography variant="b2" className={classes.Data}>ID</Typography>
        </Box>
        <Box className={[classes.bigItem, classes.DataType, classes.Highlighted]}>
          <Typography variant="b2" className={classes.Data}>Nombre</Typography>
        </Box>
        <Box className={[classes.item, classes.DataType, classes.Highlighted]}>
          <Typography variant="b2" className={classes.Data}>F. Nacimiento</Typography>
        </Box>
        <Box className={[classes.item, classes.DataType, classes.Highlighted]}>
          <Typography variant="b2" className={classes.Data}>Nacionalidad</Typography>
        </Box>
        <Box className={[classes.item, classes.DataType, classes.Highlighted]}>
          <Typography variant="b2" className={classes.Data}>Estado</Typography>
        </Box>
        <Box className={[classes.item, classes.DataType, classes.Highlighted]}>
          <Typography variant="b2" className={classes.Data}>Ocupación</Typography>
        </Box>
        <Box className={[classes.bigItem, classes.DataType, classes.Highlighted]}>
          <Typography variant="b2" className={classes.Data}>CURP</Typography>
        </Box>
        <Box className={[classes.smallItem, classes.Arco]}>
          <Typography variant="b2" className={classes.Data}>ARCO</Typography>
        </Box>
      </Box>
      {data
        ? data.map((dato) => {
            return (
              <Box className={classes.fatherContainer}>
                <Box className={[classes.smallItem, classes.DataType]}>
                  <Typography variant="b2" className={classes.Data}>{dato.ID}</Typography>
                </Box>
                <Box className={[classes.bigItem, classes.DataType]}>
                  <Typography variant="b2" className={classes.Data}>{dato.F_NAME + ' ' + dato.LNAME1 + ' ' + dato.LNAME2}</Typography>
                </Box>
                <Box  className={[classes.item, classes.DataType]}>
                  <Typography variant="b2" className={classes.Data}>{dato.BIRTH_DATE.substring(0, 10)}</Typography>
                </Box>
                <Box  className={[classes.item, classes.DataType]}>
                  <Typography variant="b2" className={classes.Data}>{dato.NATIONALITY}</Typography>
                </Box>
                <Box  className={[classes.item, classes.DataType]}>
                  <Typography variant="b2" className={classes.Data}>{dato.STATE_BORN_IN}</Typography>
                </Box>
                <Box className={[classes.item, classes.DataType]}>
                  <Typography variant="b2" className={classes.Data}>{dato.OCCUPATION}</Typography>
                </Box>
                <Box className={[classes.bigItem, classes.DataType]}>
                  <Typography variant="b2" className={classes.Data}>{dato.CURP}</Typography>
                </Box>
                <Box className={[classes.smallItem, classes.Arco2]}>
                  <Typography variant="b2" className={classes.Data}>...</Typography>
                </Box>
              </Box>
            );
          })
        : "Loading..."}
    </>
  );
}

export default Table;