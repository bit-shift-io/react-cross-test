import { StyleSheet, Text, View } from 'react-native'

export default function Alternate(props) {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.text}>
        Alternate Page
      </Text>

      {props.files && props.files.map(file => {
        return (
          <Text key={file.path}>{file.path}</Text>
        )
      })}

      <Text style={styles.link} accessibilityRole="link" href={`/`}>
        Go Back
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  text: {
    alignItems: 'center',
    fontSize: 24,
    marginBottom: 24,
  },
  link: {
    color: 'blue',
  },
})


export async function getStaticProps() {

  const data = await fetch('https://api.github.com/repos/bit-shift-io/the-great-cook-up/git/trees/main').then(r => r.json())

  return {
    props: {
      files: data.tree
    }
  }
}