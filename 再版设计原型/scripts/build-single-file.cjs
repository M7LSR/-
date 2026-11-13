const fs = require('fs')
const path = require('path')

const root = path.join(__dirname, '..')
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8')
const escapeScript = (code) => code.replace(/<\/script/gi, '<\\/script')

let html = read('preview.html')

html = html.replace(
  /<link rel="stylesheet" href="\.\/preview\.css[^"]*"\s*\/?>/,
  () => `<style>\n${read('preview.css')}\n</style>`
)

html = html.replace(
  /<script src="\.\/([^"?]+)(?:\?[^"]*)?"\s*><\/script>/g,
  (match, file) => `<script>\n${escapeScript(read(file))}\n</script>`
)

fs.mkdirSync(path.join(root, 'dist'), { recursive: true })
const out = path.join(root, 'dist', '知行学伴-原型.html')
fs.writeFileSync(out, html, 'utf8')

const bytes = Buffer.byteLength(html, 'utf8')
console.log('SINGLE_FILE_BYTES', bytes)
console.log('SINGLE_FILE_MB', (bytes / 1024 / 1024).toFixed(2))
console.log('SINGLE_FILE_PATH', out)