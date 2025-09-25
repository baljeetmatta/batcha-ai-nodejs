const http = require("http");
const fs = require("fs");
// const server=http.createServer((req,res)=>{
//     console.log("Request received");
//     res.setHeader("Content-type","text/html");

//     res.write("<b>Welcome to nodejs</b>");
//     res.end();



// });

const processRequest = (req, res) => {
    console.log("Request received ", req.url);
    if (req.url == "/") {
        // fs.readFile("index.html","utf-8",(err,data)=>{
        //     res.write(data);
        //     res.end();



        // })
        res.write(readURl("index.html"));
        res.end();
        
        //res.write ("Welcome to nodejs");
    }
    else if (req.url == "/about") {
        // fs.readFile("about.html","utf-8",(err,data)=>{
        //     res.write(data);
        //     res.end();
            


        // })
        res.write(readURl("about.html"));
        res.end();
        
        //res.write ("Welcome to nodejs");
    }
     else if (req.url == "/style.css") {
        // fs.readFile("style.css","utf-8",(err,data)=>{
        //     res.write(data);
        //     res.end();
            


        // })
        res.write(readURl("style.css"));
        res.end();
        
        
        //res.write ("Welcome to nodejs");
    }
    else if (req.url == "/script.js") {
        res.write(readURl("script.js"));
        res.end();

        // fs.readFile("script.js","utf-8",(err,data)=>{
        //     res.write(data);
        //     res.end();
            


        // })
    }
    else if (req.url == "/about")
    {
        res.write("About nodejs");
    res.end();
    }
    else
        res.end();


}
//const server = http.createServer(processRequest);
const pRequest=(req,res)=>{
    let filename="index.html";
    
    if(req.url!="/")
    {
      filename=  req.url.substring(1);
      if(!filename.endsWith(".html"))
        filename=filename+".html";
    
    }
    res.write(readURl(filename));
    res.end();


}
const server = http.createServer(pRequest);

server.listen(3000);
// server.on("connection",(socket)=>{
//     console.log("A new request has been received...");
// })

function readURl(filename){
    // fs.readFile(filename,"utf-8",(err,data)=>{
    //        return data;
    // });
    try{
   return  fs.readFileSync(filename,"utf-8");
    }catch(er){
        return "";

    }


}