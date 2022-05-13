import React, {useState} from 'react'
import {TodoListView} from './todo-list.view'
import {addTodo, useTodoList, setTodoList, removeTodo} from '../../store/todo-list'

export const TodoList = (props) => {
    const [loading, setLoading] = useState(false)

    return (
        <TodoListView list={useTodoList()} onAddPress={addTodo} onRemovePress={removeTodo} loading={loading}/>
    )
}