const { createReadStream } = require('fs');
const highWaterMark = 200;

const stream = createReadStream('../content/big.txt', { encoding: 'utf8', highWaterMark });

let chunkCount = 0;

stream.on("data", (chunk) => {
  chunkCount++;
  console.log(`Received chunk ${chunkCount}:`, chunk);
});

stream.on("end", () => {
  console.log(`Finished reading file. Total chunks: ${chunkCount}`);
});

stream.on("error", (err) => {
  console.error("An error occurred:", err);
});