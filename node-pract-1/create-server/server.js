const http=require("http");

let server=http.createServer(function(req, res){
    // res.write("hello there");
    // res.writeHead(200,{"Content-Type":"text/html"});
// res.write("<h1>Hellow there<h1/>");
res.end(()=>{
    console.log("Request ended")
})
});

server.listen(3000,()=>{
    console.log("server is running on port 3000  <http://localhost:3000/>");
})

// res.send() is a method specific to Express.js, but in the given code, the http module is used to create the server, not Express.js.

// To fix the error, you can use res.writeHead() and res.end() methods, which are part of the Node.js HTTP module, like this: