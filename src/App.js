
import { useState,useEffect } from "react";
import NoteList from "./Component/NoteList"
import Header from "./Header"
import moment from "moment/moment";
import { v4 as uuidv4 } from 'uuid';
import Search from "./Component/Search";

function App() {
  const [dark,setDark]=useState(false);
  const theme=dark?"dark-mode":"";

  const [notes,setNotes]=useState([]);
  const [search,setSearch]=useState('');

  const currentDate= moment().format("lll");

  //to save data on local storage 
  useEffect(() => {
      const savedNotes = JSON.parse(localStorage.getItem('reactApp'));

      if (savedNotes) {
          setNotes(savedNotes);
      }
  }, []);

  const userNoteHandler=(note)=>{
      const userNote=[...notes,{id:uuidv4(),note:note,date:currentDate,isEdting:false}];
      setNotes(userNote);
      localStorage.setItem('reactApp',JSON.stringify(userNote));
  }

  const deleteHandler=(id)=>{
     const newNotes= notes.filter((note)=>note.id !== id);
     setNotes(newNotes);
     localStorage.setItem('reactApp',JSON.stringify(newNotes));
  }

  const editHandler=(id)=>{
      const editNotes=notes.map((note)=>(note.id ===id? {...note,isEdting:!note.isEdting}:note));
      setNotes(editNotes);
  }

  const updateHandler=(noteTitle,id)=>{
      const updateNotes=notes.map((note)=>(note.id ===id? {...note,note:noteTitle,isEdting:!note.isEdting}:note));
      setNotes(updateNotes);
      localStorage.setItem('reactApp',JSON.stringify(updateNotes))
  }
    

  return (
    <div className={theme}>
      <div className="container">
          <Header onMode={setDark} theme={dark}/>
          <Search onSearch={setSearch}/>
          <NoteList
              notes={notes.filter(note=>(note.note.toLowerCase().includes(search)))}
              onDelete={deleteHandler}
              onEdit={editHandler}
              onUpdate={updateHandler}
              onNote={userNoteHandler}
          />
      </div>
    </div>
  );
}

export default App;
