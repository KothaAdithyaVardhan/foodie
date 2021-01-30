import React from 'react';
import '../App.css';

function About() {
  return (
    <div className="container mt-5">
      <div className="w-75 mx-auto">
        <p style={{color: "#007bff"}}>
          This is version 1.0.0 of Foodie application where users can check the menu, comment over a dish, and many more...
          </p>
        <label>licensed by author adithya</label>
      </div>
    </div>
  );
}

export default About;
