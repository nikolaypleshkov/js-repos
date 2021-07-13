import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Voting from './components/Voting';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="voting">
            <Voting />
          </Route>
          <Route exact path='/'>
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
