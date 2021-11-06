import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Candidat from './components/pages/Candidat';
import Candidature from './components/pages/Candidature';
import Home from './components/pages/Home'
import AppBarMenu from './components/elements/AppBar';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Theme/theme';
import { Container } from '@material-ui/core';
import { textAlign } from '@mui/system';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div color = {theme.palette.primary.light} >

      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to = "/home"/> 
             <Home/>
          </Route>
        <Route path="/home">
            <Home/>
        </Route> 
        <Route path="/addCandidat">
            <AppBarMenu/>
            <Candidat/>
          </Route>
          <Route path="/candidatures">
             <AppBarMenu/>
             
            <Candidature />
          </Route>
        </Switch>
      </Router>
    </div>
    </ThemeProvider>
  );
}

export default App;
