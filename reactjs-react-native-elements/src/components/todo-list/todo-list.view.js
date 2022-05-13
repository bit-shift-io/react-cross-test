import {View, Text} from '../../components-core'
import {Input, Button} from '@rneui/themed'

export const TodoItem = (props) => {
    const {todo, onRemovePress} = props
    return (
        <View>
            <Text>{todo.title}</Text>
            <Text>{todo.comment}</Text>
            <Button
                title="-"
                onPress={onRemovePress}
            />
        </View>
    )
}

export const TodoListView = (props) => {
    const {list, onAddPress, onRemovePress} = props
    return (
        <View>
            {list.map(todo => {
                return <TodoItem todo={todo} onRemovePress={() => onRemovePress(todo)}/>
            })}
            <Button
                title="+"
                onPress={onAddPress}
            />
        </View>
    )
}