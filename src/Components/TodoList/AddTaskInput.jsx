import React from 'react'
import './AddTaskInput.css'

export default function AddTaskInput()
{
	return (
		<div className='add-task-input-container'>
			<input className='input add-task-input' type="text" placeholder='Add a Task' />
			<input className='button add-task-button' type="button" value={'+'} />
		</div>
	)
}
