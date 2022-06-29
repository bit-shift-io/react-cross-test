import {useReducer} from 'react'
import {UserProvider} from '@features/users/user.context'

export const Providers = (props) => {
    return (
        <UserProvider>
            {props.children}
        </UserProvider>
    )
}