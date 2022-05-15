import fetchJsonp from 'fetch-jsonp'

const apiUrl = 'https://api.github.com/repos/bit-shift-io/the-great-cook-up'

export const getRecipeList = () => {
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
}

export const getRecipe = (path) => fetchJsonp(`${apiUrl}/contents/${path}`)
    .then(r => r.json())
    .then(r => {
        return r//.data
    })
    .catch(e => {
        console.error(e)
        throw e
    })