const express=require("express");
const path=require("path");
const fs=require("fs");
const cookieParser=require("cookie-parser");
const session=require("express-session");

const userRoutes=require("./routes/userRoutes");

const authRoutes=require("./routes/authRoutes");

const app=express();//createServer->callback function
app.use(express.static("."));
app.use(cookieParser());
app.use(session({
    saveUninitialized:true,
    resave:false,
    secret:'asdsa#$#2sd',
    cookie:{
        maxAge:1000*60*60*24,
        

    }

}));

//bodyparser
// express.urlEncoded
// bodyparser

app.use(express.urlencoded({extended:false}));
app.use("/users",userRoutes);
app.use("/auth",authRoutes);



//extended ->false , querystring-> simple key/value 
//extended>true,   qs-> rich json libray

// app.get("/save",(req,res)=>{
//     console.log(req.query);
//     res.send("Welcome "+req.query.username);

// })
// app.post("/save",(req,res)=>{
//       console.log(req.body);
//     res.send("Welcome "+req.body.username);
// })




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

//Session Management
//CLIENT STATE MANAGE
//http connectionless
//Cookies - Client side information to be stored on client ->browser
//browser->Server, cookies
//1. Temp File -> expiry period -date/time
// server->Programmer->30 min
// Antivirus ->Enable
//2. Firewall block
//3. Credetials

//Session - client side information to be stored on server
// Timeout -> Non activity period - 5min
// express-session 
// cookie-parser 