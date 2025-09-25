// const EventEmitter=require("events");
// const emitter=new EventEmitter();
// const log=()=>{

//     console.log("Log function execute...");
//     emitter.emit("done");
// }
// module.exports.log=log;
// module.exports.emitter=emitter;
const EventEmitter =require("events");


class Logger extends EventEmitter
{
    log=()=>{
        console.log("Log function executed...");
        this.emit("done");
    }

}
module.exports=new Logger();

