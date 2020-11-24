import React, { useState } from 'react';
import "./../styles/App.css";
import ListItem from './ListItem';

function App() 
{
	const [taskName, setTaskName] = useState(["buy Milk", "Buy Vegitable", "Make Team", "Wait For"]);
	const [currTaskName, setCurrTaskName] = useState("");
	
	const addToList=() => {
		// alert("add to task list");
		setTaskName([...taskName, currTaskName]);
		setCurrTaskName("");
	}

	const handleChange=(event)=>{
		setCurrTaskName(event.target.value);
	}

	const handleRemoveItem = idx => {
		const temp = [...taskName];	
		temp.splice(idx, 1);	
		setTaskName(temp);
	}

	 const handleUpdate = (idx, newTask) => {
		 taskName[idx] = newTask;
		 setTaskName([...taskName]);
	 }


	return (
	<div id="main">
		<h1>Todo List React</h1>
		<textarea className="bg-pink" id="task" value={currTaskName} onChange={handleChange}></textarea>
		<button disabled={currTaskName.trim().length <= 0} onClick={addToList} id="btn">Add Task</button>

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
