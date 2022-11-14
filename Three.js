async function msg(){
    let id="";
    let start = true;
    let prom = new Promise(function(resolve,reject){
        if(start)
        id = setInterval(()=>{resolve("Hello");},1000);
        else
        id = setInterval(()=>{reject("Not Working");},1000);
    });
    console.log(await prom);
}
msg();