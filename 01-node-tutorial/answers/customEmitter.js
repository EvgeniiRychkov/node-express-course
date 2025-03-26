const EventEmitter = require("events");  
const emitter = new EventEmitter();  

let count = 3;

emitter.on("start", () => {
  console.log("Start!");
});

emitter.on("count", () => {
  if (count > 0) {
    console.log(count);
    count--;
    setTimeout(() => {
      emitter.emit("count");
    }, 1000);
  } else {
    emitter.emit("start");  
  }
});

emitter.emit("count");
