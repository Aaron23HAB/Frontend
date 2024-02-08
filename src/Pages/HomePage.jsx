import { useContext } from "react";
import useNotes from "../Hooks/useNotes.js";
import { ErrorMessage } from "../components/ErrorMessage.jsx";
import { AllNotes } from "../components/notes/AllNotes.jsx";
import {AuthContext} from "../Hooks/useNotes.js";

export const HomePage = () => {
  const { notes, loading, error } = useNotes();
  const {user} = useContext(AuthContext);

  if (loading) return <p>cargando notas...</p>;
  if (error) return <ErrorMessage message={error} />;

  console.log(notes);

  return (
    <section>
      <h1>Notas</h1>

      {user ? <p>Formulario envio nota</p> : null}
      <h1>Ultimas Notas</h1>
      <AllNotes notes={notes} />
    </section>
  );
};
