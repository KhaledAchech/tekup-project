import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Add from '@material-ui/icons/Cake';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { IconButton } from '@material-ui/core';
import * as FaIcons from "react-icons/fa";
import { InputLabel } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';


// import DatePicker from '@material-ui/pickers'; 


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    marginLeft : theme.spacing(15),
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '863px',
    height: '340px',
    top: '323px',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    borderRadius: '50px',
    width: '30%',
  },
  cancel: {
    margin: theme.spacing(2, 0, 2, 2),
    borderRadius: '50px',
    width: '30%',
  },
}));

export default function AddCandidat() {
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Ajouter une candidature : 
        </Typography>
        <form className={classes.form} noValidate action="#" encType="multipart/form-data">
       
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="pastryType"
            label="Nom de l'université"
            name="pastryType"
            autoComplete="Nom de l'université"
          />
 {/* <DatePicker
        views={["year"]}
        label="Year only"
        value={selectedDate}
        onChange={handleDateChange}
      /> */}
      <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="pastryType"
            label="Année universitaire"
            name="pastryType"
            autoComplete="Année universitaire"
          />
           
           <FormControl sx={{ m: 1, width: 850, mt: 3 }}>
           <InputLabel id="demo-simple-select-label">Parcours universitaire : </InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={personName}
    onChange={handleChange}
    input={<OutlinedInput label="Tag" />}
  >
    <MenuItem value={10}>1ère ingénierie + licence</MenuItem>
    <MenuItem value={20}>1ère master + licence</MenuItem>
    <MenuItem value={30}>1ère ingénierie + prepa</MenuItem>
  </Select>
  </FormControl>
           <IconButton aria-label="Téléchargez votre logo"
          color="primary"
          variant="contained"
          component="label"
        >
          <FaIcons.FaFileUpload/>
        <input
          accept="image/*"
          type="file"
          name = "icon"
          hidden
          id = "icon"
        />
          Télécharger votre 1er relevé
        </IconButton>
        <IconButton aria-label="Téléchargez votre logo"
          color="primary"
          variant="contained"
          component="label"
        >
          <FaIcons.FaFileUpload/>
        <input
          accept="image/*"
          type="file"
          name = "icon"
          hidden
          id = "icon"
        />
          Télécharger votre 2éme relevé
        </IconButton>
          <div>
          <Button
            variant="contained"
            color="primary"
            className={classes.submit}
            >
            Sauvegarder
          </Button>
          <Button
            type="cancel"
            variant="contained"
            color="secondary"
            className={classes.cancel}
          >
            Annuler
          </Button>
          </div>
        </form>
      </div>
    </Container>
  );
}
