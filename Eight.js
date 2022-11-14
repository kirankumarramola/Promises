let prom = new Promise(function(resolve){
    let num = 1;
    if(num>0)
    resolve(num);
    });
    prom.then(
        function(n){
            setInterval(()=>{console.log(n+" * "+n+" : "+(n*n));n++},1000);
        }
    )
    .finally(console.log("Square"));