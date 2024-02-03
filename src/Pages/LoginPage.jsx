import { Link } from "react-router-dom";

export const LoginPage = () => {
  console.log(`pepe`);
  return (
    <section>
      <h1> Login</h1>
      <li>
        <Link to={"login"}>Login</Link>
      </li>
    </section>
  );
};
