import { useEffect, useState } from "react";
import { singleNoteService } from "../services/index.js";

const useNote = (id) => {
  const [note, setNote] = useState(null);
  const [loading, setLoadig] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadNote = async () => {
      try {
        setLoadig(true);

        const data = await singleNoteService(id);

        setNote(data)

        setNote(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoadig(false);
      }
    };

    loadNote();
  }, [id]);

  return { note, loading, error };
};

export default useNote;
