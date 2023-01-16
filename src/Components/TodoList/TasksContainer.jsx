import React from 'react'
import TodoItem from './TodoItem/TodoItem.jsx';

export default function TasksContainer(props)
{
	const tasks = props.tasks.map((task, index) =>
	{
		return <TodoItem task={task.text} done={task.done} key={index} />
	});

	return (
		<>
			{tasks}
		</>
	)
}
