const express=require("express");
const app=express();
// const staticFile=require("./public/index.html")

app.use(express.static("public")) ;
// This tells Express to serve any files in the public directory directly, without the need for a route. So, if you have an HTML file in the public directory, you can access it by navigating to http://localhost:3000/filename.html in your browser.
// However, in your code, you're trying to define a route for the root URL ("/") and render the HTML file using res.render(). Since you're not using a template engine, this will throw an error.

// To fix this, you can simply remove the route for the root URL, and let the express.static() middleware handle serving the HTML file:
app.use(express.json());
// app.use(express.urlencoded({extended:true}));


// ---------Note ⚠ Note that the express.static() middleware will serve files from the public directory based on their file name and extension, so you don't need to define separate routes for different types of files.
app.get("/",(req, res)=>{
    // res.sendFile(staticFile);
//  res.render(staticFile); //will thow error

})


app.listen(3000,()=>{
    console.log("express server is listening to the port 3000")
})

// To serve images, videos, or other assets from the public directory, you can simply place them in the public directory and access them by their URL. For example, if you have an image file called image.jpg in the public directory, you can access it by navigating to http://localhost:3000/image.jpg in your browser.