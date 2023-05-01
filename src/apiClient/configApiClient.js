import axios from "axios";

import { Deserializer } from "jsonapi-serializer";

// NATHO did this.
// a) What does the single vertical bar mean?
// b) process.env.API_URL is pulling a URL with a port of 3001 from SOMEWHERE. 
// const API_URL = process.env.API_URL | "http://127.0.0.1:3000/api";
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