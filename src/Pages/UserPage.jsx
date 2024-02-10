import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import useUser from "../Hooks/useUser";

export const UserPage = () => {
    const {id} = useParams();
    const {user, loading, error} = useUser(id);

    if(loading) return <p>Cargando usuario...</p>
    if(error) return <ErrorMessage message={error} />
  return (
    <section>
      <h1> Usuario {user.email} </h1>
      <p> ID de usuario: {user.id}</p>
      <p>Registrado en {new Date(user.created_at).toLocaleString()}</p>
    </section>
  );
};
