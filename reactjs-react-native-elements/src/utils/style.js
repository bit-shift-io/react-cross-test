const flexDirectionMap = {
  'col': 'column',
  'column': 'column',
  'row': 'row'
}

const paddingMap = {
  '0': '0px',
  '1': '5px',
  '2': '10px',
  '3': '20px'
}

const keyMap = {
  // flex
  'fd': (v) => ({flexDirection: flexDirectionMap[v]}),
  'v': (v) => ({verticalAlign: v}),
  'h': (v) => ({horizontalAlign: v}),
  'f': (v) => ({flex: v}),

  // padding
  'p': (v) => ({padding: paddingMap[v] || v}),
  'pt': (v) => ({paddingTop: paddingMap[v] || v}),
  'pb': (v) => ({paddingBottom: paddingMap[v] || v}),
  'pl': (v) => ({paddingLeft: paddingMap[v] || v}),
  'pr': (v) => ({paddingRight: paddingMap[v] || v}),

  // margin
  'm': (v) => ({margin: paddingMap[v] || v}),
  'mt': (v) => ({marginTop: paddingMap[v] || v}),
  'mb': (v) => ({marginBottom: paddingMap[v] || v}),
  'ml': (v) => ({marginLeft: paddingMap[v] || v}),
  'mr': (v) => ({marginRight: paddingMap[v] || v}),

  // border
  'br': (v) => ({borderRadius: v}),
  'bw': (v) => ({borderWidth: v}),
  'bc': (v) => ({borderColor: v}),

  // other
  'bg': (v) => ({background: v}),
}

// Style props hook
// TODO: wrap in memo for performance?
export const useStyleProps = (props) => {
    const entries = Object.entries(props)
    let s = {}
    entries.forEach((entry) => {
        const [key, value] = entry
        const splits = key.split('-')
        if (splits.length <= 1) {
            return
        }

        const prefix = splits[0]
        if (!keyMap[prefix]) {
          return
        }

        const postfix = splits[1]
        const r = keyMap[prefix](postfix)
        s = {...s, ...r}
    })

    // special flex handling
    if (s.flexDirection) {
        const flexStyle = flex(s.flexDirection, s.verticalAlign, s.horizontalAlign)
        delete s.verticalAlign
        delete s.horizontalAlign
        s = {...s, ...flexStyle}
    }

    const {style, ...otherProps} = props
    const newStyle = [s, style || {}]
    return {style: newStyle, otherProps}
}

// Style props HOC
export const withStyleProps = (Component) => (props) => {
  const {style, otherProps} = useStyleProps(props)
  return <Component style={style} {...otherProps}/>
}

// method to get correct justification and alignent to make using flex easier
// eg: flex('row', bottom', 'right')
export const flex = (
  rowOrCol, //: 'row' | 'column',
  verticalAlign = 'top', //: 'top' | 'center' | 'bottom',
  horizontalAlign = 'left', //: 'left' | 'center' | 'right',
) => {
  let justifyContent = verticalAlign
  let alignItems = horizontalAlign

  switch (verticalAlign) {
    case 'bottom':
      justifyContent = 'flex-end'
      break

    case 'top':
      justifyContent = 'flex-start'
      break
  }

  switch (horizontalAlign) {
    case 'right':
      alignItems = 'flex-end'
      break

    case 'left':
      alignItems = 'flex-start'
      break
  }

  if (rowOrCol == 'row') {
    let temp = alignItems
    alignItems = justifyContent
    justifyContent = temp
  }

  return {justifyContent, alignItems, flexDirection: rowOrCol}
}