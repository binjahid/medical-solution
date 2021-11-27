import React from "react";
import "./AbouyUs.css";
import AboutSection from "../../AboutSection/AboutSection";
const AboutUS = () => {
  const img2 =
    "https://st.depositphotos.com/1010613/2860/i/950/depositphotos_28608447-stock-photo-male-doctor-in-front-of.jpg";
  const displayFlex = "custom-flex";
  return (
    <div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-6 col-lg-6">
            <div className="d-flex justify-content-center">
              <img
                src={`http://denthemes.com/themes/wp/viscareo/wp-content/uploads/2021/03/about-img-1.jpg`}
                height="450px"
                width="404px"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-6">
            <div className="d-flex justify-content-start align-items-center">
              <img
                src={
                  "http://denthemes.com/themes/wp/viscareo/wp-content/uploads/2021/03/icon-1.svg"
                }
                width="45px"
                alt=""
              />
              <p className="who-are-we-title">Who We Are</p>
            </div>
            <div className="col-md-12 col-lg-12">
              <p className="who-are-we-slogun">
                We are Achieve the Success of Treatment
              </p>
            </div>
            <div className="col-md-12 col-lg-12">
              <p className="who-are-we-description">
                As a committed team, we work in Berlin-Mitte. We treat the whole
                spectrum of skin and venereal diseases, perform out-patient
                surgeries, and provide UV therapy and allergy tests and
                treatments. An additional focus of our practice is cosmetic
                medicine with acne treatment, fruit acid peelings and the
                treatment of fine lines and wrinkles.
              </p>
            </div>
          </div>
        </div>
        {/* Patient Section */}
        <div>
          <div className="mt-5">
            <AboutSection img={img2}>Who We Are</AboutSection>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
