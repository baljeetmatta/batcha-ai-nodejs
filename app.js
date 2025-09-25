// // const url="http://localhost:3000/api/products";
// // console.log(url);
// // const log=()=>{
// //     console.log("hello");

// // }
// // log();
// // //console.log(window);
// // //console.log(__filename);
// // //console.log(__dirname);
// // console.log(module);

// // const url="mongodb://localhost:27017";

// // const log=()=>{
// //     console.log("hello");
// // }
// // // module.exports.url=url;
// // // module.exports.log=log;
// // //module.exports={url:url,log:log};
// // module.exports={url,log};


// // // module.exports.log=log;
// // //console.log(module);

// const url="mongodb://localhost:27017";


// const log=()=>{
//     console.log("hello");
// }
// //module.exports=url;
// //module.exports=log;
// module.exports={url,log};


// const evt=require("./evt");
// // const EventEmitter=require("events");
// // const emitter=new EventEmitter();
// // emitter.on("done",()=>{
// //     console.log("Event Captured..")
// // })
// evt.emitter.on("done",()=>{
//     console.log("Event handled")

// })
// evt.log();

// const Logger=require("./evt");
// const logger=new Logger();
const logger=require("./evt");

logger.on("done",()=>{
    console.log("Event handled");
})
logger.log();


