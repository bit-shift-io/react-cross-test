import {View, Text} from '../../components-core'
import {Input, Button} from '@rneui/themed'
import {ActivityIndicator} from 'react-native'

export const RecipeView = (props) => {
    const {loading, content} = props
    if (loading) {
        return <ActivityIndicator/>
    }

    return (
        <View>
            <Text>{content}</Text>
        </View>
    )
}