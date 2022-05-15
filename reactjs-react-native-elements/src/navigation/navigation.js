import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import {View, Text} from '../components-core'
import {Link} from '@react-navigation/native'
import {Recipe, RecipeList} from '../routes'

function LoginScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
        <Link to={{ screen: 'Details', params: { id: 'jane' } }}>
            Goto details
        </Link>
      </View>
    );
}

function DetailsScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }

const Stack = createNativeStackNavigator()

export const Navigation = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='RecipeList' component={RecipeList} />
                <Stack.Screen name='Recipe' component={Recipe} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}