import { useParams } from "react-router";
import useServiceData from "../../../hooks/useServiceData";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { serviceData } = useServiceData();
  const { serviceid } = useParams();
  const findData = serviceData.find(function (data) {
    return data.id === +serviceid;
  });
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "700px" }}
    >
      <div
        className="container  shadow rounded"
        style={{ backgroundColor: "white", padding: "40px" }}
      >
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="d-flex align-items-center">
              <img
                src={findData?.img}
                alt=""
                width="500px"
                className="align-items-center"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <h4>Name : {findData?.name}</h4>
            <p>Why You Need This : {findData?.detailed_description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
