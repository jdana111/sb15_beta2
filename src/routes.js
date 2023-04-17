import React from "react";
import "./index.css";
import Login from './routes/Login'
import CityForm from './routes/cities/CityForm'
import SelectProgram from './routes/cities/SelectProgram'
import { createBrowserRouter } from "react-router-dom";

// QQS:  ASSIGNMENT 1: I've been unable to get redirectTo: to work. 
// QQN:  I've effectively "squashed" the directory structure. Rather than going with the Ember-style 
//      cities/city/programs/program, I went with cities/programs. I think this will work. 
// QQN:  Notice how I have to alias components to naming conflicts. Let me know if you have a better way of doing this. 
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
]);
export default router