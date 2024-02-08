import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage.jsx";
import { Note } from "../components/notes/Note.jsx";
import { useNote } from "../Hooks/useNote.js";

export const NoteId = () => {
  const { id } = useParams;

  const { note, loading, error } = useNote(id);

  if (loading) return <p>cargando nota...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1> Login</h1>
      <Note note={note} />
    </section>
  );
};
