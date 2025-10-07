const express=require("express");
const path=require("path");
const routes=express.Router();
routes.get("/dashboard",(req,res)=>{
    console.log(req.session.username);


    if(req.session.username)
    res.sendFile(path.join(__dirname,"../dashboard.html"));

else
    res.redirect("/users/login");

})
routes.get("/logout",(req,res)=>{
    req.session.destroy();
    res.redirect("/");

})
module.exports=routes;
