import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext.jsx";
import { deleteNoteService } from "../../services/index.js";
import { useNavigate } from "react-router-dom";

export const Note = ({ note, removeNote }) => {
  const navigate = useNavigate();
  const { user, token } = useContext(AuthContext);
  const [error, setError] = useState("");

  const deleteNote = async (id) => {
    try {
      await deleteNoteService({ id, token });
      if (removeNote) {
        removeNote(id);
      } else {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const editNote = (id) => {
    navigate(`/nota/${id}`);
  };
  return (
    <article>
      <p>{note.title}</p>
      {user && user.id === note.user_id ? (
        <section>
          <button
            onClick={() => {
              if (window.confirm("¿Quieres borrar esta nota?"))
                deleteNote(note.id);
            }}
          >
            🗑
          </button>
          <button onClick={() => editNote(note.id)}>✒</button>
          {error ? <p>{error}</p> : null}
        </section>
      ) : null}
    </article>
  );
};
