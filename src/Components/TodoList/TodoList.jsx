import React, { Component, useState } from 'react'
import AddTaskInput from './AddTaskInput'
import TasksContainer from './TasksContainer'
import Sidebar from './SideBar/Sidebar.jsx'

import './TodoList.css'

export default function TodoList()
{
	const [currentListId, setCurrentListId] = useState(1);

	const [lists, setLists] = useState([
		{
			listId: 1,
			listName: 'Daily tasks'
		},
		{
			listId: 2,
			listName: 'Word tasks'
		}
	]);

	const [tasks, setTasks] = useState([
		{
			listId: 1,
			taskId: 0,
			text: 'Wash the dishes',
			done: false
		},
		{
			listId: 1,
			taskId: 1,
			text: 'Turn off the TV',
			done: false
		},
		{
			listId: 1,
			taskId: 2,
			text: 'Create react project',
			done: false
		},
		{
			listId: 1,
			taskId: 3,
			text: 'Wake up',
			done: true
		},
		{
			listId: 1,
			taskId: 4,
			text: 'Brush your teeth',
			done: true
		},
		{
			listId: 2,
			taskId: 5,
			text: "commit changes on todo-app project",
			done: false
		}
	]);

	function handleOnTaskChecked(event, taskId)
	{
		setTasks(
			tasks.map(task =>
			{
				if (taskId === task.taskId)
				{
					return {
						...task,
						done: event.target.checked
					}
				}
				return task;
			}));
	}

	function handleOnAddTask(taskStr)
	{
		if (taskStr === "")
		{
			return;
		}

		setTasks(
			[
				...tasks,
				{
					listId: currentListId,
					taskId: (tasks.at(-1).taskId) + 1,
					text: taskStr,
					done: false
				}
			]
		);
	}

	function onListChanged(listId)
	{
		setCurrentListId(listId);
	}

	function getListTasks(listId)
	{
		return (
			tasks.filter(task => task.listId === listId)
		);
	}

	return (
		<>
			<Sidebar
				lists={lists}
				onListChanged={onListChanged}
				currentListId={currentListId} />

			<div className='panel todo-list'>

				<TasksContainer
					handleOnTaskChecked={handleOnTaskChecked}
					tasks={getListTasks(currentListId)} />

				<AddTaskInput
					handleOnAddTask={handleOnAddTask} />

			</div>
		</>
	)

}
