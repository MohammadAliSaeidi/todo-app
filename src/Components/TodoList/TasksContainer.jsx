import React from 'react'
import { TransitionGroup } from 'react-transition-group';
import TodoItem from './TodoItem/TodoItem.jsx';

import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';
import { List } from '@mui/material';

function RenderTasks({ handleOnTaskChecked, tasks, onTaskDelete })
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

function EmptyList()
{
	return (
		<div>The List is empty</div>
	)
}

export default function TasksContainer({ handleOnTaskChecked, tasks, onTaskDelete })
{
	const todoTasks = tasks.filter(task => task.done !== true);
	const doneTasks = tasks.filter(task => task.done === true);

	const hasTodoTask = (todoTasks.length > 0);
	const hasCompleteTask = (doneTasks.length > 0);

	return (
		(tasks.length > 0) ?
			< div >
				< TransitionGroup >
					{hasTodoTask ? <Collapse>< h2 > Tasks</h2 ></Collapse > : null}
				</TransitionGroup >

				<RenderTasks handleOnTaskChecked={handleOnTaskChecked} tasks={todoTasks} onTaskDelete={onTaskDelete} />

				< TransitionGroup >
					{hasCompleteTask ? <Collapse>< h2 > Completed Tasks</h2 > </Collapse > : null}
				</TransitionGroup >

				<RenderTasks handleOnTaskChecked={handleOnTaskChecked} tasks={doneTasks} onTaskDelete={onTaskDelete} />
			</div > : <EmptyList />
	)
}
