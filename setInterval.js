function fn() {
  var interval1=  setInterval(function(){
        console.log("Executing after every 2 seconds")
        
    },3000)

    setTimeout(function(){
         clearInterval(interval1)
    },10000)
}


fn()