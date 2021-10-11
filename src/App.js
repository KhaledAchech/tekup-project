import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Candidat from './components/pages/Candidat';
import Candidature from './components/pages/Candidature';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}
      <Router>
        <Switch>
        <Route path="/addCandidat">
            <Candidat />
          </Route>
          <Route path="/candidatures">
            <Candidature />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
