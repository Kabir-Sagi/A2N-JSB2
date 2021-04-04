function fn() {
  var pRef=  document.createElement('h1')
        var content=  document.createTextNode("Welcome to JS")
      pRef.append(content) 
      
    var bodyRef=  document.querySelector('body')

    bodyRef.appendChild(pRef)
}