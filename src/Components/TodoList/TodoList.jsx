import React, { Component } from 'react'
import AddTaskInput from './AddTaskInput'
import CompletedTodosContainer from './CompletedTodosContainer'
import TodosContainer from './TodosContainer'

import './TodoList.css'

export default class TodoList extends Component
{
	render()
	{
		return (
			<div className='panel todo-list'>
				<TodosContainer />
				<CompletedTodosContainer />
				<AddTaskInput />
			</div>
		)
	}
}
