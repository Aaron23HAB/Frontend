import { useEffect, useState } from "react";
import { loadAllNotesService } from "../services/index.js";

const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoadig] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNotes = async () => {
      try {
        setLoadig(true);

        const data = await loadAllNotesService();

        setNotes(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoadig(false);
      }
    };

    loadNotes();
  }, []);

  const addNote = (note) => {
    setNotes([note, ...notes]);
  };

  const removeNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return { notes, loading, error, addNote, removeNote};
};

export default useNotes;
