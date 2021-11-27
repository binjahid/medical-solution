import React from "react";
import "./Team.css";
const Team = () => {
  return (
    <div>
      <div className="team-image-container position-relative">
        <div className="team-description  position-absolute">
          <p className="text-center team-description-title">Medical Solution</p>
          <h2 className="text-center team-description-slogun">
            Specialized Team
          </h2>
          <p className="team-main-description">
            We are a team of dentists, hygienists and receptionists who work
            together to ensure that you receive the best treatment that you
            require at a very time that suits you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
