// hooks-for-redux seems good if we need reduc support
// but ideally we don't
import { createReduxModule } from "hooks-for-redux"
import _ from 'lodash'

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
