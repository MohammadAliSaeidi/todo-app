import React from 'react'
import './TodoItem.css'

export default function TodoItem(props)
{
	const taskClassName = props.done ?
		'todo-item-container done-todo-item-container' :
		'todo-item-container';

	return (
		<div className={taskClassName}>

			<input type="checkbox" checked={props.done} />
			{props.task}

		</div>
	)
}
