
import { instance, deserializer } from './config'
import { Serializer } from "jsonapi-serializer";

const getCities = async () => {
  try {
    const response = await instance.get("/cities/");
    const cities = await deserializer.deserialize(response.data);
    return cities;
  } catch (error) {
    throw new Error("Unable to fetch cities.");
  }
};

const getCityPrograms = async (cityId) => {
  try {
    const response = await instance.get("/cities/" + cityId + "/programs");
    const programs = await deserializer.deserialize(response.data);
    return programs;
  } catch (error) {
    throw new Error(`Unable to fetch programs associated with ${cityId}.`);
  }
};

const createCity = async (data) => {
  const citySerializer = new Serializer("cities", {
    attributes: ["cityName", "state", "logoMain"],
  });
  const response = await instance.post(
    "cities",
    citySerializer.serialize(data)
  );
  return response.data;
};

const updateCity = async (id, data) => {
  const citySerializer = new Serializer("cities", {
    attributes: ["cityName", "state", "logoMain"],
  });
  const response = await instance.patch(
    "cities/" + id,
    citySerializer.serialize(data)
  );
  return response.data;
};

export { getCities, getCityPrograms, createCity, updateCity };
