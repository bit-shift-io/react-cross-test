const fs = require('fs').promises;
const got = require('got');


// https://api.github.com/repos/bit-shift-io/the-great-cook-up/git/trees/main
// https://raw.githubusercontent.com/bit-shift-io/the-great-cook-up/main/garlic-butter-prawns.md

(async () => {
    const data = await got('https://api.github.com/repos/bit-shift-io/the-great-cook-up/git/trees/main').json()

    const r = await fs.writeFile('data/files.json', JSON.stringify(data))

    const ps = data.tree.map(async (file) => {
        const {path} = file
        if (!path.includes('.md')) {
            return null
        }

        const raw = await got(`https://raw.githubusercontent.com/bit-shift-io/the-great-cook-up/main/${path}`)

        const fileName = path.replace('.md', '.json')
        const r = await fs.writeFile(`data/${fileName}`, JSON.stringify({
            content: raw.body
        }))

        console.log('qwe')

        return null
    })
    await Promise.all(ps)

    console.log('qwe')
})()