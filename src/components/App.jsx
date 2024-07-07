import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes.js"

function App() {
  return (
    <div>
      <Header />
      {notes.map(item =>{
        return <Note key= {item.id} title={item.title} content={item.content} />
      })}
      
      <Footer />
    </div>
  );
}

export default App;
