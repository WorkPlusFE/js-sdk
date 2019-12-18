import path from'path';
import nodeResolve from '@rollup/plugin-node-resolve';
// import replace from '@rollup/plugin-replace';

// import babel from 'rollup-plugin-babel';
// import alias from 'rollup-plugin-alias';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import { uglify } from 'rollup-plugin-uglify';
import typescript from 'rollup-plugin-typescript2'

const resolveFile = (filePath) => path.join(process.cwd(), '.', filePath);

const env = process.env.NODE_ENV;
const pkg = require('../package.json');
const banner =
  '/*!\n' +
  ' * ' + pkg.name + '.js v' + pkg.version + '\n' +
  ' * (c) ' + new Date().getFullYear() + ' ' + pkg.author + '\n' +
  ' */\n';


const plugins = [
  typescript({
    tsconfig: 'tsconfig.build.json',
    tsconfigOverride: {
      noEmit: false,
      declaration: true,
      declarationDir: "dist/types",
    },
    include: ['*.ts+(|x)', '**/*.ts+(|x)', '../**/*.ts+(|x)'],
  }),
  nodeResolve(),
  commonjs(),
  // babel(),
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
    name: 'WorkPlus',
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
            return /sdk.js/i.test(comment.value);
          }
          return false;
        }
      }
    }),
    filesize(),
  );

  config.output = [{
    file: resolveFile(pkg['main:min']),
    format: 'umd',
    name: 'WorkPlus',
    banner: banner,
  }];
}

export default config;