import React, {useState} from 'react';

export default function ListItem(props) {
    const [editedItem, setEditedItem] = useState(props.task);
    const [editedMode, setEditedMode] = useState(false);

    const handleChange=(event)=>{
      setEditedItem(event.target.value);
    }
    
    const saveEditedItem =()=>{
        props.handleUpdate(props.idx, editedItem);
        setEditedMode(false);
    }
    return (
    <div className="list">
    { editedMode ? (
    <>
    <input value={editedItem} onChange={handleChange} type="text" />
    <button onClick={saveEditedItem}>save</button>
    </>
    ) : (
      <>
      {props.task}
      <button onClick={()=>{setEditedMode(true)}}>edit</button>
      <button onClick={()=> props.handleRemoveItem(props.idx)}>delete</button>
      </>
    )}
    </div>);
}