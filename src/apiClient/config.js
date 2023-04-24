import axios from "axios";

import { Deserializer } from "jsonapi-serializer";

const API_URL = "http://127.0.0.1:3000/api";

const instance = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/vnd.api+json",
  },
});

const deserializer = new Deserializer({ keyForAttribute: "camelCase" });

export { instance, deserializer }