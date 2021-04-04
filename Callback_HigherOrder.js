function fnHi(a,b) {
     a()
     b()
}
// Higher Order function: Function which will take one or more functions as a Parameter  // fnHi()

// CallBack function: Function which will be passed as a  parameter // a,b is callback function
fnHi(function(){
    console.log("Am First Parameter")
},function(){
    console.log("Am Second Parameter")
})




  function h1(a,b) {
    console.log(a,b)
  }

  function h2(x,y){
      console.log("jbdj")
  }
    h1("a","b")
    h2(function(){},"sagar")