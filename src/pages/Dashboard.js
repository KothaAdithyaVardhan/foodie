import React,{useState,useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';

function Dashboard() {

  const [dishes, setDish] = useState([]);

  useEffect(() => {
    loadDetails();
  }, []);

  const loadDetails = async () => {
    const result = await axios.get("http://localhost:3003/dishes");
    setDish(result.data);
  };

  return (
    <div className="mt-3 container">
      {dishes.map((detail) => {
        return(
          <div key={detail.id}>
            
              <div className="card mb-3 p-2">
                <div className="row g-0">
                  <div className="col-md-4" style={{height: "300px", width: "300px"}}>
                    <img src={detail.imgUrl} alt="..." className="h-100 w-100"/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h2 className="card-title">{detail.name}</h2>
                      <h6>Category: {detail.category}</h6>
                      <p className="card-text">{detail.description}</p>
                      <h5>Price: ₹{detail.price}/-</h5>
                      <Link to={`/SingleDish/${detail.id}`}><h3 className="text-end btn btn-primary">View in Detail</h3></Link>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        )
      })}
    </div>
  );
}

export default Dashboard;
