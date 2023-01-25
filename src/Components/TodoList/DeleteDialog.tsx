import { Button, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import React from 'react'

type Props = {
	open: boolean;
	deleteTask: () => void
}

export default function DeleteDialog(props: Props)
{
	return (
		<Dialog open={props.open}>
			<DialogTitle>Delete this Task?</DialogTitle>
			<DialogContent>
				<Button variant='contained' onClick={() => props.deleteTask()}>Delete</Button>
			</DialogContent>
		</Dialog >
	)
}


