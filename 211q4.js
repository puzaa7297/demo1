function fetchDataWithCallBack(err,callback){
    setTimeout(()=>{
        if(err){callback("Error!!",null);
        }
        else{
            const data={id:1,name:"John"};
            callback(null,data);
        }
    },2000);
}
function callback(err,data){
    if(err){console.log(err);}
    else{
        console.log(data);
    }
}
fetchDataWithCallBack(false,callback)
fetchDataWithCallBack(true,callback)