const path = require('path')

const filePath = path.join('/content/', 'first.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'first.txt')
console.log(absolute)