import React from 'react'

import DeleteButton from './DeleteButton';

import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';

import './TodoItem.css'
import './Checkbox.css'


export default function TodoItem({ handleOnTaskChecked, task, done, taskId, onTaskDelete })
{
	const taskClassName = done ?
		'todo-item-container done-todo-item-container' :
		'todo-item-container';

	return (
		<Paper elevation={2}>

			<div className={taskClassName}>

				<div>
					<Checkbox onChange={(e) => { handleOnTaskChecked(e, taskId) }} checked={done} />
					{task}
				</div>

				<DeleteButton onTaskDelete={onTaskDelete} taskId={taskId} />
			</div>

		</Paper>
	)
}
