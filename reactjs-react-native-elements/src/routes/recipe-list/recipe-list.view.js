import {View, Text} from '../../components-core'
import {RecipeListItem} from '../../components'
import {Input, Button} from '@rneui/themed'
import {Link} from '@react-navigation/native'
import {ActivityIndicator} from 'react-native'

export const RecipeListView = (props) => {
    const {loading, items} = props
    if (loading) {
        return <ActivityIndicator/>
    }

    return (
        <View>
            {items && items.map(item => <RecipeListItem item={item} key={item.path}/>)}
        </View>
    )
}