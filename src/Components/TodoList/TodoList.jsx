import React, { Component, useState } from 'react'
import AddTaskInput from './AddTaskInput'
import TasksContainer from './TasksContainer'
import SideBar from './SideBar/SideBar.jsx'

import './TodoList.css'

export default function TodoList()
{
	const [currentListId, setCurrentListId] = useState(1);

	const [lists, setLists] = useState({
		listId: 1,
		listName: 'Daily tasks'
	});

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
	]);

	function handleOnTaskChecked(event, taskId)
	{
		setTasks(tasks.map(task =>
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


	const currentListTasks = tasks.filter(task => task.listId === currentListId);

	return (
		<>
			<SideBar lists={lists} />
			<div className='panel todo-list'>
				<TasksContainer handleOnTaskChecked={handleOnTaskChecked} tasks={tasks} />
				<AddTaskInput handleOnAddTask={handleOnAddTask} />
			</div>
		</>
	)

}
