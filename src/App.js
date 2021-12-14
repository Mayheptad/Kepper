import Header from "./Components/Header";
import Notelist from "./Components/Notelist";
import Footer from "./Components/Footer";
import CreateArea from "./Components/Createarea";
import noteData from "./noteData";
import { useState } from "react";

function App (){

const [notes, setNote] = useState(noteData);

  function add2Note(newNote){
  newNote.key = notes.at(0).key + 1;  
    setNote( prevNotes => [newNote, ...prevNotes]);
  }

const deleteNote = id => setNote( prevNotes => prevNotes.filter( n => n.key !== id ));


return(
  <>
  <Header />
  <CreateArea add2Note={add2Note}/>
  <Notelist notes={notes} deleteNote={deleteNote}/>
  <Footer />
  </>
);

}

export default App;
