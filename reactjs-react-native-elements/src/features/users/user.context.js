import {createReducerContext} from '@utils/create-reducer-context'

const initialState = {
    username: 'Bob',
    password: '',
    isSignedIn: false
}

const reducerActions = {
    signIn: (state, action) => {
        return {
            ...state,
            isSignedIn: true
        }
    },

    signOut: (state, action) => ({...state, isSignedIn: false})
}

const asyncActions =  {
    signIn2: (payload, dispatch, state) => {
        console.log('simulate a fetch or something slow here')
        return new Promise((resolve, reject) => { 
            setTimeout(() => {
                //throw new Error("Bad signing attempte!")
                //reject('Bad signing attempte!')
                //return
                dispatch({type: 'signIn', payload})
                resolve()
            }, 1000)
        })
    },  
}

export const [UserContext, UserProvider, useUserReducer, useUserContext] = createReducerContext(initialState, reducerActions, asyncActions)
