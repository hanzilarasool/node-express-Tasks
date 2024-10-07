const http=require("http");
const url=require("url");

let server=http.createServer(function(req, res){
//  e.g browser url was ?name=hanzila&age=25;
// how to extract the information from query?
console.log("----------here below----->>")
const query=url.parse(req.url, true).query
//{ name:"hanzila",age:20} : parse mean conversion , convert the url query into object we can access using dot notation in backend side
console.log(query.name, " ",query.age);
console.log(query,"is the query");
//  const urlWithoutQueryProp=url.parse(req.url, true);

//  console.log(urlWithoutQueryProp,"is the url witout query property")
 res.end();

})
server.listen(3000,()=>{
    console.log("listening at 3000");
})


// The reason you're seeing undefined undefined and an empty query object {} is because the browser is making another request to your server, but this time without the query parameters.

// When you start your server and open a browser to access http://localhost:3000/?name=hanzila&age=25, the browser sends a GET request to your server with the query parameters name=hanzila&age=25. Your server extracts these parameters and logs them to the console.

// However, when your server responds with res.end(), it doesn't send any HTML content back to the browser. By default, the browser will then request the favicon.ico file from your server, which is a small icon displayed in the browser's address bar or bookmarks.

// This favicon request is a separate GET request to your server, but this time without any query parameters. That's why you're seeing an empty query object {} and undefined undefined logged to the console.

// To avoid this, you can return some HTML content to the browser, like this:


// Copy code
// res.writeHead(200, {'Content-Type': 'text/html'});
// res.end('<h1>Hello World!</h1>');
// This will send a simple HTML response back to the browser, and it won't request the favicon.ico file.