import React, { useEffect } from 'react'

import DeleteButton from './DeleteButton';

import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';

import './TodoItem.css'
import './Checkbox.css'

type TodoItemProps = {
	handleOnTaskChecked: (isChecked: boolean, taskId: number) => void;
	task: string;
	done: boolean;
	taskId: number;
	onTaskDelete: (taskId: number) => void;
}

export default function TodoItem(props: TodoItemProps)
{
	const taskClassName = props.done ?
		'todo-item-container done-todo-item-container' :
		'todo-item-container';

	return (
		<Paper elevation={2}>

			<div className={taskClassName}>

				<div>
					<Checkbox
						onChange={(e) =>
						{
							props.handleOnTaskChecked(e.target.checked, props.taskId)
						}}
						checked={props.done} />
					{props.task}
				</div>

				<DeleteButton onTaskDelete={props.onTaskDelete} taskId={props.taskId} />
			</div>

		</Paper>
	)
}
