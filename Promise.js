function fn() {
    return new Promise(function(resolve,reject){
               
        resolve("Sagar") 
        // reject()              // creating the Promise
                        
    })
}

 fn().then(function(response){
    //logic if u get success response
       console.log(response)            // Handling the Promise
 },function(error){
     //logic if u get error
     console.log("Error")
 })