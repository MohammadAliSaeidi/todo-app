import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

import './Sidebar.css'
import { useState } from 'react'

export default function Sidebar({ lists, onListChanged, currentListId })
{
	const [value, setValue] = useState(currentListId);

	const sidebarLists = lists.map(list =>
	{
		return (
			<Tab label={list.listName} value={list.listId} key={list.listId} />
		)
	});

	function handleChange(event, newValue)
	{
		setValue(newValue);
		onListChanged(newValue);
	}

	return (
		<div className='sidebar'>
			<Tabs
				onChange={handleChange}
				value={value}
				orientation="vertical"
				variant="scrollable"
				sx={{
					flexGrow: 1,
					borderRight: 1,
					borderColor: 'divider'
				}}>

				{sidebarLists}

			</Tabs>
		</div>
	)
}
