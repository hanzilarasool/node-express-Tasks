// is used to deal with the url , like what the user has in browsers
// it is used to deal with the url in the server side
const url = require("url");
const http = require("http");

let server = http.createServer(function (req, res) {
  // req.headers is the headers that the user has sent with the request

  // res.statusCode=200;
  res.setHeader(200, { "Content-Type": "text/html" });
  console.log(req.url);
  res.write(req.url);
  res.end(); // Add this line to end the response otherwise the our browser tab will lead to infinte loading
});
server.listen(3000, () => {
  console.log("server is running on port 3000 <http://localhost:3000/>");
});
