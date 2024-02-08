import {Note} from "./Note.js"
import PropTypes from "prop-types";

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
    );
};


AllNotes.propTypes = {
    notes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
      })
    ).isRequired
  };