const fs = require('fs')
const path = require('path')

const file = path.join(__dirname, '..', 'dist', '知行学伴-原型.html')
const html = fs.readFileSync(file, 'utf8')
const count = (needle) => html.split(needle).length - 1

const blocks = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(
  (match) => match[1]
)

let syntaxPassed = 0
for (const block of blocks) {
  try {
    new Function(block)
    syntaxPassed += 1
  } catch (error) {
    console.log('SYNTAX_ERROR', error.message)
  }
}

const checks = {
  bytes: Buffer.byteLength(html, 'utf8'),
  external_script_tags: count('<script src='),
  external_stylesheets: count('rel="stylesheet"'),
  inline_script_blocks: blocks.length,
  script_syntax_ok: syntaxPassed,
  has_phone_shell_css: count('.phone-shell'),
  has_phone_shell_jsx: count('phone-shell'),
  has_create_root: count('createRoot'),
  has_echarts: count('echarts'),
  has_tailwind_reset: count('--tw-border-spacing-x'),
}

const ok =
  checks.external_script_tags === 0 &&
  checks.external_stylesheets === 0 &&
  checks.inline_script_blocks === 6 &&
  checks.script_syntax_ok === 6 &&
  checks.has_phone_shell_css > 0 &&
  checks.has_phone_shell_jsx > 0 &&
  checks.has_create_root > 0 &&
  checks.has_echarts > 0 &&
  checks.has_tailwind_reset > 0

console.log(JSON.stringify(checks, null, 2))
console.log('VERIFY', ok ? 'PASS' : 'FAIL')
process.exit(ok ? 0 : 1)