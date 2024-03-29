import path from'path';
import nodeResolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import { uglify } from 'rollup-plugin-uglify';
import ts from 'rollup-plugin-typescript2'

const resolveFile = (filePath) => path.join(process.cwd(), '.', filePath);

const env = process.env.NODE_ENV;
const pkg = require('../package.json');
const version = process.env.VERSION || pkg.version;
const banner =
  '/*!\n' +
  ' * WorkPlus JS-SDK v' + version + '\n' +
  ' * (c) ' + new Date().getFullYear() + ' ' + pkg.author + '\n' +
  ' * MIT License \n' +
  ' */\n';

const footer = '\n/* 最终解析权归 恒拓高科(https://workplus.io) 所有! */';

let hasTSChecked = false

const tsPlugin = ts({
  check: process.env.NODE_ENV === 'production' && !hasTSChecked,
  tsconfig: './modules/tsconfig.json',
  tsconfigOverride: {
    compilerOptions: {
      declaration: true,
      declarationMap: false,
      declarationDir: "/dist/types",
    },
    exclude: ['test']
  }
})

const plugins = [
  tsPlugin,
  nodeResolve(),
  commonjs(),
  json(),
  replace({
    values: {
      __VERSION__: `v${version}`,
    },
  }),
]

const config = { 
  input: './modules/index.ts',
  plugins,
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  output: [{
    file: resolveFile(pkg['main']),
    format: 'umd',
    name: 'w6s',
    banner: banner,
  }, {
    file: resolveFile(pkg['module']),
    format: 'esm',
    banner: banner,
  }],
};

if (env === 'production') {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
      },
      output: {
        comments: function(node, comment) {
          if (comment.type === "comment2") {
            return /WorkPlus JS-SDK|https:\/\/workplus.io/i.test(comment.value);
          }
          return false;
        }
      }
    }),
    filesize(),
  );

  config.output = [{
    file: resolveFile(pkg['main:min']).replace(/{{_VERSION_}}/, version),
    format: 'umd',
    name: 'w6s',
    banner,
    footer,
  }];
}

export default config;