import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import {LoginRoute} from '@features/users/login.route'
import {useUserContext} from '@features/users/user.context'
import {DetailsRoute} from '@features/todos/details/details.route'

const Stack = createNativeStackNavigator()

export const Navigation = (props) => {
  // https://reactnavigation.org/docs/auth-flow/
  const user = useUserContext()

  /*
  if (loading) {
    return <SplashScreen/>
  }*/

  return (
    <NavigationContainer>
        <Stack.Navigator>
          {!user.state.isSignedIn ? (
            <>
              <Stack.Screen 
                name="Login"
                component={LoginRoute}
                options={{
                  //title: 'Sign in',
                  // When logging out, a pop animation feels intuitive
                  // You can remove this if you want the default 'push' animation
                  animationTypeForReplace: 'push' ,//'pop' //user.state.isSignedIn ? 'pop' : 'push',
                }}
              />
            </>
          ) : (
            <>
              <Stack.Screen name="Details" component={DetailsRoute} />
            </>
          )}
        </Stack.Navigator>
    </NavigationContainer>
  )
}