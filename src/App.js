import React from 'react';
//Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//Containers
import Home from './containers/Home'
import Portfolio from './containers/Portfolio'
import Contact from './containers/Contact'
//Styles
import './styles/index.scss'

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
    </Router>
  );
}

export default App;
