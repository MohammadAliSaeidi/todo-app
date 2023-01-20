import { Button, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import React from 'react'

export default function DeleteDialog({ open, deleteTask })
{
	return (
		<Dialog open={open}>
			<DialogTitle>Delete this Task?</DialogTitle>
			<DialogContent>
				<Button variant='contained' onClick={() => deleteTask()}>Delete</Button>
			</DialogContent>
		</Dialog >
	)
}


