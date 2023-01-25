import React, { useState } from 'react'
import './AddTaskInput.css'
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

type Props = {
	handleOnAddTask: (taskStr: string) => void;
}

export default function AddTaskInput(props: Props)
{
	const [inputContent, setInputContent] = useState("");

	function handleOnAddButtonClicked()
	{
		props.handleOnAddTask(inputContent);
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
				onChange={(event) => setInputContent(event.target.value)}
				autoFocus />

			<Button
				variant="contained"
				onClick={handleOnAddButtonClicked}>Add</Button>
		</div>
	)
}
