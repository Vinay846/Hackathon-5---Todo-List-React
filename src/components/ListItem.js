import React, {useState} from 'react';
import './../styles/App.css';

export default function ListItem(props) {
    const [editedItem, setEditedItem] = useState(props.task);
    const [editedMode, setEditedMode] = useState(false);

    const handleChange=(event)=>{
      setEditedItem(event.target.value);
    };
    
    const saveEditedItem =()=>{
        props.handleUpdate(props.idx, editedItem);
        setEditedMode(false);
    };
    return (
      <div className="list">
        { editedMode ? (
          <>
            <textarea className="editTask " value={editedItem} onChange={handleChange}></textarea>
            <button className="saveTask" disabled={editedItem.trim().length===0} onClick={saveEditedItem}>Save Task</button>
          </>
        ) : (
          <>
            {props.task}
            <button className="edit" onClick={()=>{setEditedMode(true)}}>edit</button>
            <button className="delete" onClick={()=> props.handleRemoveItem(props.idx)}>delete</button>
          </>
        )}
      </div>);
}