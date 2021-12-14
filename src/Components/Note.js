
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Note = ({id, title, content, deleteNote}) => {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={ _ => deleteNote(id)}> <DeleteForeverIcon /> </button>
    </div>
  );
};

export default Note;
