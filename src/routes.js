import React from "react";
import "./index.css";
import Login from './routes/Login'
import CityForm from './routes/cities/CityForm'
import SelectProgram from './routes/cities/SelectProgram'
import ProgramForm from './routes/cities/programs/ProgramForm'
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    redirectTo: '/login', 
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cities/create',
    element: <CityForm />,
  },
  {
    path: '/cities/:cityId/update',
    element: <CityForm />,
  },
  {
    path: '/cities/:cityId/select-program',
    element: <SelectProgram />,
  },
  {
    path: '/cities/:cityId/programs/create',
    element: <ProgramForm />,
  },
  {
    path: '/cities/:cityId/programs/:programId/update',
    element: <ProgramForm />,
  },
]);
export default router