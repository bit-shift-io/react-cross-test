import React, {useState, useContext} from 'react'
import {LoginFormView} from './login-form.view'
import { UserContext } from '../user.context'

export const LoginForm = (props) => {
    const user = useContext(UserContext)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState()

    const onSubmit = (args, otherArgs) => {
        setLoading(true)
        setError()
        const {password, username} = args
        const p = user.signIn2({username, password})
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
        //console.log(p)
    }

    return (
        <LoginFormView onSubmit={onSubmit} loading={loading} error={error}/>
    )
}