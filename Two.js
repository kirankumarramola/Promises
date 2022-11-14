let data = ["kiran","12345"];
        let prom = new Promise(function(resolve,reject){
            if(data[0] === "kiran")
            resolve("Details Found");
            else
            reject("Details not found");
        });
        function print(){
            return "Name : "+data[0] + " Id : "+data[1];
        }
        prom.then(function(x){
            console.log("Details Found ");
            console.log(print());
            
        })
        .catch((x)=>{console.log(x+" Please try again")});