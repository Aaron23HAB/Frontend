import { Note } from "./Note.js";

export const AllNotes = ({ notes, removeNote }) => {
  return notes.length ? (
    <ul>
      {AllNotes.map((note) => (
        <li key={note.id}>
          <Note note={note} removeNote={removeNote} />
        </li>
      ))}
    </ul>
  ) : (
    <p> No hay notas</p>
  );
};
