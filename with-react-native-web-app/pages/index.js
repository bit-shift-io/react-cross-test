import { StyleSheet, Text, View } from 'react-native'
import { useFileSystemCache } from '../utils/filesystem-cache'

export default function App(props) {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.text}>
        React Native for Web & Next.js
      </Text>

      <Text style={styles.link} accessibilityRole="link" href={`/alternate`}>
        A universal link
      </Text>
      

      <View style={styles.textContainer}>
        <Text accessibilityRole="header" aria-level="2" style={styles.text}>
          Subheader
        </Text>
      </View>

      {props.files && props.files.map(file => {
        const path = file.path.replace('.md', '')
        return (
          <Text key={path} style={styles.link} accessibilityRole="link" href={`/${path}`}>{path}</Text>
        )
      })}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  link: {
    color: 'blue',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  text: {
    alignItems: 'center',
    fontSize: 24,
    marginBottom: 24,
  },
})


// called at build time
export async function getStaticProps() {
  const data = await useFileSystemCache(async () => {
      const r = await fetch('https://api.github.com/repos/bit-shift-io/the-great-cook-up/git/trees/main').then(r => r.json())
      return r
  }, {
      cacheBaseKey: 'basekey', 
      ttl: 600000
  })()

  //const data = await fetch('https://api.github.com/repos/bit-shift-io/the-great-cook-up/git/trees/main').then(r => r.json())
  return {
    props: {
      files: data.tree
    }
  }
}