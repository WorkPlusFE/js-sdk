import path from'path';
import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import { uglify } from 'rollup-plugin-uglify';

const resolveFile = (filePath) => path.join(__dirname, '.', filePath);

const env = process.env.NODE_ENV;
const pkg = require('./package.json');
const banner =
  '/*!\n' +
  ' * ' + pkg.name + '.js v' + pkg.version + '\n' +
  ' * (c) ' + new Date().getFullYear() + ' ' + pkg.author + '\n' +
  ' */\n';

const config = { 
  input: './index.js',
  plugins: [
    nodeResolve(),
    commonjs(),
    babel(),
  ],
  external: null,
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