const shell = require('shelljs')

shell.exec('yarn vue-cli-service build --target lib --name components src/entry-lib.js')
shell.cp('build/template/index.js.tpl', 'dist/index.js')
shell.rm('dist/components.common.*')
shell.rm('dist/demo.html')