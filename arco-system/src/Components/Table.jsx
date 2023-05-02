import React, { useEffect, useState } from "react";

import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Actions from "./Actions";
import Oposicion from "./Oposicion"
import Cancelacion from "./Cancelacion";
import Acceso from "./Acceso";
import Rectificacion from "./Rectificacion";

function Table() {
  const [data, setData] = useState([]);

  const [open, setOpen] = useState(false);
  const [openOP, setOpenOP] = useState(false);
  const [openCN, setOpenCN] = useState(false);
  const [openAC, setOpenAC] = useState(false);
  const [openRN, setOpenRN] = useState(false);
  const [userID, setId] = useState(null);
  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const columns = [
    { field: "ID", headerName: "ID", flex: 1, align: "center" },
    { field: "F_NAME", headerName: "Nombre", flex: 1, align: "center" },
    {
      headerName: "F. Nacimiento",
      field: "BIRTH_DATE",
      sortable: true,
      flex: 2,
      align: "center",
      renderCell: (row) => {
        const date = row.row.BIRTH_DATE.split("T")[0].split("-");
        const newDate = `${date[2]}/${date[1]}/${date[0]}`;
        return <div>{newDate}</div>;
      },
    },
    {
      headerName: "Nacionalidad",
      field: "NATIONALITY",
      sortable: true,
      flex: 2,
      align: "center",
    },
    {
      headerName: "Estado",
      field: "STATE_BORN_IN",
      sortable: true,
      flex: 2,
      align: "center",
    },
    {
      headerName: "Ocupacion",
      field: "OCCUPATION",
      sortable: true,
      flex: 2,
      align: "center",
    },
    {
      headerName: "CURP",
      field: "CURP",
      sortable: true,
      flex: 2,
      align: "center",
    },
    {
      field: "ARCO",
      headerName: "ARCO",
      width: 150,
      align: "center",
      renderCell: (params) => {
        const openView = () => {
          setId(params.id);
          setOpen(true);
        };

        return <Button onClick={openView}>ACCIONES
              </Button>;
      },
    },
  ];

  return (<>
    <Rectificacion isOpen={openRN} handleClose = {() => setOpenRN(false)}/>
    <Acceso isOpen={openAC} handleClose = {() => setOpenAC(false)} id={userID} />
    <Cancelacion isOpen={openCN} handleClose = {() => setOpenCN(false)}/>
    <Oposicion isOpen={openOP} handleClose = {() => setOpenOP(false)}/>
    <Actions isOpen={open} handleClose={() => setOpen(false)} setOpenOP={setOpenOP} setOpenCN={setOpenCN} setOpenAC={setOpenAC} setOpenRN={setOpenRN}/>
    <DataGrid
      style={{zIndex:"0"}}
      getRowId={(row) => row.ID}
      columns={columns}
      rows={data}
      title="ARCO SYSTEM"
    ></DataGrid>
    </>
  );
}

export default Table;
