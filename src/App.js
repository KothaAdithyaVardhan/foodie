import React from 'react';
import './App.css';
import Nav from './pages/Nav';
import AddDish from './pages/AddDish';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import SingleDish from './pages/SingleDish';
import Contacted from './pages/Contacted';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/about" component={About} />
          <Route exact path="/admin/adddish" component={AddDish} />
          <Route exact path="/admin/contacted" component={Contacted} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/SingleDish/:id" component={SingleDish} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
