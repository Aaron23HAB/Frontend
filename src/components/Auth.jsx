import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export const Auth = () => {
  const { user, logout } = useContext(AuthContext);
  return user ? (
    <p>
      Usuario conectado <Link to={`/user/${user.id}`}>{user.email}</Link>
      <button onClick={logout}>Deslogearse</button>
    </p>
  ) : (
    <ul>
      <li>
        <Link to={"register"}>Register</Link>
        <Link to={"login"}>Login</Link>
      </li>
    </ul>
  );
};
