import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { useParams } from "react-router-dom";

const SingleDish = () => {
  const [dish, setDish] = useState({
    name: "",
    category: "",
    label: "",
    price: "",
    description: "",
    imgUrl: ""
  });
  
  const { id } = useParams();
  useEffect(() => {
    loadDish();
  }, []);
  
  const loadDish = async () => {
    const result = await axios.get(`http://localhost:3003/dishes/${id}`);
    setDish(result.data);
  };

  
  const [comments, setComments] = useState([]);

  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = async () => {
    const result = await axios.get("http://localhost:3003/comments");
    setComments(result.data.reverse());
  };


  const [com, setCom] = useState({
    author: "",
    com: ""
  });
  
  const onInputChange = e => {
    setCom({...com,[e.target.name]: e.target.value})
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/comments",com);
    window.location.reload();
  };

  return (
    <div className="container mt-3">
      <div className="row g-0">
        <div className="col-6 col-md-4">
          <div className="card" style={{width: "18rem"}}>
            <img src={dish.imgUrl} className="card-img-top" alt="..." style={{height: "18rem"}}/>
              <div className="card-body">
                <div className="row">
                  <h5 className="card-title col text-start">{dish.name}</h5>
                  <h5 className="card-title col text-end">₹{dish.price}/-</h5>
                </div>
                <h6 className="card-subtitle mb-2 text-muted">Category: {dish.category}</h6>
                <p className="card-text">{dish.description}</p>
              </div>
          </div>
        </div>
        <div className="col-md-8">
          <h1>Add a Comment</h1>
          <form onSubmit={e => onSubmit(e)}>
            <div className="mb-3">
              <label className="form-label">Name:</label>
              <input type="text" className="form-control" name="author" value={com.author} onChange={e => onInputChange(e)} />
            </div>
            <div className="mb-3">
              <label className="form-label">Comment:</label>
              <textarea className="form-control" rows="3" name="com" value={com.com} onChange={e => onInputChange(e)} ></textarea>
            </div>
            <div className="mb-3">
              <button type="submit" className=" form-control btn btn-primary">Submit</button>
            </div>
          </form>
          <h3>Comments</h3>
          <div>
            {comments.map((sub) => (
              <div className="card mb-2" key={sub.id}>
                <div className="card-body">
                  <div>Author:  {sub.author}</div>
                  <div>Comment: {sub.com}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleDish;

