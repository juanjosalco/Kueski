import React, { useEffect, useState } from "react";
import ModalSolicitud from "./ModalSolicitud";

import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({

}));
function ARCO() {
  const [data, setData] = useState([]);
  const [modalID, setModalID] = useState(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    fetch("/api/arco")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const columns = [
    { field: "ARCO_ID", headerName: "ARCO_ID", flex: 1, align: "center" ,sortable: true,},
    { field: "F_NAME", headerName: "Nombre", flex: 1, align: "center", sortable: true,},
    { field: "LNAME1", headerName: "Appellido", flex: 1, align: "center" ,sortable: true,},
    { field: "EMAIL", headerName: "Email", flex: 1, align: "center" ,sortable: true,},
    { field: "DERECHO", headerName: "Derecho", flex: 1, align: "center" ,sortable: true,},
    {field: "FECHA_RESUELTA",
      headerName: "F.Resuelta",
        sortable: true,
        flex: 2,
        align: "center",
        renderCell: (params) => {
          const date = params.row.FECHA_RESUELTA.split("T")[0].split("-");
          const newDate = `${date[2]}/${date[1]}/${date[0]}`;
          return <div>{newDate}</div>;
        },
        },
    {
        field: "ARCO",
        headerName: "ARCO",
        width: 150,
        align: "center",
        renderCell: (params) => {
        const openView = () => {
            console.log(params.row.ARCO_ID);
            setModalID(params.row.ARCO_ID);
            setOpen(true);
        };
        return <Button onClick={openView}>VIEW</Button>;
        },
    },
  ];
  return(
    <>
      <ModalSolicitud id={modalID} isOpen={open} handleClose={() => setOpen(false)} />
      <Box style={{width: '100%'}}>
        <DataGrid
          getRowId={(row) => row.ARCO_ID}
          columns={columns}
          rows={data}
          title="ARCO SYSTEM"
          ></DataGrid>
      </Box>
    </>
  );
}

export default ARCO;
