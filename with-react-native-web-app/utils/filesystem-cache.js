// https://github.com/vercel/next.js/discussions/14533
import fs from 'fs'
import path from 'path'

const CACHE_DIR = path.join(process.cwd(), './.next-fs-cache')
const TTL_EXTENSION = '.ttl'

export const useFileSystemCache = (
  fn,
  { cacheBaseKey, ttl },
) => async (...args) => {
  const cacheKey = `${cacheBaseKey}${encodeURIComponent(JSON.stringify(args))}`

  const contentPath = path.join(CACHE_DIR, cacheKey)
  const ttlPath = `${contentPath}${TTL_EXTENSION}`

  const cacheMiss = async () => {
    const content = await fn(...args)
    fs.writeFileSync(contentPath, JSON.stringify(content))
    fs.writeFileSync(
      ttlPath,
      JSON.stringify(
        new Date(Date.now() + ttl)
      )
    )
    return content
  }

  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR)
  }

  if (fs.existsSync(contentPath) && fs.existsSync(ttlPath)) {
    const ttl = new Date(
      JSON.parse(
        fs.readFileSync(ttlPath, 'utf8')
      )
    )

    if (ttl.valueOf() > new Date().valueOf()) {
      return JSON.parse(
        fs.readFileSync(contentPath, 'utf8')
      )
    } else {
      return cacheMiss()
    }

  } else {
    return cacheMiss()
  }
}