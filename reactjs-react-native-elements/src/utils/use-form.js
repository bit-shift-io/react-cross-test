import React, {useState} from 'react'

// a simplified version of this: https://react-hook-form.com/api/useform
export const useForm = (props) => {
    const [state, setState] = useState({})

    const register = (fieldName) => {

        const onChange = (event) => {
            const value = event.nativeEvent.text
            setState(prev => {
                const r = {...prev}
                r[fieldName] = value
                return r
            })
        }

        const onBlur = (event) => {
            console.log('qwe')
        }

        return {onChange, onBlur, name: fieldName, value: state[fieldName]}
    }

    const handleSubmit = (callback) => {
        return (event) => {
            callback(state, event)
        }
    }

    return {register, handleSubmit}
}