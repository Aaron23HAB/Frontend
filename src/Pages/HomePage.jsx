import useNotes from "../Hooks/useNotes.js";
import { ErrorMessage } from "../components/ErrorMessage.jsx";
import { AllNotes } from "../components/notes/AllNotes.jsx";

export const HomePage = () => {
  const { notes, loading, error } = useNotes();

  if (loading) return <p>cargando notas...</p>;
  if (error) return <ErrorMessage message={error} />;

  console.log(notes);

  return (
    <section>
      <h1>Ultimas Notas</h1>
      <AllNotes notes={notes} />
    </section>
  );
};
