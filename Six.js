let n =10;
        let start = false;
        function printTable(){
        let prom = new Promise(function(resolve,reject){
            if(start)
            setTimeout(resolve,1000);
            else
            reject("change start");
        });
        prom.then(
        function(){
            for(let i=0;i<10;i++){
                console.log(n+" * "+i+" = "+(i*n));
            }
        }
        )
        .catch(
            function(x,callback){
                console.log("Changing Start value");
                start=true;
                printTable();
            }
        )
        }
        printTable();