import React from 'react'
import './AddTaskInput.css'
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

export default function AddTaskInput()
{
	return (
		<div className='add-task-input-container'>
			<TextField id="outlined-basic" label='Add a Task' fullWidth={true} variant="filled" />
			<Button variant="contained">Add</Button>
		</div>
	)
}
