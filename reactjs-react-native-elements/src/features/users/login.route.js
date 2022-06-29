import {View} from '@components'
import {LoginForm} from './login-form'

export const LoginRoute = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <LoginForm/>
      </View>
    )
}