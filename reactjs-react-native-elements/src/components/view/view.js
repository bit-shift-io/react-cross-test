import {View as RNView} from 'react-native'
import {parseStyleProps} from '../../utils/style'

export const View = (props) => {
    const {style, otherProps} = parseStyleProps(props)
    return (
        <RNView style={style} {...otherProps}/>
    )
}