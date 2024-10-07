// we are going try built in node modules

const fs=require("fs");
fs.readFile("text.txt","utf-8",function(err,data){
    // first parameter would be the error and second would be the data , param name could be(error , textData)
    if(err){
        console.log(err);
        return
    }
    else{
        console.log(data);
    }
})