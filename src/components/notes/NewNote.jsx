import { useContext, useState } from "react";
import { sendNoteService } from "../../services";
import { AuthContext } from "../../Context/AuthContext.jsx";

export const NewNote = (addNote) => {
  const [error, setError] = useState("");
  const [creating, setCreating] = useState(false);
  const { token } = useContext(AuthContext);

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      setCreating(true);
      const data = new FormData(e.target);
      const note = await sendNoteService({ data, token });

      addNote(note);
    } catch (error) {
      setError(error.message);
    } finally {
      setCreating(false);
    }
  };
  return (
    <form onSubmit={handleForm}>
      <h1>Añade una nota</h1>
      <fieldset>
        <label htmlFor="title">Título</label>
        <input type="title" id="title" name="title" required />

        <label htmlFor="text">Texto</label>
        <input type="text" id="text" name="text" required />

        <label htmlFor="text">Categoria</label>
        <input type="text" id="text" name="categoria" required />

        <button>Crear nota</button>

        {creating ? <p>Creando nota</p> : null}
        {error ? <p>{error}</p> : null}
      </fieldset>
    </form>
  );
};
