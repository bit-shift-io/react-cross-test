import {useContext} from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import {View, Text} from './components'
import {LoginRoute} from '@features/users/login.route'
import {UserContext} from '@features/users/user.context'

function DetailsScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }

const Stack = createNativeStackNavigator()

export const Navigation = (props) => {
  // https://reactnavigation.org/docs/auth-flow/
  const user = useContext(UserContext)
  return (
    <NavigationContainer>
        <Stack.Navigator>
          {!user.state.isSignedIn ? (
            <>
              <Stack.Screen name="Login" component={LoginRoute} />
            </>
          ) : (
            <>
              <Stack.Screen name="Details" component={DetailsScreen} />
            </>
          )}
        </Stack.Navigator>
    </NavigationContainer>
  )
}