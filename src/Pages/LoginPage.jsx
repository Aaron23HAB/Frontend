import { useState } from "react";
import { loginUserService } from "../services";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState;
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await loginUserService({ email, password });
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section>
      <h1> Login</h1>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="email">Email</label>
          <imput
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></imput>

          <label htmlFor="password1">Contraseña</label>
          <imput
            type="password"
            id="password"
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></imput>
        </fieldset>
        <button>Login</button>
        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
