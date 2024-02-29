import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUserService } from "../services";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");

    if (password1 !== password2) {
      setError("Las contraseñas no coinciden");
      return;
    }
    try {
      await registerUserService({ name, email, password: password1 });
      navigate("/login");
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
            id="password1"
            name="password1"
            required
            onChange={(e) => setPassword1(e.target.value)}
            placeholder="Password"
          ></input>
        
          <label htmlFor="password2"></label>
          <input
            type="password"
            id="password2"
            name="password2"
            required
            onChange={(e) => setPassword2(e.target.value)}
            placeholder="Repeat Password"
          ></input>
        </fieldset>

        <button>Register</button>

        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
