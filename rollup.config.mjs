import external from 'rollup-plugin-peer-deps-external';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import autoprefixer from 'autoprefixer';
import image from '@rollup/plugin-image';

// PostCSS plugins
import postcss from 'rollup-plugin-postcss';
 import simplevars from 'postcss-simple-vars';
 import nested from 'postcss-nested';
 import cssnext from 'postcss-cssnext';
 import cssnano from 'cssnano';

export default [
  {
    input: 'src/index.js',
    output: {
      dir: 'dist',
      format: 'cjs'
    },
    plugins: [
      external(),
      babel({
        babelHelpers: 'bundled',
        extensions: [".js", ".jsx"],
        presets: ["@babel/preset-react"],
      }),
      commonjs(),
      resolve({ 
        extensions: ['.js', '.jsx'],
        moduleDirectories: ['node_modules']
      }),
      postcss({
        plugins: [
          simplevars(),
          nested(),
          cssnext({ warnForDuplicates: false, }),
          cssnano(),
        ],
        extensions: ['.css']
      }),
      image()
    ],
    external: ["react", "react-dom"],
  }
];