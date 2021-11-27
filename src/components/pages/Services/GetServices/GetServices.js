import useServiceData from "../../../../hooks/useServiceData";
import SetServices from "../SetServices/SetServices";

const GetServices = () => {
  const { serviceData } = useServiceData();
  console.log(serviceData);
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">
        {serviceData.map((service) => (
          <SetServices service={service}></SetServices>
        ))}
      </div>
    </div>
  );
};

export default GetServices;
