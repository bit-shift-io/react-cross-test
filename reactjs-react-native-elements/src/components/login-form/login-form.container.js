import React, {useState} from 'react'
import {LoginFormView} from './login-form.view'

export const LoginForm = (props) => {
    const [loading, setLoading] = useState(false)
    const onSubmit = (args, otherArgs) => {
        setLoading(true)
        console.log('qwe')
    }

    return (
        <LoginFormView onSubmit={onSubmit} loading={loading}/>
    )
}