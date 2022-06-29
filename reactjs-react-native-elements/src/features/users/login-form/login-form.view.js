import {View, Text} from '@components'
import {Input, Button} from '@rneui/themed'
//import {useForm} from 'react-hook-form'
import {useForm} from '../../../hooks/use-form'

export const LoginFormView = (props) => {
    const {onSubmit, loading, error} = props
    const {register, handleSubmit} = useForm() 
    const test = register('test')
    return (
        <View>
            <Input 
                label='Username'
                {...register('username')}
            />
            <Input 
                label='Password'
                secureTextEntry={true}
                {...register('password')}
            />
            <Text>{error}</Text>
            <Button
                title="Submit"
                onPress={handleSubmit(onSubmit)}
                loading={loading}
            />
        </View>
    )
}