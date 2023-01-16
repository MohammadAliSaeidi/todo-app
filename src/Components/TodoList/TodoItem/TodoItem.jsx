import React from 'react'

import Checkbox from '@mui/material/Checkbox';

import './TodoItem.css'
import './Checkbox.css'

export default function TodoItem(props)
{
	const taskClassName = props.done ?
		'todo-item-container done-todo-item-container' :
		'todo-item-container';

	return (
		<div className={taskClassName}>

			<Checkbox onChange={(e) => { props.handleOnTaskChecked(e, props.taskId) }} checked={props.done} />
			{props.task}

		</div>
	)
}
