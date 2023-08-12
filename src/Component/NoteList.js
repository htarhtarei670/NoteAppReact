// import { useState,useEffect } from "react";
import AddNote from "./AddNote";
import Note from "./Note";
import EditNote from "./EditNote";

const NoteList= ({notes,onDelete,onEdit,onUpdate,onNote}) => {
    
    return (
       <div>
            <div className="noteList">
            <AddNote onNote={onNote}/>
                {notes.map((note)=>note.isEdting?(
                    <EditNote onUpdate={onUpdate} note={note} key={note.id}/>
                ):(
                    <Note 
                        note={note}
                        key={note.id}
                        onDelete={onDelete}
                        onEdit={onEdit}
                />
                ))}
            </div> 
       </div> 
    );
}

export default NoteList;