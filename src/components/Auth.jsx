import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export const Auth = () => {
  const { user, logout } = useContext(AuthContext);
  return user ? (
    <p>Usuario conectado {user.email} <button onClick={logout}>Deslogearse</button></p>
  ) : (
    <ul>
      <li>
        <Link to={"register"}>Register</Link>
      </li>
      <li>
        <Link to={"login"}>Login</Link>
      </li>
    </ul>
  );
};
