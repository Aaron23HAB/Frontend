import { Link } from "react-router-dom";

export const ErrorPage = () => {
  console.log(`pepe`);
  return (
    <section>
      <h1> No se encontró la página </h1>
      <Link to={"/"}> Volver a Inicio </Link>
    </section>
  );
};
