import axios from 'axios';

import { Deserializer, Serializer } from 'jsonapi-serializer'

const API_URL = "http://127.0.0.1:3000/api"

const instance = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: {
    "Content-Type": 'application/vnd.api+json'
  }
});

const getCities = async () => {
  const response = await instance.get("/cities")
  if (!response.data || !response.data) {
    return null
  }
  let r
  // console.log(response.data)
  new Deserializer({ keyForAttribute: 'camelCase' }).deserialize(response.data, function(err, cities) {
    // console.log(cities)
    r = cities
  })
  return r
}

const getCityPrograms = async (cityId) => {
  const response = await instance.get("/cities/"+cityId+"/programs")
  console.log(response)
  if (!response.data) {
    return null
  }
  let r
  await new Deserializer({ keyForAttribute: 'camelCase' }).deserialize(response.data, function(err, cities) {
    r = cities
  })
  return r
}

const createCity = async (data) => {
  const citySerializer = new Serializer("cities", {
    attributes: ['cityName', 'state', 'logoMain']
  })
  const response = await instance.post("cities", citySerializer.serialize(data))
  return response.data
}

const updateCity =  async (id, data) => {
  const citySerializer = new Serializer("cities", {
    attributes: ['cityName', 'state', 'logoMain']
  })
  const response = await instance.patch("cities/"+id, citySerializer.serialize(data))
  return response.data
}

export {
  getCities, 
  getCityPrograms,
  createCity,
  updateCity
}