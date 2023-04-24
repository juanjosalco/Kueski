import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const options = [
  { label: 'ID', value: 'ID' },
  { label: 'Nombre', value: 'Name' },
  { label: 'F. Nacimiento', value: 'F._Birth' },
  { label: 'Nacionalidad', value: 'Nationality' },
  { label: 'Estado', value: 'State' },
  { label: 'Ocupacion', value: 'Occupation' },
  { label: 'CURP', value: 'CURP' },
];

const useStyles = makeStyles((theme) => ({
    appbar:{
        backgroundColor: '#bde9f0'
    }
}));

const DropdownFilter = () => {
    const classes = useStyles();

  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
     <Box sx={{ 
      minWidth: 80,
    //   borderRadius: 1.5,
    //   border: "medium solid",
    }}
     > 

      <Select className = {classes.appbar} value={selectedOption} onChange={handleChange} displayEmpty>
        <MenuItem value="">Filtrar</MenuItem>
        {options.map(({ label, value }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
     </Box>
  );
};

export default DropdownFilter;
