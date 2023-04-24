import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCity, createCity, updateCity } from "../../apiClient/cities";
import { useForm } from "react-hook-form";

const handleCreate = () => {
  createCity({
    cityName: "jazzercise",
    state: "CO",
    logoMain: "asdf",
    createdBy: "me",
    updatedBy: "me",
  });
};

const submitForm = (data) => {
  if (data.id) {
    updateCity(1, data);
  } else {
    createCity({
      cityName: "jazzercise",
      state: "CO",
      logoMain: "asdf",
      createdBy: "me",
      updatedBy: "me",
      ...data,
    });
  }
};

const initCityFormData = async (cityId) => {
  if (cityId) {
    console.log(cityId);
    return getCity(cityId);
  } else {
    return {};
  }
};

const CityForm = () => {
  const [city, setCity] = useState([]);
  const { cityId } = useParams();
  const { register, handleSubmit } = useForm({
    defaultValues: () => initCityFormData(cityId),
  });

  return (
    <div>
      <h1>City Form</h1>
      {/* <input type="button" value="create" onClick={handleCreate} />
      <input type="button" value="update" onClick={handleUpdate} /> */}
      <input {...register("cityName")} />
      <button type="button" onClick={handleSubmit(submitForm)}>
        submit
      </button>
    </div>
  );
};

export default CityForm;
