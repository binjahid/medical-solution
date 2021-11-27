import React, { useEffect, useState } from "react";
import HomePageService from "../HomePageService/HomePageService";

const HomePageSevices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./home-services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container mt-5">
      <p className="team-title mt-5">Our Services</p>
      <div class="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">
        {services.map((service) => (
          <HomePageService service={service}></HomePageService>
        ))}
      </div>
    </div>
  );
};

export default HomePageSevices;
