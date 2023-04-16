import { Link } from "react-router-dom";

const Login = () => (
  <div>
    <h1>Login</h1>
    <div>
      <label>User</label>
      <input></input>
    </div>
    <div>
      <label>Password</label>
      <input></input>
    </div>
    <nav>
      <Link to="/">Login</Link>
    </nav>
  </div>
);

export default Login;
