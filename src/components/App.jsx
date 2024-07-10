import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote){ //this newNote is the value passed from onadd function
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
    {notes.map((noteItem, index) => {
    return (
      <Note key={index} id={index} title={noteItem.title} content={noteItem.content} />
    );
    })}

      <Footer />
    </div>
  );
}

export default App;
