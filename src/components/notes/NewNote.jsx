import { useContext, useState, useEffect } from "react";
import { sendNoteService, getCategoriesService } from "../../services";
import { AuthContext } from "../../Context/AuthContext.jsx";

export const NewNote = (addNote) => {
  const [error, setError] = useState("");
  const [creating, setCreating] = useState(false);
  const [categories, setCategories] = useState([]);
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories = await getCategoriesService(token);
        setCategories(fetchedCategories);
      } catch (error) {
        console.error('Error al obtener las categorías:', error);
      }
    };

    fetchCategories();
  }, [token]);

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

        <label htmlFor="categoria">Categoría</label>
        <select id="categoria" name="categoria" required>
          <option value="">Seleccione una categoría</option>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.nombre}</option>
          ))}
        </select>

        <button>Crear nota</button>

        {creating ? <p>Creando nota</p> : null}
        {error ? <p>{error}</p> : null}
      </fieldset>
    </form>
  );
};
