//const events=require("events");
//console.log(events);
const EventEmitter=require("events");
const emitter=new EventEmitter();

emitter.emit("done");//raise 

//handler
emitter.on("done",()=>{
    console.log("Event Handled...")

})
emitter.emit("done");

