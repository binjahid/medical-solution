import React from "react";
import { Link } from "react-router-dom";

const HomePageService = (props) => {
  const { id, name, img, short_description } = props.service;
  return (
    <div>
      <div className="col">
        <div className="card h-100">
          <img src={img} className="card-img-top" alt="..." height="300px" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{short_description}</p>
            <Link to={`/service-details/${id}`}>
              <button className="btn btn-primary">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageService;
