const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..')
const Babel = require('../vendor/babel.min.cjs')
const source = fs.readFileSync(path.join(root, 'src/preview-app.jsx'), 'utf8')

const output = Babel.transform(source, {
  filename: 'preview-app.jsx',
  presets: ['react'],
}).code

fs.writeFileSync(path.join(root, 'preview.js'), `${output}\n`, 'utf8')
console.log('PREVIEW_JS_BYTES', Buffer.byteLength(output, 'utf8'))