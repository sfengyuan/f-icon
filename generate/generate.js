const compiler = require('vue-template-compiler')
const { readdir, readFile, writeFile } = require('fs/promises')
const { resolve } = require('path')
const { camelCase } = require('change-case')

const featherDir = resolve(
  __dirname,
  '../node_modules/feather-icons/dist/icons/'
)

const testFeatherDir = resolve(
  __dirname,
  '../test/feather-icons/'
)

const srcDir= resolve(
  __dirname,
  '../src/'
)

const testSrcDir= resolve(
  __dirname,
  '../test/plugins/'
)

const sourceDir = process.env.NODE_ENV === 'test' ? testFeatherDir : featherDir
const outputDir = process.env.NODE_ENV === 'test' ? testSrcDir : srcDir
const outputIconsDir = resolve(outputDir, 'icons/')
const tagMap = {
  path: 'p',
  rect: 'r',
  circle: 'c',
  ellipse: 'e',
  line: 'l',
  polygon: 'g',
  polyline:'y'
}

async function start () {
  const reExport = [`export { default as default } from './icons/index'`]
  const fullMap = {}
  const filenames = await readdir(sourceDir)
  const queue = filenames.sort().map(f => readFile(resolve(sourceDir, f), { encoding: 'utf-8' }))
  const icons = await Promise.all(queue)
  icons
    .map(svg => {
      const { ast } = compiler.compile(svg)
      return cleanAst(ast)
    })
    .map(ast => {
      const basename = getName(ast[1].attrs.class)
      fullMap[basename] = simplifyAst(ast)
      return {
        basename,
        contents: makePlugin(basename, ast)
      }
    })
    .forEach(({ basename, contents }) => {
      reExport.push(
        `export { default as ${camelCase('f-' + basename)} } from './icons/${basename}'`
      )
      writeFile(resolve(outputIconsDir, basename + '.js'), contents)
    })

    writeFile(resolve(outputDir, 'main.js'), reExport.join('\n'))
    const fullTemplate = await readFile(resolve(__dirname, 'full-template.js'), { encoding: 'utf-8' })
    writeFile(resolve(outputIconsDir, 'index.js'), `const fullMap = ${JSON.stringify(fullMap)}\n${fullTemplate}`)
    if (process.env.NODE_ENV !== 'test') {
      writeFile(resolve(__dirname, '../docs-src/icon-list.js'), `export const iconList = ${JSON.stringify(Object.keys(fullMap))}`)
    }
}

function getName (s) {
  return s.match(/feather-([\w-]+)?/)[1]
}

function makePlugin (name, ast) {
  return `const ast = ${JSON.stringify(ast)}
  export default {
    install (Vue, options) {
      Vue.component('f-${name}', {
        render (h) {
          const r = ast => {
            const [tag, attrs, children] = ast
            return h(tag, attrs, children ? children.map(r) : [])
          }
          return r(ast)
        }
      })
    }
  }`
}

function cleanAst (ast) {
  if (!ast.tag) {
    return
  }
  return [
    ast.tag,
    {attrs: ast.attrsMap},
    ast.children.length ? ast.children.map(cleanAst).filter(c => c) : []
  ]
}



function simplifyAst (ast) {
  if (!ast || ast.length === 0) {
    return null
  }
  const [ _, __, children ] = ast
  return children.map(child => {
    const ret = []
    const [tag, attrs, grandsons] = child
    ret.push(tagMap[tag])
    ret.push(attrs.attrs)
    const sg = simplifyAst(grandsons)
    sg && ret.push(sg)
    return ret
  })
}

function simplifyData (astObj) {
  return Object.keys(astObj).reduce((data, key) => {
    data[key] = simplifyAst(astObj[key])
    return data
  }, {})
}

start()
