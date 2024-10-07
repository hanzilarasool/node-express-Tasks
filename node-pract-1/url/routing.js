const http=require("http");
let server=http.createServer(function(req,res){
    
    if(req.url==="/"){
        res.write("Home");
        res.end();
    }
    else if(req.url==="/about"){
        res.write("About");
        res.end();
    }else{
        res.writeHead(500,{"Content-Type":"text/plain"});
        res.end("Page not found");
    }
}).listen(3000);