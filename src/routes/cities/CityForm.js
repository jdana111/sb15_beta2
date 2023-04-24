import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getCities,
  getCityPrograms,
  createCity,
  updateCity,
} from '../../apiClient/cities';


const handleCreate = () => {
  createCity({
    "cityName": 'jazzercise',
    "state": 'CO',
    logoMain: 'asdf',
    createdBy: 'me',
    updatedBy: 'me'
  })
}

const handleUpdate = () => {
  updateCity(1, {
    "id": 1,
    "cityName": 'jazzercise'+new Date().getSeconds(),
  })
}

const CityForm = () => {
  const [cities, setCities] = useState([]);
  const { cityId } = useParams();
  useEffect(() => {
    console.log("cityId =", cityId);
    getCities().then((cities) => {
      setCities(cities);
    });
    getCityPrograms(1).then((p) => {
      console.log("cp", p);
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
