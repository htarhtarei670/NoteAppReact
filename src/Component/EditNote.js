import { useState } from "react";

const EditNote = ({onUpdate,note}) => {
    const [userInput,setUserInput]=useState(note.note);
    const textLimit=200;

    const changeHandler=(e)=>{
        if(textLimit-userInput.trim().length >0){
            setUserInput(e.target.value) ;
        }
    }

    const clickUpdateHandler=()=>{
        if(userInput.trim().length >0){
            onUpdate(userInput,note.id);
            setUserInput("");
        }
    }

    return ( 
        <div className="note update">
        <textarea name="" id="" cols="30" rows="10" placeholder="Type to add a new note...." onChange={changeHandler} value={userInput}/>
        <div className="note-footer">
            <span>{textLimit -userInput.trim().length} remaining</span>
            <button className="saveBtn" onClick={clickUpdateHandler}>Update</button>
        </div>
    </div>
     );
}
 
export default EditNote;