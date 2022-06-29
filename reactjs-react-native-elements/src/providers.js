import {useReducer} from 'react'
import {UserContext, userReducer, userInitialState, signIn} from '@features/users/user.context'

export const Providers = (props) => {
    const [userState, userDispatch] = useReducer(userReducer, userInitialState)
    return (
        <UserContext.Provider value={{...userState, dispatch: userDispatch, signIn}}>
            {props.children}
        </UserContext.Provider>
    )
}