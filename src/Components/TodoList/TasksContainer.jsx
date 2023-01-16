import React from 'react'
import TodoItem from './TodoItem/TodoItem.jsx';

export default function TasksContainer(props)
{
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
			return <TodoItem
				handleOnTaskChecked={props.handleOnTaskChecked}
				task={task.text}
				done={task.done}
				key={task.taskId}
				taskId={task.taskId} />
		return null;
	});

	return (
		<>
			{tasks}
			<h2>Completed tasks</h2>
			{doneTasks}
		</>
	)
}
