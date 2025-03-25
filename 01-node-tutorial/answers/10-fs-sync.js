const { readFileSync, writeFileSync } = require('fs')

const filePath = './temporary/fileA.txt';

writeFileSync(filePath, 'Hello\n');
writeFileSync(filePath, 'I can add a line\n', { flag: 'a' });
writeFileSync(filePath, 'And 1 more\n', { flag: 'a' });

const content = readFileSync(filePath, 'utf-8');

console.log(content);