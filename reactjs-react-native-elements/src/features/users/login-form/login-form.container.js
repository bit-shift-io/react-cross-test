import React, {useState} from 'react'
import {LoginFormView} from './login-form.view'
import { useUserContext } from '../user.context'

export const LoginForm = (props) => {
    const user = useUserContext()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    const onSubmit = (args, otherArgs) => {
        setLoading(true)
        setError()
        const {password, username} = args
        user.signIn2({username, password})
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <LoginFormView onSubmit={onSubmit} loading={loading} error={error}/>
    )
}