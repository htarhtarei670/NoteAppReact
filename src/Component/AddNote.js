import { useState } from "react";

const AddNote = ({onNote}) => {
    const [userInput,setUserInput]=useState('');
    const textLimit=200;

    const changeHandler=(e)=>{
        if(textLimit-userInput.trim().length >0){
            setUserInput(e.target.value) ;
        }
    }

    const clickSaveHandler=()=>{
        if(userInput.trim().length >0){
            onNote(userInput);
            setUserInput("");
        }
    }

    return ( 
        <div className="note new">
            <textarea name="" id="" cols="30" rows="10" placeholder="Type to add a new note...." onChange={changeHandler} value={userInput}/>
            <div className="note-footer">
                <span>{textLimit -userInput.trim().length} remaining</span>
                <button className="saveBtn" onClick={clickSaveHandler}>Save</button>
            </div>
        </div>
     );
}
 
export default AddNote;