import logo from "./logo.svg";
import "./App.css";

import { AppDataContext } from "data";
import { getCity, getCityPrograms } from "apiClient/cities";
import { useEffect, useMemo, useReducer } from "react";
import { RouterProvider } from "react-router-dom";
import router from "routes";


// ENUM OF ACTION TYPES
const ACTION_TYPES = {
  SET_CITY: 'setcity',
  SET_PROGRAMS: 'setprograms',
  INIT_APP_DATA: 'initappdata'
}

// INITIAL VAL FOR REDUCER STATE
const defaultAppData = {
  city: null,
  programs: null
}


// DATA LOADER
const initAppData = async () => {
  let cityId = 1
  const [city, programs] = await Promise.all([getCity(cityId), getCityPrograms(cityId)])
  console.log("init")
  return {
    city,
    programs
  }
};

// REDUCER
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.INIT_APP_DATA:
      state = {...state}
      state.city = action.city
      state.programs = action.programs
      break;
    case ACTION_TYPES.SET_CITY:
      state = {...state}
      state.city = action.city
      break;
    case ACTION_TYPES.SET_PROGRAMS:
      state = {...state}
      state.programs = action.programs
      break;
  
    default:
      break;
  }
  return state
} 

function App() {
  const [state, dispatch] = useReducer(reducer, defaultAppData)

  useEffect(() => {
    initAppData().then(({city, programs}) => {
      dispatch({
        type: ACTION_TYPES.INIT_APP_DATA,
        city,
        programs
      })
    })
  }, [])

  return (
    <AppDataContext.Provider value={{state, dispatch}}>
      <RouterProvider router={router} />
    </AppDataContext.Provider>
  );
}

export default App;
