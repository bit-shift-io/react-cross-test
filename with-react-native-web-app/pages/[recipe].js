
import { StyleSheet, Text, View } from 'react-native'
import _ from 'lodash'
import { useFileSystemCache } from '../utils/filesystem-cache'

export default function Recipe(props) {
  return (
    <View style={styles.container}>
      <Text accessibilityRole="header" style={styles.text}>
        Recipe Page
      </Text>

      <Text>
        {props.content}
      </Text>

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


export async function getStaticProps(props) {
  const data = await fetch(`https://raw.githubusercontent.com/bit-shift-io/the-great-cook-up/main/${props.params.path}`)
  return {
    props: {
      content: data
    }
  }
}

// This function gets called at build time
export async function getStaticPaths() {
    // TODO: I'm here trying to cache this request, so 
    // https://github.com/vercel/next.js/discussions/14533
    // it looks like we need to cache to disk

    const data = useFileSystemCache(async () => {
        const r = await fetch('https://api.github.com/repos/bit-shift-io/the-great-cook-up/git/trees/main').then(r => r.json())
        return r
    }, {
        cacheBaseKey: 'basekey'
    })
    /*
    // Call an external API endpoint to get posts
    const getFiles = _.memoize(async () => {
        const r = await fetch('https://api.github.com/repos/bit-shift-io/the-great-cook-up/git/trees/main').then(r => r.json())
        return r
    })
    const data = await getFiles()
    */
    
    // Get the paths we want to pre-render based on posts
    const paths = data.tree.map((file) => ({
      params: { recipe: file.path },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }
  