import { useEffect, useState } from "react";
import { loadNotesService } from "../services";

const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoadig] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNotes = async () => {
      try {
        setLoadig(true);

        const data = await loadNotesService();

        setNotes(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoadig(false);
      }
    };

    loadNotes();
  });

  return { notes, loading, error };
};

export default useNotes;
