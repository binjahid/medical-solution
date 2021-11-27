import React from "react";
import "./HomeAppoinment.css";
import formLogo from "../../images/form-image/img-booking.png";
const HomeAppoinment = () => {
  return (
    <div className="home-appointment-container container d-flex position-relative">
      <div className="appoint-description d-flex blockquote align-items-center position-absolute shadow rounded">
        <blockquote>
          My family trusts Dr Fischer completely, he’s been with us for years
          and as helped us on numerous occasions
        </blockquote>
      </div>
      <div className="appoinmentForm position-absolute shadow rounded">
        <div className="container">
          <p className="w-50 m-auto text-center mt-5 form-title">
            Book Your Appointment
          </p>
          <hr />
          <div className="row">
            <div className="col-md-7">
              <img className=" formimage" src={formLogo} alt="" />
            </div>
            <div className="col-md-5 main-form"></div>
          </div>
        </div>
      </div>
    </div>
    // {
    //   /* <div className="container">
    //   <div className="row g-0">
    //     <div className="col-md-4 appoint-description d-flex justift-content-center align-items-center">
    //       <blockquote>
    //         My family trusts Dr Fischer completely, he’s been with us for years
    //         and as helped us on numerous occasions
    //       </blockquote>
    //     </div>
    //     <div className="col-md-8 appoinmentForm ">hi i am seven</div>
    //   </div>
    // </div> */
    // }
  );
};

export default HomeAppoinment;
