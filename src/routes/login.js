import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { createCity, getCities, updateCity, getCityPrograms } from "../apiClient";

const Login = () => {
  const navigate = useNavigate();
  function login() {
    // POST to the login table.
    // Retrieve the cityId from the POST response. (Here, I'm just using a value of 1 as a placeholder.)
    navigate('/cities/1/select-program', {replace: true});
  }

  const [cities, setCities] = useState([])
  useEffect(() => {
    getCities().then(cities => {
      setCities(cities)
    })
    getCityPrograms(1).then((p) => {
      console.log("cp", p)
    })
  }, [])

  const handleCreate = () => {
    createCity({
      "cityName": 'jazzercise',
      "state": 'CO',
      logoMain: 'asdf',
      createdBy: 'me',
      updatedBy: 'me'
    })
  }

  const handleUpdate = () => {
    updateCity(1, {
      "id": 1,
      "cityName": 'jazzercise'+new Date().getSeconds(),
    })
  }

  return (
    <div>
      <h1>Login</h1>
      {/* <h1>{cities ? cities[0]["cityName"] : ""}</h1> */}
      <div>
        <label>User</label>
        <input></input>
      </div>
      <div>
        <label>Password</label>
        <input></input>
      </div>
      <input type="button" value="Login" onClick={login} />
      <input type="button" value="create" onClick={handleCreate} />
      <input type="button" value="update" onClick={handleUpdate} />
    </div>
  );
};

export default Login;
