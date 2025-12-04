import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([
    {id: 1, title: "Test", content: "Test"}
  ]);

  function addNote(submission){
    setNotes((prevNotes) => [
      ...prevNotes, { ...submission, id: new Date().getTime() }
    ]);
  }

  function deleteNote(id){
    setNotes((prevNotes) => {
      return prevNotes.filter((notes) => {
        return notes.id != id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd = {addNote}/>
      {notes.map((note) => (
        <Note key =  {note.id} id = {note.id} title = {note.title} content = {note.content}
        delete = {deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
