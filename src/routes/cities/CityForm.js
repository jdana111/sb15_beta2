import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCity, createCity, updateCity } from "../../apiClient/cities";

const handleCreate = () => {
  createCity({
    cityName: "jazzercise",
    state: "CO",
    logoMain: "asdf",
    createdBy: "me",
    updatedBy: "me",
  });
};

const handleUpdate = () => {
  updateCity(1, {
    id: 1,
    cityName: "jazzercise" + new Date().getSeconds(),
  });
};

const CityForm = () => {
  const [city, setCity] = useState([]);
  const { cityId } = useParams();
  useEffect(() => {
    console.log("cityId =", cityId);
    getCity(cityId).then((city) => {
      setCity(city);
    });
  }, []);

  return (
    <div>
      <h1>City Form</h1>
      <input type="button" value="create" onClick={handleCreate} />
      <input type="button" value="update" onClick={handleUpdate} />
    </div>
  );
};

export default CityForm;
