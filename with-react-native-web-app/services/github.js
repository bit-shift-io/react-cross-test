import fs from 'fs'
import { useFileSystemCache } from '../utils/filesystem-cache'

export const getFileList = async () => {
    const data = await useFileSystemCache(async () => {
        const r = await fetch('https://api.github.com/repos/bit-shift-io/the-great-cook-up/git/trees/main').then(r => r.json())
        return r
    }, {
        cacheBaseKey: 'main-file-list',
        ttl: 600000
    })()

    const ignoreFiles = ['.gitignore', 'README.md', 'img']
    const files = data.tree.filter(file => {
        if (ignoreFiles.includes(file.path)) {
            return false
        }
        return true
    })
    return files
}