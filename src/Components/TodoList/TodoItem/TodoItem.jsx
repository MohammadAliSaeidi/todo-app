import React from 'react'

import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import './TodoItem.css'
import './Checkbox.css'
import { Tooltip } from '@mui/material';

export default function TodoItem(props)
{
	const taskClassName = props.done ?
		'todo-item-container done-todo-item-container' :
		'todo-item-container';

	return (
		<Paper elevation={2}>

			<div className={taskClassName}>

				<div>
					<Checkbox onChange={(e) => { props.handleOnTaskChecked(e, props.taskId) }} checked={props.done} />
					{props.task}
				</div>

				<Tooltip title="Delete">
					<IconButton aria-label="delete" onClick={() => props.onTaskDelete(props.taskId)}>
						<DeleteIcon htmlColor='#ed4337' />
					</IconButton>
				</Tooltip>
			</div>

		</Paper>
	)
}
