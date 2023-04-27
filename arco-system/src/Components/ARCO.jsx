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

//   CREATE TABLE `USERS` (
// 	`ID` smallint NOT NULL AUTO_INCREMENT,
// 	`ADDRESS_ID` smallint NOT NULL,
// 	`F_NAME` varchar(15),
// 	`LNAME1` varchar(15),
// 	`LNAME2` varchar(15),
// 	`BIRTH_DATE` date,
// 	`NATIONALITY` varchar(64),
// 	`STATE_BORN_IN` varchar(64),
// 	`OCCUPATION` varchar(64),
// 	`CURP` varchar(18),
// 	`GENDER` varchar(15),
// 	`PHONE_NUMBER` varchar(20),
// 	`EMAIL` varchar(64),
// 	`RFC` varchar(13),
// 	`IS_CLIENT` tinyint(1),
// 	`IS_BLOCKED` tinyint(1),
// 	`CREATED_AT` datetime,
// 	`UPDATED_AT` datetime,
// 	`DELETED_AT` datetime,
// 	PRIMARY KEY (`ID`),
// 	KEY `ADDRESS_ID` (`ADDRESS_ID`)
// ) ENGINE InnoDB,
//   CHARSET utf8mb4,
//   COLLATE utf8mb4_0900_ai_ci;
  const columns = [
    { field: "ARCO_ID", headerName: "ID", flex: 1, align: "center" },
    { field: "USER_ID", headerName: "ID", flex: 1, align: "center" },
    { field: "F_NAME", headerName: "Nombre", flex: 1, align: "center" },
    { field: "LNAME1", headerName: "Appellido", flex: 1, align: "center" },
    { field: "EMAIL", headerName: "Email", flex: 1, align: "center" },
    { field: "DERECHO", headerName: "Derecho", flex: 1, align: "center" },
    {
        headerName: "F.Resuelta",
        field: "FECHA_RESUELTA",
        sortable: true,
        flex: 2,
        align: "center",
        renderCell: (params) => {
            <div>{new Date(params.row.FECHA_RESUELTA).toLocaleDateString()}</div>
        },
        },
    {
        field: "ARCO",
        headerName: "ARCO",
        width: 150,
        align: "center",
        renderCell: (params) => {
        const openView = () => {
            // Handle delete button click here
            console.log(params.row.ARCO_ID);
        };
        return <Button onClick={openView}>VIEW</Button>;
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

export default ARCO;
