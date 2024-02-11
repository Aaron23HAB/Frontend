import { useContext } from "react";
import { Auth } from "./Auth";
import { Link } from "react-router-dom";
import './style.css'

export const Header = () => {
  useContext;
  return (
    <header>
      <h1 className="titulo">
        <Link to={"/"}>App de Notas</Link>
        <Auth />
      </h1>
    </header>
  );
};
