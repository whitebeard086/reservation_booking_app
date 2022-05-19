import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleChange = e => {
    setCredentials(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const handleClick = async e => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });

    try {
      const res = await axios.post("/auth/login", credentials);

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/")
    } catch (error) {
      dispatch({ type: "LOGIN_FAILED", payload: error.response.data });
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          className="lInput"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          className="lInput"
          onChange={handleChange}
        />
        <button disabled={loading} className="lButton" onClick={handleClick}>
          Login
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};
export default Login;
