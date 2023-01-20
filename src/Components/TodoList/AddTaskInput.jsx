import React, { useState } from 'react'
import './AddTaskInput.css'
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

export default function AddTaskInput({ handleOnAddTask })
{
	const [inputContent, setInputContent] = useState("");

	function handleOnAddButtonClicked(event)
	{
		handleOnAddTask(inputContent);
		setInputContent("");
	}

	return (
		<div className='add-task-input-container'>
			<TextField
				id="outlined-basic"
				label='Add a Task'
				fullWidth={true}
				variant="filled"
				value={inputContent}
				onChange={(event) => setInputContent(event.target.value)} />

			<Button
				variant="contained"
				onClick={handleOnAddButtonClicked}>Add</Button>
		</div>
	)
}
