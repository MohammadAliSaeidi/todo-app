import React from 'react'
import TodoItem from './TodoItem/TodoItem.jsx';

export default function TasksContainer(props)
{
	let hasCompleteTask = false;

	const tasks = props.tasks.map((task) =>
	{
		if (!task.done)
			return <TodoItem handleOnTaskChecked={props.handleOnTaskChecked}
				task={task.text}
				done={task.done}
				key={task.taskId}
				taskId={task.taskId} />
		return null;
	});

	const doneTasks = props.tasks.map((task) =>
	{
		if (task.done)
		{
			hasCompleteTask = true;

			return <TodoItem
				handleOnTaskChecked={props.handleOnTaskChecked}
				task={task.text}
				done={task.done}
				key={task.taskId}
				taskId={task.taskId} />
		}

		return null;
	});

	return (
		<>
			{tasks}
			{hasCompleteTask ? <h2>Completed tasks</h2> : null}
			{doneTasks}
		</>
	)
}
