import { useContext, useState } from "react";
import { loginUserService } from "../services";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./css/css.css"

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await loginUserService({ email, password });
      if (response !== undefined && response.token) {
      login(response.token);
      navigate("/");
    } else {
      throw new Error("Login failed"); 
    }
  } catch (error) {
    setError(error.message);
  }
};

  return (
    <section className="login-box">
      
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Mail"
          ></input>

          <label htmlFor="password1"></label>
          <input
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          ></input>
        </fieldset>
        <button>Login</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
