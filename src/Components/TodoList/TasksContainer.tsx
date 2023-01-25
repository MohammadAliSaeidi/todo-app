import React from 'react'
import { TransitionGroup } from 'react-transition-group';
import TodoItem from './TodoItem/TodoItem';

import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import TodoTask from '../../Types/TodoTask';

function RenderTasks(props: Props)
{
	return (
		<List>
			<TransitionGroup >
				{
					props.tasks.map((task) => (
						<Collapse key={task.taskId}>
							<div>
								<TodoItem
									handleOnTaskChecked={props.handleOnTaskChecked}
									task={task.text}
									done={task.done}
									taskId={task.taskId}
									onTaskDelete={props.onTaskDelete} />
							</div>
						</Collapse>
					))
				}
			</TransitionGroup>
		</List>
	);
}

function EmptyList()
{
	return (
		<div>The List is empty</div>
	)
}

type Props = {
	handleOnTaskChecked: (isChecked: boolean, taskId: number) => void;
	tasks: TodoTask[];
	onTaskDelete: (taskId: number) => void;
}

export default function TasksContainer(props: Props)
{
	const todoTasks = props.tasks.filter(task => task.done !== true);
	const doneTasks = props.tasks.filter(task => task.done === true);

	const hasTodoTask = (todoTasks.length > 0);
	const hasCompleteTask = (doneTasks.length > 0);

	return (
		(props.tasks.length > 0) ?
			< div >
				< TransitionGroup >
					{hasTodoTask ? <Collapse>< h2 > Tasks</h2 ></Collapse > : null}
				</TransitionGroup >

				<RenderTasks handleOnTaskChecked={props.handleOnTaskChecked} tasks={todoTasks} onTaskDelete={props.onTaskDelete} />

				< TransitionGroup >
					{hasCompleteTask ? <Collapse>< h2 > Completed Tasks</h2 > </Collapse > : null}
				</TransitionGroup >

				<RenderTasks handleOnTaskChecked={props.handleOnTaskChecked} tasks={doneTasks} onTaskDelete={props.onTaskDelete} />
			</div > : <EmptyList />
	)
}
