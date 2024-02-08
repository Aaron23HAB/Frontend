
import PropTypes from "prop-types";

export const Note = ({ note }) => {
  return (
    <article>
      <p>{note.text}</p>
    </article>
  );
};


Note.propTypes = {
  note: PropTypes.shape({
    text: PropTypes.string.isRequired
  }).isRequired
};