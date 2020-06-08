#!/usr/bin/env node

process.argv.push('--cwd')
process.argv.push(process.cwd())
process.argv.push('--gulpfile')
process.argv.push(require.resolve('..')) // 自动寻找 package.json 中 main 字段的文件

require('gulp/bin/gulp')