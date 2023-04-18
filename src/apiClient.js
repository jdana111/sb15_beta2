import axios from 'axios';

import { Deserializer } from 'jsonapi-serializer'

const API_URL = "http://127.0.0.1:3000/api"

const instance = axios.create({
  baseURL: API_URL,
  timeout: 1000,
});

const getCities = async () => {
  const response = await instance.get("/cities")
  if (!response.data || !response.data) {
    return null
  }
  let r
  console.log(response.data)
  new Deserializer({ keyForAttribute: 'camelCase' }).deserialize(response.data, function(err, cities) {
    console.log(cities)
    r = cities
  })
  return r
}

export {
  getCities
}