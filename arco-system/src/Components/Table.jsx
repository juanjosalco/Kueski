import React, { useEffect, useState } from "react";

import { Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

function Table() {
  const [data, setData] = useState([]);

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
      cell: (row) => {
        return <div>{new Date(row.BIRTH_DATE).toLocaleDateString()}</div>;
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
        const handleDeleteClick = () => {
          // Handle delete button click here
        };

        return <Button onClick={handleDeleteClick}>ACCIONES</Button>;
      },
    },
  ];

  return (
    <DataGrid
      getRowId={(row) => row.ID}
      columns={columns}
      rows={data}
      title="ARCO SYSTEM"
    ></DataGrid>
  );
}

export default Table;
