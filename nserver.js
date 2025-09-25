const http = require("http");
const fs = require("fs");
const url = require("url");


const pRequest = (req, res) => {
    let filename = "index.html";
    // /save-data, /saved
    // ServerName:portNo/pathname?QueryString
    //variablename=value&variablename=value
    const parsedUrl = url.parse(req.url,true);
    console.log(parsedUrl);

    //if (req.url.startsWith("/save")) {
    if(parsedUrl.pathname=="/save" && req.method=="GET" ){
        // console.log("Request rec.");
        // res.write("Request rec."+parsedUrl.query.username);


        // res.end();
        let users=[];
        fs.readFile("users.json","utf-8",(err,data)=>{
            if(err)
                users=[];
            else
                users=JSON.parse(data);

          const results=  users.filter((item)=>{
                    if(item.username==parsedUrl.query.username)
                        return true;
                    
            })
            if(results.length!=0)
            {
                res.write("User already exits");
                res.end();
            }
            else{
            users.push({
                username:parsedUrl.query.username,
                password:parsedUrl.query.password
            })
            fs.writeFile("users.json",JSON.stringify(users),()=>{
                res.write("User Created");
                res.end();

            })
        }
        })

    }
    else  if(parsedUrl.pathname=="/save" && req.method=="POST" ){

        let body="";
        req.on("data",(chunk)=>{

                body+=chunk;
        })
        req.on("end",()=>{

            const parse=new URLSearchParams(body);//get parameters
           // console.log(parse.get("username"));
           const parsedData= Object.fromEntries(parse);//object
           console.log(parsedData);
           



            res.write(body);
            res.end();

        })

    }
    else if (req.url != "/") {
        // /script.js
        // /style.css
        // /save
        filename = req.url.substring(1);
        res.write(readURl(filename));
        res.end();

    }

}
http.createServer(pRequest).listen(3000);
function readURl(filename) {
    // fs.readFile(filename,"utf-8",(err,data)=>{
    //        return data;
    // });
    try {
        return fs.readFileSync(filename, "utf-8");
    } catch (er) {
        return "";

    }


}

