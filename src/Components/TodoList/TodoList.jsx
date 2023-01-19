import React, { Component } from 'react'
import AddTaskInput from './AddTaskInput'
import TasksContainer from './TasksContainer'

import './TodoList.css'

export default class TodoList extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			tasks: [
				{
					text: 'Wash the dishes',
					taskId: 0,
					done: false
				},
				{
					text: 'Turn off the TV',
					taskId: 1,
					done: false
				},
				{
					text: 'Create react project',
					taskId: 2,
					done: false
				},
				{
					text: 'Wake up',
					taskId: 3,
					done: true
				},
				{
					text: 'Brush your teeth',
					taskId: 4,
					done: true
				},
			],
		};

		this.handleOnTaskChecked = this.handleOnTaskChecked.bind(this);
		this.handleOnAddTask = this.handleOnAddTask.bind(this);
	}

	handleOnTaskChecked(event, taskId)
	{
		this.setState(state =>
		{
			return {
				tasks: state.tasks.map(task =>
				{
					if (taskId === task.taskId)
					{
						return {
							...task,
							done: event.target.checked
						}
					}
					return task;
				})
			}
		});
	}

	handleOnAddTask(event, taskStr)
	{
		if (taskStr === "")
		{
			return;
		}

		this.setState(prevState =>
		{
			return {
				tasks: [
					...prevState.tasks,
					{

						text: taskStr,
						taskId: (prevState.tasks.at(-1).taskId) + 1,
						done: false
					}
				]
			}
		});
	}

	render()
	{
		return (
			<div className='panel todo-list'>
				<TasksContainer handleOnTaskChecked={this.handleOnTaskChecked} tasks={this.state.tasks} />
				<AddTaskInput handleOnAddTask={this.handleOnAddTask} />
			</div>
		)
	}
}
