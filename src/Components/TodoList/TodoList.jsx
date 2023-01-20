import React, { useState } from 'react'
import AddTaskInput from './AddTaskInput'
import TasksContainer from './TasksContainer'
import Sidebar from './SideBar/Sidebar.jsx'

import './TodoList.css'
import DeleteDialog from './DeleteDialog'

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

	const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

	const [taskIdToDelete, setTaskIdToDelete] = useState(-1);

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

	function onDeleteButtonClicked(taskId)
	{
		console.log(`onDeleteButtonClicked ${taskId}`);
		setOpenDeleteDialog(true);
		setTaskIdToDelete(taskId);
	}

	function deleteTask()
	{
		setTasks(tasks.filter(task => task.taskId !== taskIdToDelete));
		setTaskIdToDelete(-1);
		setOpenDeleteDialog(false);
	}

	return (
		<>
			<Sidebar
				lists={lists}
				onListChanged={onListChanged}
				currentListId={currentListId} />

			<div className='todo-list'>

				<TasksContainer
					handleOnTaskChecked={handleOnTaskChecked}
					tasks={getListTasks(currentListId)}
					onTaskDelete={onDeleteButtonClicked} />

				<AddTaskInput
					handleOnAddTask={handleOnAddTask} />

			</div>

			<DeleteDialog open={openDeleteDialog} deleteTask={deleteTask} />
		</>
	)
}
