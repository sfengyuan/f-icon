import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const inputFile = 'src/main.js'

export default {
  input: inputFile,
  output: [
    {
      file: pkg.module,
      format: 'es',
    },
    {
      name: 'featherIconsVue',
      file: pkg.main,
      format: 'umd',
      exports: 'named'
    },
    {
      name: 'featherIconsVue',
      file: 'dist/index.iife.js',
      format: 'iife',
      exports: 'named'
    },
  ],
  plugins: [
    terser()
  ],
}
