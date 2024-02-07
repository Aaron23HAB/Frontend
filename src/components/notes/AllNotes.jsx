import {Note} from "./Note.js"


export const AllNotes = ({ notes }) => {
  return notes.length ? (
    <ul>
            {AllNotes.map((note) =>
            <li key={note.id}>
                <Note note={note} />
            </li>
            )}
        </ul>
    ) : (
        <p> No hay notas</p>
    )
}