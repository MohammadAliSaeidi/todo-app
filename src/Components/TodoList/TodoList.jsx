import React, { Component } from 'react'
import AddTaskInput from './AddTaskInput'
import TasksContainer from './TasksContainer'

import './TodoList.css'

export default class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {

			currentListId: 1,

			tasks: [
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
			],
		};

		this.handleOnTaskChecked = this.handleOnTaskChecked.bind(this);
	}

	handleOnTaskChecked(event, taskId) {

		console.log(this.state.tasks.find(task => task.listId === this.state.currentListId && task.taskId === taskId));

		this.setState(prevState => {
			return {
				...prevState,
				tasks: prevState.tasks.map(task =>{
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

	render() {
		const tasks = this.state.tasks.filter(task => task.listId === this.state.currentListId);
		console.log(tasks);
		return (
			<div className='panel todo-list'>
				<TasksContainer handleOnTaskChecked={this.handleOnTaskChecked} tasks={tasks} />
				<AddTaskInput />
			</div>
		)
	}
}
