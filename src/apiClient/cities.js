
import { instance, deserializer } from './config'
import { Serializer } from "jsonapi-serializer";

const citySerializer = new Serializer("cities", {
  attributes: ["cityName", "state", "logoMain"],
});

const getCities = async () => {
  try {
    const response = await instance.get("/cities/");
    const cities = await deserializer.deserialize(response.data);
    return cities;
  } catch (error) {
    console.error(error);
    throw new Error("Unable to fetch cities.");
  }
};

const getCityPrograms = async (cityId) => {
  try {
    const response = await instance.get("/cities/" + cityId + "/programs");
    const programs = await deserializer.deserialize(response.data);
    return programs;
  } catch (error) {
    console.error(error);
    throw new Error(`Unable to fetch programs associated with ${cityId}.`);
  }
};

const createCity = async (data) => {
  try {
    const serializedData = await citySerializer.serialize(data);
    const response = await instance.post("cities", serializedData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Unable to create city");
  }
};

const updateCity = async (cityId, data) => {
  try {
    const serializedData = await citySerializer.serialize(data);
    const response = await instance.patch("cities/" + cityId, serializedData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Unable to update city");
  }
};

export { getCities, getCityPrograms, createCity, updateCity };
