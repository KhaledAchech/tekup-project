import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

import Candidat from './components/pages/Candidat';
import Candidature from './components/pages/Candidature';
import Home from './components/pages/Home'
import AppBarMenu from './components/elements/AppBar';

function App() {
  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to = "/home"/> 
             <Home/>
          </Route>
        <Route  path="/home">
            <Home/>
        </Route> 
        <Route path="/addCandidat">
            <AppBarMenu/>
            <Candidat />
          </Route>
          <Route path="/candidatures">
             <AppBarMenu/>
            <Candidature />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
