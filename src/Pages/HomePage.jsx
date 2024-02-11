import { useContext } from "react";
import useNotes from "../Hooks/useNotes.js";
import { ErrorMessage } from "../components/ErrorMessage.jsx";
import { AllNotes } from "../components/notes/AllNotes.jsx";
import { AuthContext } from "../Context/AuthContext.jsx";
import { NewNote } from "../components/notes/NewNote.jsx";

export const HomePage = () => {
  const { notes, loading, error, addNote, removeNote } = useNotes();
  const { user } = useContext(AuthContext);

  if (loading) return <p>cargando notas...</p>;
  if (error) return <ErrorMessage message={error} />;

  console.log(notes);

  return (
    <section>

      {user ? <NewNote addNote={addNote}/> : null}

      <h1>Ultimas Notas</h1>
      
      <AllNotes notes={notes} removeNote={removeNote}/>
    </section>
  );
};
