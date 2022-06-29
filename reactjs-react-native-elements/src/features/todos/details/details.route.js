import {View, Button} from '@components'
import { useUserContext } from '@features/users/user.context'
import { TodoList } from '../todo-list/todo-list.container'

export const DetailsRoute = () => {
    const user = useUserContext()

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TodoList/>
        <Button
            title="Sign Out"
            onPress={user.signOut}
        />
      </View>
    )
}