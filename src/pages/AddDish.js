import React, { useState } from 'react';
import '../App.css';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const AddDish = () => {
    let history = useHistory();
    const [dish, setDish] = useState({
      name: "",
      category: "",
      label: "",
      price: "",
      description: "",
      imgUrl: ""
    });
  
  const { name, category, label, price, description, imgUrl } = dish;
  const onInputChange = e => {
    setDish({...dish,[e.target.name]: e.target.value})
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/dishes",dish);
    history.push("/");
  };

  return (
    <div>
      <div className="container">
      <div className="text-center"><h2>Add Dish</h2></div>
      <form onSubmit={e => onSubmit(e)}>
        <div className="w-75 mx-auto">
          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input type="text" className="form-control" name="name" value={name} onChange={e => onInputChange(e)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Category:</label>
            <input type="text" className="form-control" name="category" value={category} onChange={e => onInputChange(e)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Img URL:</label>
            <input type="text" className="form-control" name="imgUrl" value={imgUrl} onChange={e => onInputChange(e)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Price:</label>
            <input type="text" className="form-control" name="price" value={price} onChange={e => onInputChange(e)} />
          </div>
          <div className="mb-3">
              <label className="form-label">Description:</label>
              <textarea className="form-control"rows="3"  name="description" value={description} onChange={e => onInputChange(e)} ></textarea>
          </div>
          <div className="mb-3">
              <button type="submit" className=" form-control btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
  
}

export default AddDish;
