const { writeFile } = require("fs");

console.log("start");

writeFile("./temporary/fileB.txt", "This is line 1\n", (err) => {
  console.log("point 1");
  if (err) {
    console.log("This error happened: ", err);
  } else {
    writeFile("./temporary/fileB.txt", "This is line 2\n", { flag: "a" }, (err) => {
      console.log("point 2");
      if (err) {
        console.log("This error happened: ", err);
      } else {
        writeFile("./temporary/fileB.txt", "This is line 3\n", { flag: "a" }, (err) => {
          console.log("point 3");
          if (err) {
            console.log("This error happened: ", err);
          } else {
            console.log("File writing complete");
          }
        });
      }
    });
  }
});

console.log("end");