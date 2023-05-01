import { instance, deserializer } from "./config";
import { Serializer } from "jsonapi-serializer";
import abstractApiCall from "./abstractApiClient";
import { EmptyResponseError } from "errors/customErrors";

const citySerializer = new Serializer("cities", {
  attributes: ["cityName", "state", "logoMain"],
});

const getCity = async (cityId) => {
  try {
    const response = await instance.get(`/cities/${cityId}`);
    const cities = await deserializer.deserialize(response.data);
    return cities;
  } catch (error) {
    console.error(error);
    throw new Error(`Unable to retrieve city.id = ${cityId}.`);
  }
};

// const getCities = async () => {
//   try {
//     const response = await instance.get("/cities/");
//     const cities = await deserializer.deserialize(response.data);
//     return cities;
//   } catch (error) {
//     console.error(error);
//     throw new Error("Unable to retrieve cities.");
//   }
// };

const getCities = async () => {
  return abstractApiCall('get', '/cities', 'city');
};

const getCityPrograms = async (cityId) => {
  return abstractApiCall('get', `/cities/${cityId}/programs`, 'city');
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
    throw new Error(`Unable to update city.id = ${cityId}.`);
  }
};

export { getCity, getCities, getCityPrograms, createCity, updateCity };
