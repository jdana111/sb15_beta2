import { instance } from "./configApiClient";
import { Serializer } from "jsonapi-serializer";
import abstractApiCall from "./abstractApiClient";

const citySerializer = new Serializer("cities", {
  attributes: ["cityName", "state", "logoMain"],
});

const getCity = async (cityId) => {
  return abstractApiCall('get', `/cities/${cityId}`);
};

const getCities = async () => {
  return await abstractApiCall('get', '/cities');
};

const getCityPrograms = async (cityId) => {
  try {
    return await abstractApiCall('get', `/cities/${cityId}/programs`);
  } catch {
    console.log('imp catch')
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
    throw new Error(`Unable to update city.id = ${cityId}.`);
  }
};

export { getCity, getCities, getCityPrograms, createCity, updateCity };
