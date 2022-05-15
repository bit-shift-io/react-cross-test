//import fetchJsonp from 'fetch-jsonp'
import {titleCase} from '../utils/string'

const apiUrl = 'https://api.github.com/repos/bit-shift-io/the-great-cook-up'

export const getRecipeList = async () => {
    return fetch(`${process.env.PUBLIC_URL}/data/files.json`)
        .then(r => r.json())
        .then(r => {
            const tree = r.tree //.data.tree
            const items = tree.map(item => {
                return {
                    title: titleCase(item.path.replace('.md', '')),
                    path: item.path
                }
            })
            return items
        })
        .catch(e => {
            console.error(e)
            throw e
        })
    /*
    return fetchJsonp(`${apiUrl}/git/trees/main`) //?recursive=1
        .then(r => {
            return r.json()
        })
        .then(r => {
            const tree = r.data.tree
            return tree
        })
        .catch(e => {
            console.error(e)
            throw e
        })
        */
}

export const getRecipe = (path) => {
    return fetch(`${process.env.PUBLIC_URL}/data/${path.replace('.md', '.json')}`)
        .then(r => r.json())
        .then(r => {
            return r.content//.data
        })
        .catch(e => {
            console.error(e)
            throw e
        })
    /*
    return fetchJsonp(`${apiUrl}/contents/${path}`)
    .then(r => r.json())
    .then(r => {
        return r//.data
    })
    .catch(e => {
        console.error(e)
        throw e
    })*/
}