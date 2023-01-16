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
					done: false
				},
				{
					text: 'Turn off the TV',
					done: false
				},
				{
					text: 'Create react project',
					done: false
				},
				{
					text: 'Wake up',
					done: true
				},
				{
					text: 'Brush your teeth',
					done: true
				},
			],
		};
	}

	render()
	{
		return (
			<div className='panel todo-list'>
				<TasksContainer className='tasks-container' tasks={this.state.tasks.filter(task => task.done === false)} />
				<h2>Completed tasks</h2>
				<TasksContainer className='completed-tasks-container' tasks={this.state.tasks.filter(task => task.done === true)} />
				<AddTaskInput />
			</div>
		)
	}
}
