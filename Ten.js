let usernames =["kiran","anjan","srinesh","akhil"]; //use [] for reject function
            let id ="";
            function getProm(){
                return new Promise(function(resolve,reject){
                    if(usernames.length > 0)
                    resolve(usernames);
                    else
                    reject("Add Users");
                });
            }
            function userData(){
                let prom = getProm();
                prom.then(
                    (users)=>{id=setInterval(print,1000)}
                )
                .catch(
                    (x)=>{
                        console.log("Adding Duplicate Elements")
                        usernames.push(2,"DuplicateName1","DuplicateName2");
                        print();
                    }
                );
            }
            function print(){
                usernames.forEach((user)=>{console.log(user)});
                clearInterval(id);
            }
            console.log(userData());