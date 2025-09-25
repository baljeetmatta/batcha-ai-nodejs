const express=require("express");
const path=require("path");

const app=express();//createServer->callback function
app.use(express.static("."));
//bodyparser
// express.urlEncoded
// bodyparser
app.use(express.urlencoded({extended:false}));
//extended ->false , querystring-> simple key/value 
//extended>true,   qs-> rich json libray

app.get("/save",(req,res)=>{
    console.log(req.query);
    res.send("Welcome "+req.query.username);

})
app.post("/save",(req,res)=>{
      console.log(req.body);
    res.send("Welcome "+req.body.username);
})




// // app.get("/",(req,res)=>{
// // //res.write("Welcome to home page");
// // //console.log(__dirname);

// // //res.end();
// // //res.sendFile(__dirname+"/index.html")
// // res.sendFile(path.join(__dirname,"./index.html"))
// // })

// app.get("/about",(req,res)=>{

// })
// app.get("/",(req,res)=>{
//     res.send("Home Page");

// })

// app.get(/.*/,(req,res)=>{

//     res.sendStatus(404).send("Page not found")
// })
app.listen(3000);
