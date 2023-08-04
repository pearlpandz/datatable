import external from 'rollup-plugin-peer-deps-external';
import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import image from '@rollup/plugin-image';
import React from 'react';

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
        plugins: [autoprefixer()],
        sourceMap: true,
        extract: true,
        minimize: true,
        extensions: ['.css', '.scss']
      }),
      image()
    ],
    external: ["react", "react-dom"],
  }
];