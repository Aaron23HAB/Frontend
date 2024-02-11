export const AllNotes = ({ notes }) => {
  return notes.length ? (
    <ul>
      {AllNotes.map((note) => (
        <li key={note.id}>
        <a href={`/nota/${note.id}`}>{note.title}</a>
        </li>
      ))}
    </ul>
  ) : (
    <p> Todavía no hay notas</p>
  );
};
