const { writeFile, readFile } = require("fs").promises;

const writer = async () => {
  try {
    await writeFile('./temp.txt', 'Line 1\n');
    await writeFile('./temp.txt', 'Line 2\n', { flag: 'a' });
    await writeFile('./temp.txt', 'Line 3\n', { flag: 'a' });
  } catch(err) {
      console.log("An error occurred: ", err)
  }
}

const reader = async () => {
  try {
    const text = (await readFile('./temp.txt')).toString();
    console.log(text);
  } catch(err) {
      console.log("An error occurred: ", err)
  }
}

const readWrite = async () => {
  try {
    await writer();
    await reader();
  } catch(err) {
      console.log("An error occurred: ", err)
  }
}

console.log("start");

readWrite();

console.log("end");