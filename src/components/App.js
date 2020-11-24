import React, { useState } from 'react';
import "./../styles/App.css";
import ListItem from './ListItem';

function App() 
{
	const [taskName, setTaskName] = useState(["Buy milk", "Buy vegetable"]);
	const [currTaskName, setCurrTaskName] = useState("");
	
	const addToList=() => {
		taskName.push(currTaskName);
		setTaskName([...taskName]);
		setCurrTaskName("");
	}

	const handleChange=(event)=>{
		setCurrTaskName(event.target.value);
	}

	const handleRemoveItem = idx => {
		taskName.splice(idx, 1);
		setTaskName([...taskName]);	
	}

	 const handleUpdate = (idx, newTask) => {
		 taskName[idx] = newTask;
		 setTaskName([...taskName]);
	 }


	return (
	<div id="main">
		<h1>Todo List React</h1>
		<textarea className="bg-pink" id="task" value={currTaskName} onChange={handleChange}></textarea>
		<button disabled={currTaskName.trim().length === 0} onClick={addToList} id="btn">Add Item</button>

		{taskName.map((task, taskIdx) =>(
		<ListItem
			task={task}
			key={`${task}_${taskIdx}`}
			idx={taskIdx}
			handleUpdate={handleUpdate}
			handleRemoveItem={handleRemoveItem}
		/>
		))}
	</div>
	);
}


export default App;
