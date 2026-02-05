import { resolve, dirname } from 'node:path'
import fs from 'node:fs'

export function folderAsAlias(basePath: string, prefix: string, folder: string) {
  const packages = fs.readdirSync(resolve(basePath, folder))
  return packages.reduce<[string, string][]>((arr, pkg) => {
    arr.push([prefix + pkg, resolve(basePath, folder, pkg, 'src/index.ts')])
    return arr
  }, [])
}

const rmLast = (str: string) => str.substring(0, str.length - 1)
export function getAliasFromTsConfig(tsConfigPath: string) {
  const basePath = dirname(tsConfigPath)
  console.log('basePath', basePath)
  const tsConfig = JSON.parse(fs.readFileSync(tsConfigPath, 'utf-8'))
  const paths = tsConfig.compilerOptions.paths as Record<string, string[]>
  const alias = Object.fromEntries(
    Object.entries(paths).flatMap(([key, value]) => {
      if (!key || !value) {
        return []
      } else if (!key.endsWith('/*')) {
        return [[key, value[0]]]
      } else {
        return folderAsAlias(basePath, rmLast(key), rmLast(value[0] as string))
      }
    })
  )

  console.log('alias', alias)

  return alias
}
