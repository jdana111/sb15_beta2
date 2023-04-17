import React from "react";
import "./index.css";
import Login from './routes/Login'
import CityForm from './routes/cities/CityForm'
import SelectProgram from './routes/cities/SelectProgram'
import ProgramForm from './routes/cities/programs/ProgramForm'
import { createBrowserRouter } from "react-router-dom";

// QQS:  ASSIGNMENT 1: Take a look at src/routes.js. (index.js uses this file for all routes.) I've been unable to get redirectTo: to work. 
// QQN:  I've effectively "squashed" the directory structure. Rather than going with the Ember-style 
//      cities/city/programs/program, I went with cities/programs. I think this will work. 
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
    path: '/cities/:cityId',
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