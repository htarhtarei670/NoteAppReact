import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Note = ({note,onDelete,onEdit}) => {
    return (
        <div className="note">
            <textarea name="" id="" cols="30" rows="10" defaultValue={note.note}/>
            <div className="note-footer">
                <span>{note.date}</span>
                <div>
                        <FontAwesomeIcon icon={faPenToSquare} onClick={()=>onEdit(note.id)}/>
                        <FontAwesomeIcon icon={faTrashCan} onClick={()=>onDelete(note.id)} className="delete"/>
                </div>
            </div>
        </div>
    );
}
 
export default Note;