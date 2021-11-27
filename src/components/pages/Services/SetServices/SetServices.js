import React from "react";
import HomePageService from "../../../HomePageService/HomePageService";

const SetServices = (props) => {
  return (
    <div>
      <HomePageService service={props.service}></HomePageService>
    </div>
  );
};

export default SetServices;
