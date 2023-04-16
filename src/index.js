import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from './routes/Login'
import CreateCity from './routes/cities/Create'
import UpdateCity from './routes/cities/Update'
import SelectProgram from './routes/cities/SelectProgram'
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// QQ: Natho, 
const router = createBrowserRouter([
  {
    path: '/',
    redirectTo: '/login',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cities/create',
    element: <CreateCity />,
  },
  {
    path: '/cities/:cityId/Update',
    element: <UpdateCity />,
  },
  {
    path: '/cities/:cityId',
    element: <SelectProgram />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
