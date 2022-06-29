import {useReducer} from 'react'
import { createContext } from 'react'

export const createReducerContext = (initialState, reducerActions, asyncActions) => {
    const Context = createContext()

    const reducer = (state, action) => {
        // forward the action to the function if it exists, else throw an error
        if (!reducerActions[action.type]) {
            throw new Error();
        }
        return reducerActions[action.type](state, action)
    }

    const useReducerHook = () => {
        const [state, dispatch] = useReducer(reducer, initialState)

        const wrappedAsyncActions = {}

        // turn any reducerActions into async actions
        for (const [actionName, actionFn] of Object.entries(reducerActions)) {
            wrappedAsyncActions[actionName] = (payload) => {
                return dispatch({type: actionName, payload})
            }
        }

        // create wrapped function around asyncActions
        // so we can pass in dispatch and state
        for (const [actionName, actionFn] of Object.entries(asyncActions)) {
            wrappedAsyncActions[actionName] = (payload) => {
                return actionFn(payload, dispatch, state)
            }
        }

        return [state, dispatch, wrappedAsyncActions]
    }

    const Provider = (props) => {
        const [state, dispatch, wrappedAsyncActions] = useReducerHook()
        return (
            <Context.Provider value={{state, dispatch, ...wrappedAsyncActions}}>
                {props.children}
            </Context.Provider>
        )
    }

    return [Context, Provider, useReducerHook]
}