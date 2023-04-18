import { useQuery } from "jsonapi-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getCities } from "../apiClient";

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
  }, [])


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
    </div>
  );
};

export default Login;
