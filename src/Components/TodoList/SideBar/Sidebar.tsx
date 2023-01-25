import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab';
import React, { useState } from 'react'

import './Sidebar.css'
import TodoListModel from '../../../Types/TodoListModel';

type SidebarProps = {
	lists: TodoListModel[];
	onListChanged: (listId: number) => void;
	currentListId: number;
}

export default function Sidebar(props: SidebarProps)
{
	const [value, setValue] = useState(props.currentListId);

	const sidebarLists = props.lists.map(list =>
	{
		return (
			<Tab label={list.listName} value={list.listId} key={list.listId} />
		)
	});

	function handleChange(event: React.SyntheticEvent<Element, Event>, newValue: any)
	{
		setValue(newValue);
		props.onListChanged(newValue);
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
