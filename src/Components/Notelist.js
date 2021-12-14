import Note from "./Note.js";

export default function Notelist({notes, deleteNote}) {

  return (
    <>
      {notes.map( (eachNote, index) => // use index as key and id later
        <Note
          key={index}
          id={eachNote.key}
          title={eachNote.title}
          content={eachNote.content}
          deleteNote={deleteNote}
        />
      )}
    </>
  );
}
