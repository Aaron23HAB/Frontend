import { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { updateNoteService } from "../../services";
import { AuthContext } from "../../Context/AuthContext.jsx";

const EditNote = () => {
  const { id } = useParams();
  const { token } = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [texto, setTexto] = useState("");
  const [categoria, setCategoria] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const updatedNote = { title, texto, categoria };
      await updateNoteService(id, updatedNote, token);
      window.location.href = `/note/${id}`;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Editar Nota</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <label htmlFor="texto">Texto</label>
          <textarea
            id="texto"
            name="texto"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            required
          />

          <label htmlFor="categoria">Categoria</label>
          <textarea
            id="categoria"
            name="categoria"
            value={texto}
            onChange={(e) => setCategoria(e.target.value)}
            required
          />

          <button type="submit">Guardar Cambios</button>

          {loading && <p>Cargando...</p>}
          {error && <p>{error}</p>}
        </fieldset>
      </form>
    </div>
  );
};

export default EditNote;
