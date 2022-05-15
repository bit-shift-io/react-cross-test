import {Link} from '@react-navigation/native'
import {View, Text} from '../../components-core'
import { ListItem, Avatar } from '@rneui/themed'

export const RecipeListItem = (props) => {
    const {item} = props
    return (
        <Link to={{ screen: 'Recipe', params: item }}>
            <ListItem bottomDivider style={{width: '300px'}}>
                <ListItem.Content>
                    <ListItem.Title>{item.title}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        </Link>
    )
}