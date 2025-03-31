const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

let red = 255;
let green = 255;
let blue = 255;

const form = () => {
  return `
  <body style="background-color: rgb(${red}, ${green}, ${blue});">
  <p style="color: white; padding: 10px;">Current Background Color: rgb(${red}, ${green}, ${blue})</p>
  <form method="POST">
    <label>Red (0-255): <input type="number" name="red" min="0" max="255" value="${red}"></label>
    <label>Green (0-255): <input type="number" name="green" min="0" max="255" value="${green}"></label>
    <label>Blue (0-255): <input type="number" name="blue" min="0" max="255" value="${blue}"></label>
    <button type="submit">Submit</button>
  </form>
  </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      red = body["red"];
      green = body["green"];
      blue = body["blue"];
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.on("request", (req) => {  
  console.log("event received: ", req.method, req.url);  
});  
server.listen(3000);
console.log("The server is listening on port 3000.");
