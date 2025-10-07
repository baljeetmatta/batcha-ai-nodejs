const express=require("express");
const path=require("path");
const routes=express.Router();
const fs=require("fs");

routes.get("/login",(req,res)=>{
    if(req.session.username)
        res.redirect("/auth/dashboard");
    
    res.sendFile(path.join(__dirname,"../login.html"));
})
routes.get("/signup",(req,res)=>{
 res.sendFile(path.join(__dirname,"../signup.html"));
})
routes.post("/login",(req,res)=>{

     fs.readFile("./users.json","utf-8",(err,data)=>{

        let users=JSON.parse(data);
          const results= users.filter((item)=>{
                    if(item.username==req.body.username)
                        return true;
                });
        if(results.length==0)
            res.redirect("/Login.html");
        else
        {
            req.session.username=req.body.username;

            res.redirect("/auth/dashboard");
        }

     });

})
routes.post("/register",(req,res)=>{
    
        let obj={
            username:req.body.username,
            password:req.body.password
        }
        let users=[];
        console.log(req.body.username)
;        fs.readFile("./users.json","utf-8",(err,data)=>{

            if(err)
                users=[];
            else
            {
                users=JSON.parse(data);
                console.log(users);
               const results= users.filter((item)=>{
                    if(item.username==req.body.username)
                        return true;
                });
                console.log(results);

            
                if(results.length!=0)
                    res.send("User already exists");
                else
                {
                    users.push(obj);
                    fs.writeFile("./users.json",JSON.stringify(users),()=>{
                        res.send("User created successfully");

                    })
                }
            }
        })

})

module.exports=routes;
