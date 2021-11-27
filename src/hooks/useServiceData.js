import { useEffect, useState } from "react";

const useServiceData = () => {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  }, []);
  return { serviceData };
};

export default useServiceData;
