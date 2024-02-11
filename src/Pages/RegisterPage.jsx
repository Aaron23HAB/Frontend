import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUserService } from "../services";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password1, setpassword1] = useState("");
  const [password2, setpassword2] = useState("");
  const [error, setError] = useState("");

  const handleForm = async (e) => {
    e.preventDefault();
    setError("");

    if (password1 !== password2) {
      setError("Las contraseñas no coinciden");
      return;
    }
    try {
      await registerUserService({ email, password: password1 });
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section>
      <form onSubmit={handleForm}>
        <fieldset>
          <label htmlFor="email"> Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </fieldset>

        <fieldset>
          <label htmlFor="password1"> Contraseña</label>
          <input
            type="password1"
            id="password1"
            name="password1"
            required
            onChange={(e) => setpassword1(e.target.value)}
          ></input>
        </fieldset>

        <fieldset>
          <label htmlFor="password2"> Repita la contraseña </label>
          <input
            type="password2"
            id="password2"
            name="password2"
            required
            onChange={(e) => setpassword2(e.target.value)}
          ></input>
        </fieldset>

        <button>Register</button>

        {error ? <p>{error}</p> : null}
      </form>
    </section>
  );
};
