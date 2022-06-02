import { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
import { getFileList } from '../services/github'

export default function App(props) {
  const [filter, setFilter] = useState('')

  const files = props.files?.filter(file => {
    if (!filter) {
      return true
    }
    const path = file.path.replace('.md', '')
    const title = path.replaceAll('-', ' ')
    return title.includes(filter)
  }) || []
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text accessibilityRole="header" style={styles.text}>
          The Great Cookup
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={setFilter}
          value={filter}
        />

        {files.map(file => {
          const path = file.path.replace('.md', '')
          const title = path.replaceAll('-', ' ')
          return (
            <Text key={path} style={styles.link} accessibilityRole="link" href={`/${path}`}>{title}</Text>
          )
        })}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    //justifyContent: 'center',
    marginBottom: 50,
    marginTop: 50
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
  input: {
    borderWidth: 1,
    marginBottom: 20
  }
})


// called at build time
export async function getStaticProps() {
  const files = await getFileList()
  return {
    props: {
      files
    }
  }
}