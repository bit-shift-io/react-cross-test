import {View, Text} from '../../components-core'
import {Input, Button} from '@rneui/themed'
import {Link} from '@react-navigation/native'
import {ActivityIndicator} from 'react-native'

export const RecipeItem = (props) => {
    const {item} = props
    return (
        <Link to={{ screen: 'Recipe', params: item }}>
            <View>
                <Text>{item.path}</Text>
            </View>
        </Link>
    )
}

export const RecipeListView = (props) => {
    const {loading, items} = props
    if (loading) {
        return <ActivityIndicator/>
    }

    return (
        <View>
            {items && items.map(item => <RecipeItem item={item} key={item.path}/>)}
        </View>
    )
}