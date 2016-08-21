import typescript from 'rollup-plugin-typescript';
import replace from 'rollup-plugin-replace'
import uglify from 'rollup-plugin-uglify';

export default {
  entry: 'src/index.tsx',
  dest: 'dist/bundle.js',
  format: 'umd',
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    typescript(),
    //uglify(),
  ]
}
