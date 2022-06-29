import React, {useState, useContext} from 'react'
import {LoginFormView} from './login-form.view'
import { UserContext } from '../user.context'

export const LoginForm = (props) => {
    const user = useContext(UserContext)

    const [loading, setLoading] = useState(false)
    const onSubmit = (args, otherArgs) => {
        setLoading(true)
        const {password, username} = args
        user.dispatch(user.signIn({username, password}))
        /*
        user.dispatch({type: 'SIGN_IN', payload: {
            username,
            password
        }})*/
        //user.signIn({username, password})
    }

    return (
        <LoginFormView onSubmit={onSubmit} loading={loading}/>
    )
}