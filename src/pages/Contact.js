import React, { useState } from 'react';
import '../App.css';
import {useHistory} from 'react-router-dom';
import axios from 'axios';


function Contact() {

  let history = useHistory();
    const [contact, setContact] = useState({
      name: "",
      email: "",
      reason: ""
    });
  
  const onInputChange = e => {
    setContact({...contact,[e.target.name]: e.target.value})
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/contacted",contact);
    history.push("/");
  };


  return (
    <div className="container">
      <div className="text-center"><h1>Contact Us</h1></div>
      <div className="w-75 mx-auto">
        <form onSubmit={e => onSubmit(e)}>
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input type="text" className="form-control" name="name" value={contact.name} onChange={e => onInputChange(e)}/>
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input type="text" className="form-control" name="email" value={contact.email} onChange={e => onInputChange(e)}/>
          </div>
          <div className="mb-3">
              <label className="form-label">Why do yoy want to contact us ?</label>
              <textarea className="form-control" rows="3" name="reason" value={contact.reason} onChange={e => onInputChange(e)}></textarea>
          </div>
          <div className="mb-3">
              <button type="submit" className="form-control btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
