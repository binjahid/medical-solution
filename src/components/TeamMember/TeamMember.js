import React from "react";

const TeamMember = (props) => {
  const { Name, img, position, description } = props.member;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{Name}</h5>
          <h5 className="card-title">{position}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
