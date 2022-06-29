import { createContext } from 'react'

export const UserContext = createContext()

export const userInitialState = {
    username: 'Bob',
    password: '',
    isSignedIn: false
}

export const userReducer = (state, action) => {
    switch (action.type) {
      case 'SIGN_IN':
        return {
          ...state,
          isSignedIn: true
        }
      
      default:
        return state
    }
}

export const signIn = ({username, password}) => {
    console.log('qwe')
    return (dispatch, getState) => {
        console.log('qwe2')
    }
}