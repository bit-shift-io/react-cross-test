
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import _ from 'lodash'
//import { useFileSystemCache } from '../utils/filesystem-cache'
import { marked } from 'marked'
import { getFileList } from '../services/github'

export default function Recipe(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/*
        <Text accessibilityRole="header" style={styles.text}>
          Recipe Page
        </Text>
    */}

        <Text style={styles.link} accessibilityRole="link" href={`/`}>
          Go Back
        </Text>

  {/*
        <Text>
          {props.content}
        </Text>
    */}

        <div dangerouslySetInnerHTML={{__html: props.html}}/>

        
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    width: '80%'
  },
  text: {
    alignItems: 'center',
    fontSize: 24,
    marginBottom: 24,
  },
  link: {
    marginTop: 50,
    color: 'blue',
  },
})


export async function getStaticProps(props) {
  const url = `https://raw.githubusercontent.com/bit-shift-io/the-great-cook-up/main/${props.params.recipe}.md`
  const data = await fetch(url).then(r => r.text())
  const tokens = marked.lexer(data)
  const html = marked.parser(tokens)
  return {
    props: {
      content: data,
      //tokens,
      html
    }
  }
}

// This function gets called at build time
export async function getStaticPaths() {
    // TODO: I'm here trying to cache this request, so 
    // https://github.com/vercel/next.js/discussions/14533
    // it looks like we need to cache to disk

    const files = await getFileList()

    // Get the paths we want to pre-render based on posts
    const paths = files.map((file) => ({
      params: { recipe: file.path.replace('.md', '') },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }
  