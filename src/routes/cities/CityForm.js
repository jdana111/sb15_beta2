import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { createCity, getCities, updateCity, getCityPrograms } from "../../apiClient";

const CityForm = () => {
  const [cities, setCities] = useState([])
  const { cityId } = useParams();
  useEffect(() => {
    console.log('cityId =', cityId)
    getCities().then(cities => {
      setCities(cities)
    })
    getCityPrograms(1).then((p) => {
      console.log("cp", p)
    })
  }, [])

  return (
    <div>
      <h1>City Form</h1>
    </div>
  );
 
}


export default CityForm;