import React, { useEffect, useState } from "react";

import DataTable from "react-data-table-component";

// import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

// import DropdownFilter from "./DropdownFilter";

const useStyles = makeStyles((theme) => ({
  fatherContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  smallItem: {
    minWidth: '5%',
    minWidth: '5%',
    textAlign: 'center',
    borderBlock: '4px solid black',
    borderInline: '4px solid black'
  },
  item: {
    minWidth: '10%',
    minWidth: '10%',
    textAlign: 'center',
    borderBlock: '4px solid black',
    borderInline: '2px solid black'
  },
  bigItem: {
    minWidth: '17.5%',
    minWidth: '17.5%',
    textAlign: 'center',
    borderBlock: '4px solid black',
    borderInline: '2px solid black',
  }
}));

function Table() {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json()) 
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const column = [
    {name: 'ID', selector: 'ID', sortable: true},
    {name: 'Nombre', selector: 'F_NAME', sortable: true},
    {name: 'F. Nacimiento', selector: 'BIRTH_DATE', sortable: true,
    cell: (row) => {
      const birthDate = row.BIRTH_DATE;
      // const maxLength = 10; // establecer la longitud máxima de caracteres permitidos
      // if (birthDate.length > maxLength) {
        return birthDate.substring(0, 10); // truncar y agregar puntos suspensivos
      // }
      // return birthDate;
    },},
    {name: 'Nacionalidad', selector: 'NATIONALITY', sortable: true},
    {name: 'Estado', selector: 'STATE_BORN_IN', sortable: true},
    {name: 'Ocupacion', selector: 'OCCUPATION', sortable: true},
    {name: 'CURP', selector: 'CURP', sortable: true},

  ]

  return (
    <>
      <DataTable
       columns={column}
       data={data}
       title='ARCO SYSTEM' />

      {/* <DropdownFilter />
      <br/>
      <Box className={classes.fatherContainer}>
        <Box className={classes.smallItem}>
          <h3>ID</h3>
        </Box>
        <Box className={classes.bigItem}>
          <h3>Nombre</h3>
        </Box>
        <Box className={classes.bigItem}>
          <h3>F. Nacimiento</h3>
        </Box>
        <Box className={classes.item}>
          <h3>Nacionalidad</h3>
        </Box>
        <Box className={classes.item}>
          <h3>Estado</h3>
        </Box>
        <Box className={classes.bigItem}>
          <h3>Ocupación</h3>
        </Box>
        <Box className={classes.bigItem}>
          <h3>CURP</h3>
        </Box>
        <Box className={classes.smallItem}>
          <h3>ARCO</h3>
        </Box>
      </Box>
      {data
        ? data.map((dato) => {
            return (
              <Box className={classes.fatherContainer}>
                <Box className={classes.smallItem}>
                  <h3>{dato.ID}</h3>
                </Box>
                <Box className={classes.bigItem}>
                  <h3>{dato.F_NAME + ' ' + dato.LNAME1 + ' ' + dato.LNAME2}</h3>
                </Box>
                <Box className={classes.bigItem}>
                  <h3>{dato.BIRTH_DATE.substring(0, 10)}</h3>
                </Box>
                <Box className={classes.item}>
                  <h3>{dato.NATIONALITY}</h3>
                </Box>
                <Box className={classes.item}>
                  <h3>{dato.STATE_BORN_IN}</h3>
                </Box>
                <Box className={classes.bigItem}>
                  <h3>{dato.OCCUPATION}</h3>
                </Box>
                <Box className={classes.bigItem}>
                  <h3>{dato.CURP}</h3>
                </Box>
                <Box className={classes.smallItem}>
                  <h3>...</h3>
                </Box>
              </Box>
            );
          })
        : "Loading..."} */}
    </>
  );
}

export default Table;