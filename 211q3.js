function delayMessage(msg,delay,callback){
    setTimeout(()=>{
        console.log(msg);
        if(callback){
            callback();
        }

    },delay)
}
delayMessage("Hello",2000,()=>{
    console.log("Callback executed");
})