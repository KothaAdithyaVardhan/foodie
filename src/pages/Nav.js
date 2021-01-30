import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <h3 className="navbar-header fw-bold" style={{color: "#0000FF"}}>Foodie</h3>
        <ul className="nav justify-content-end">
            <Link to="/"><li className="nav-item nav-link">Home</li></Link>
            {/*<Link to="/admin/adddish"><li className="nav-item nav-link">Add Dish</li></Link>
            <Link to="/admin/contacted"><li className="nav-item nav-link">Contacted</li></Link>*/}
            <Link to="/about"><li className="nav-item nav-link">About</li></Link>
            <Link to="/contact"><li className="nav-item nav-link">Contact Us</li></Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
