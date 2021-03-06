import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NotFound from './components/NotFound/NotFound';
import CountryDetails from './components/CountryDetails/CountryDetails';

function App() {
  return (
    <div>

      <Router>

        <Switch>

          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route path='/country/:countryName'>
           <CountryDetails></CountryDetails>
          </Route>

          <Route exact path='/'>
            <Home></Home>
          </Route>
          
          <Route path='*'>
            <NotFound></NotFound>
          </Route>

        </Switch>

      </Router>

    </div>
  );
}

export default App;
