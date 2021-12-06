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
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { InputLabel } from '@material-ui/core';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import theme from '../../Theme/theme';
import { ThemeProvider } from '@material-ui/styles';
import axios from "axios";


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

function createData(name, universityName,universityYear, academicBackground, Status) {
  return { name, universityName, universityYear, academicBackground, Status };
}



const rows = [
  createData('Syrine Nasr', 'TEK-UP', '2019-2020', '1ère ingénierie + licence', 'accepté'),
];


  const [academicBackground, setAcademicBackground] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [universityYear, setUniversityYear] = useState("");
  const [errorUniversity, setErrorUniversity] = useState("");
  const [errorUniversityYear, setErrorUniversityYear] = useState("");
  const [errorUniversityParcours, setErrorUniversityParcours] = useState("");

  //test
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setAcademicBackground(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
    //   CandidatureId = models.AutoField(primary_key=True)
    // UniversityName = models.CharField(max_length=500)
    // UniversityYear = models.CharField(max_length=500)
    // AcademicBackground = models.CharField(max_length=500)
    // Relev1 = models.CharField(max_length=500)
    // Relev2 = models.CharField(max_length=500)
    // Status = models.CharField(max_length=500)
    // Score = models.CharField(max_length=500)
   const initialCandidatureState = {
        CandidatureId: null,
        UniversityName: "",
        UniversityYear: "",
        AcademicBackground: "",
        Relev1: "",
        Relev2: "",
        Status: "en cours",
        Score : "0%"
      };
      const [candidature, setCandidature] = useState(initialCandidatureState);
      const [submitted, setSubmitted] = useState(false);
      const [shown, setShown] = useState(false);
      const handlCandidatureChange = (e) => {
        const { UniversityName, value } = e.target;
        setCandidature({ ...candidature, [UniversityName]: value });
      };
   const submitCandidature = () => {
        let data = {
          UniversityName: universityName,
          UniversityYear : universityYear,
          AcademicBackground : academicBackground,
          Relev1 : "Relev 1 ",
          Relev2 : "Relev 2 ",
          Status: "en cours",
          Score : "0%"
        };
        //console.log(data)

        //validation : 
        if (!universityName){
          setErrorUniversity("Nom de l'université est un champs obligatoire.")
          return;
        }
        if (!universityYear){
          setErrorUniversityYear("L'année universitaire est un champs obligatoire.")
          return;
        }
        if (!academicBackground){
          setErrorUniversityParcours("Parcours universitaire est un champs obligatoire.")
          return;
        }
        axios
          .post("http://127.0.0.1:8000/candidature", data)
          .then((response) => {
            setCandidature({
              CandidatureId: response.data.CandidatureId,
              UniversityName: response.data.UniversityName,
              UniversityYear: response.data.UniversityYear,
              AcademicBackground: response.data.AcademicBackground,
              Relev1: response.data.Relev1,
              Relev2: response.data.Relev2,
              Status: response.data.Status,
              Score : response.data.score,
            });
            setSubmitted(true);
            setShown(false);
            console.log(response.data);
          })
          .catch((e) => {
            console.error(e);
          });
      };
      const newCandidature = () => {
        setShown(true);
        setUniversityName("")
        setUniversityYear("")
        setAcademicBackground("")
        setErrorUniversityParcours("")
        setErrorUniversityYear("")
        setErrorUniversity("")
        // Relev1 = "Relev 1 "
        // Relev2 = "Relev 2 "
        // Status = "en cours"
        // Score  = "0%"
        setCandidature(initialCandidatureState);
        setSubmitted(false);
      };
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Ajouter une candidature : 
        </Typography>
        {
          submitted || !shown ? (
            <div>
              {
              submitted ? (
              <div>
                <Typography> Candidature Sauvegarder ! </Typography>
              </div> ) : ( <div> </div>) }
              <Button onClick={newCandidature} color="primary">
                Créer une nouvelle candidature ^^ .
              </Button>
              <div>
      {
        submitted ? (
          <div>
          <span>
          Status de votre candidature : 
          </span>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nom</TableCell>
            <TableCell align="right">Nom de l'université</TableCell>
            <TableCell align="right">Année universitaire</TableCell>
            <TableCell align="right">Parcours universitaire</TableCell>
            <TableCell align="right">status</TableCell>
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
              <TableCell align="right">{row.universityName}</TableCell>
              <TableCell align="right">{row.universityYear}</TableCell>
              <TableCell align="right">{row.academicBackground}</TableCell>
              <TableCell align="right">{row.Status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
        ) : ( <div> </div> ) 
      }
    </div>
    </div>
          ) : 
          (
        <form className={classes.form} noValidate action="#" encType="multipart/form-data">
       
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="UniversityName"
            label="Nom de l'université"
            name="UniversityName"
            required
            value = {universityName}
            onChange = { (e) => {
              setUniversityName(e.target.value);
              setErrorUniversity("");
            }}
            autoComplete="Nom de l'université"
          />
          <div style = {{color:"red"}}>{errorUniversity}</div>
 {/* <DatePicker
        views={["year"]}
        label="Year only"
        value={selectedDate}
        onChange={handleDateChange}
      /> */}
      <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="UniversityYear"
            label="Année universitaire"
            name="UniversityYear"
            value = {universityYear}
            onChange = { (e) => {
              setUniversityYear(e.target.value);
              setErrorUniversityYear("");
            }
          }
            autoComplete="Année universitaire"
          />
           <div style = {{color:"red"}}>{errorUniversityYear}</div>
           <FormControl sx={{ m: 1, width: 850, mt: 3 }}>
           <InputLabel id="demo-simple-select-label">Parcours universitaire* : </InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="AcademicBackground"
    // value={candidature.AcademicBackground}
    onChange={ (e) => {
      setAcademicBackground(e.target.value);
      setErrorUniversityParcours("");
    }
    }
    input={<OutlinedInput label="Tag" />}
  >
    <MenuItem value="1ère ingénierie + licence">1ère ingénierie + licence</MenuItem>
    <MenuItem value="1ère master + licence">1ère master + licence</MenuItem>
    <MenuItem value="1ère ingénierie + prepa">1ère ingénierie + prepa</MenuItem>
  </Select>
  <div style = {{color:"red"}}>{errorUniversityParcours}</div>
  </FormControl>
           <IconButton aria-label="Téléchargez votre logo"
          color="primary"
          variant="contained"
          component="label"
        >
          <FaIcons.FaFileUpload/>
        <input
          accept="file/*"
          type="file"
          name = "Relev1"
          hidden
          id = "Relev1"
          required
          onChange={handlCandidatureChange}
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
         accept="file/*"
          type="file"
          name = "Relev2"
          hidden
          id = "Relev2"
          required
          onChange={handlCandidatureChange}
        />
          Télécharger votre 2éme relevé
        </IconButton>
          <div>
          <Button
            variant="contained"
            color="primary"
            onClick = {submitCandidature}
            className={classes.submit}
            >
            Sauvegarder
          </Button>
          <Button
            type="cancel"
            variant="contained"
            color="secondary"
            className={classes.cancel}
            onClick = {newCandidature}
          >
            Annuler
          </Button>
          </div>
        </form>
         )}
      </div>
    </Container>
    </ThemeProvider>
  );
}
