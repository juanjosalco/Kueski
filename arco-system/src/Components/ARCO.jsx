import React, { useEffect, useState } from "react";

import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

function ARCO() {
  const [data, setData] = useState([]);

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
        };
        return <Button onClick={openView}>VIEW</Button>;
        },
    },
  ];

  return (
    <DataGrid
      getRowId={(row) => row.ARCO_ID}
      columns={columns}
      rows={data}
      title="ARCO SYSTEM"
    ></DataGrid>
  );
}

export default ARCO;
