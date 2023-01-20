import React from 'react'
import { TransitionGroup } from 'react-transition-group';
import TodoItem from './TodoItem/TodoItem.jsx';

import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import { List } from '@mui/material';

export default function TasksContainer(props)
{
	const tasks = props.tasks.filter(task => task.done !== true);
	const doneTasks = props.tasks.filter(task => task.done === true);

	const hasTask = (tasks.length > 0);
	const hasCompleteTask = (doneTasks.length > 0);


	return (
		<div>
			<TransitionGroup>
				{hasTask ? <Collapse><h2>Tasks</h2></Collapse> : null}
			</TransitionGroup>

			{renderTasks(tasks, props.handleOnTaskChecked, props.onTaskDelete)}

			<TransitionGroup>
				{hasCompleteTask ? <Collapse><h2>Completed Tasks</h2> </Collapse> : null}
			</TransitionGroup>

			{renderTasks(doneTasks, props.handleOnTaskChecked, props.onTaskDelete)}

		</div>
	)
}

function renderTasks(tasks, handleOnTaskChecked, onTaskDelete)
{
	return (
		<List
			direction={'column'}
			divider={<Divider orientation='horizontal' flexItem />}>
			<TransitionGroup >
				{
					tasks.map((task) => (
						<Collapse key={task.taskId}>
							<div>
								<TodoItem handleOnTaskChecked={handleOnTaskChecked}
									task={task.text}
									done={task.done}
									taskId={task.taskId}
									onTaskDelete={onTaskDelete} />
							</div>
						</Collapse>
					))
				}
			</TransitionGroup>
		</List>
	);
}
