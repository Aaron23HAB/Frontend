import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const ErrorMessage = ({ message }) => {
  return (
    <>
      <p>{message}</p>
      <Link to="/">Volver a Inicio</Link>
    </>
  );
};

ErrorMessage.propTypes = {
  message: PropTypes.node.isRequired
};