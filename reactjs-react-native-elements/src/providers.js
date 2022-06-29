import {useReducer} from 'react'
import {UserContext, UserProvider, useUserReducer /*userReducer, userInitialState, signIn*/} from '@features/users/user.context'

export const Providers = (props) => {
    //const [userState, userDispatch] = useUserReducer() //useReducer(userReducer, userInitialState)
    return (
        <UserProvider /*value={{state: userState, dispatch: userDispatch, actions: {signIn}}}*/>
            {props.children}
        </UserProvider>
    )
}