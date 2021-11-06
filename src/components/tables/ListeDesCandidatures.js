import * as React from 'react';
import { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as FaIcons from "react-icons/fa";
import { InputLabel } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import axios from "axios";

function createData(name, taux,status) {
  return { name, taux, status };
}



const rows = [
  createData('Eya Harbaoui', '80%', 'en cours'),
  createData('Khaled Achech', '80%', 'en cours'),
  createData('Syrine Nasr', '80%', 'en cours'),

];

export default function ListeDesCandidatures() {
    const [personName, setPersonName] = React.useState([]);
    const [candidatures, setCandidatures] = useState([]);

const handleChange = (event) => {
  const {
    target: { value },
  } = event;
  setPersonName(
    // On autofill we get a the stringified value.
    typeof value === 'string' ? value.split(',') : value,
  );
};
  return (
      <div>
      <span>
          La liste des candidatures : 
          </span>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell align="right">Relevé 1</TableCell>
            <TableCell align="right">Relevé 2</TableCell>
            <TableCell align="right">Taux d'acceptation</TableCell>
            <TableCell align="right">Changer le status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right"><FaIcons.FaFile></FaIcons.FaFile></TableCell>
              <TableCell align="right"><FaIcons.FaFile></FaIcons.FaFile></TableCell>
              <TableCell align="right">{row.taux}</TableCell>
              <TableCell align="right">
              <FormControl sx={{ m: 1, width: 250, mt: 3 }}>
           <InputLabel id="demo-simple-select-label">Status : </InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    onChange={handleChange}
    input={<OutlinedInput label="Tag" />}
  >
    <MenuItem value={10}>en cours</MenuItem>
    <MenuItem value={20}>annulé</MenuItem>
    <MenuItem value={30}>refusé</MenuItem>
    <MenuItem value={30}>accepté</MenuItem>
  </Select>
  </FormControl>
                </TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}