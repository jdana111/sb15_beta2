import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from './routes'
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { ApiClient, ApiProvider } from 'jsonapi-react'
// import schema from './schema'
 
// QQ Take a look at my configuration for react-router-dom and jsonapi-react. I think I got it. 
// QQ I dropped the router in a separate route.js file to clean up index.js. 
// QQ I changed the apiUrl. I also toggled React.js to "serve" port 3001 rather than 3000 using an .env file.
// QQ Presumably, I'll need to add some dynamic functionality to tweak the apiUrl based on the environment (dev, staging, prod). 
const client = new ApiClient({
  url: 'http://127.0.0.1:3000/api',
  schema: {}
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApiProvider client={client}>
      <RouterProvider router={router} />
    </ApiProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
