import {View, Text} from '@components'
import {Link} from '@react-navigation/native'
import {LoginForm} from './login-form'

export const LoginRoute = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <LoginForm/>
        <Link to={{ screen: 'Details', params: { id: 'jane' } }}>
            Goto details
        </Link>
      </View>
    );
}