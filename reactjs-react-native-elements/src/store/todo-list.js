import { createReduxModule } from "hooks-for-redux"
import _ from 'lodash'

//  - initialize redux state.count = 0
//  - export useCount hook for use in components
//  - export setCount to update state.count
export const [useTodoList, {addTodo, removeTodo}] = createReduxModule('todo-list', [], {
    addTodo: (state, todo) => {
        const newState = [...state, {
            id: state.length,
            title: 'new todo',
            comment: 'comment here...'
        }]
        return newState
    },

    removeTodo: (state, todo) => {
        const newState = state.filter(t => !_.isEqual(t, todo))
        return newState
    },
})
