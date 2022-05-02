const version = require('../package.json').version
const fs = require('fs')
const path = require('path')

fs.writeFileSync(
  path.resolve(__dirname, '..', 'src', 'version.ts'),
  `export default '${version}'\n`
)
