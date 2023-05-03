import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { getCity, createCity, updateCity, getCityPrograms } from "../../apiClient/cities";
import { get, useForm } from "react-hook-form";
import { AppDataContext } from "data";

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
    return await getCity(cityId);
  } else {
    return {};
  }
};

const CityForm = () => {
  const contextState = useContext(AppDataContext)

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
      this many programs: {contextState.state.programs ? contextState.state.programs.length : 0}
    </div>
  );
};

export default CityForm;
