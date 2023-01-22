import React from 'react'

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Tooltip } from '@mui/material';


export default function DeleteButton(props)
{
	return (
		<Tooltip title="Delete">
			<IconButton aria-label="delete" onClick={() => props.onTaskDelete(props.taskId)}>
				<DeleteIcon htmlColor='#ed4337' />
			</IconButton>
		</Tooltip>
	)
}
