const { writeFile, readFile } = require('fs').promises;

writeFile('./temp.txt', 'Line 1\n')
  .then(() => writeFile('./temp.txt', 'Line 2\n', { flag: 'a' }))
  .then(() => writeFile('./temp.txt', 'Line 3\n', { flag: 'a' }))
  .then(() => {
    return readFile('./temp.txt', 'utf-8');
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log('This error happened: ', err);
  });