import { useContext } from "react";
import { Auth } from "./Auth";
import { Link } from "react-router-dom";

export const Header = () => {
  useContext;
  return (
    <header>
      <h1>
        <Link to={"/"}>App de Notas</Link>
      </h1>
      <nav>
        <Auth />
      </nav>
    </header>
  );
};
